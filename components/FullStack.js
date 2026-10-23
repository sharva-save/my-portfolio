"use client";
import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "../lib/data";
import { getProjects } from "../lib/api";
import useApi from "../lib/useApi";

// The story you see while scrolling. step 0 to 3 changes as you move through the pinned section.
const STEPS = [
  "Frontend: React and Next.js. I build the interface people touch.",
  "Backend: Node, Express, MongoDB and JWT. I build what happens behind the button.",
  "Mobile: React Native and Expo. The same API, in your pocket.",
  "One API. Three screens. That’s full stack.",
];

export default function FullStack() {
  const wrap = useRef(null);
  const [step, setStep] = useState(0);
  const [built, setBuilt] = useState(false);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      const r = wrap.current.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
      wrap.current.style.setProperty("--p", p);
      setStep(Math.min(3, Math.floor(p * 4)));            // 4 steps over the scroll distance
      setBuilt(r.top < innerHeight * 0.3);                // start building the UI as it arrives
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    on(); addEventListener("scroll", on, { passive: true }); addEventListener("resize", on);
    return () => { removeEventListener("scroll", on); removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, []);

  const projects = useApi(getProjects, PROJECTS);
  const names = projects.map((p) => p.name);
  return (
    <section id="stack" ref={wrap} className={"fs" + (built ? " in" : "")} data-step={step}>
      <div className="fstick">
        <div className="fchips mono">
          {["Frontend", "Backend", "Mobile"].map((c, i) => <span key={c} className={step === i || step === 3 ? "on" : ""}>{c}</span>)}
        </div>

        <div className="devs">
          {/* FRONTEND: a browser that builds itself, with React-devtools style outlines */}
          <div className="dev browser">
            <div className="bchrome"><i /><i /><i /><span className="mono">localhost:3000</span></div>
            <div className="bbody">
              <div className="piece pnav" style={{ "--d": "0s" }}><em className="mono">&lt;Navbar /&gt;</em><b /><s /><s /><s /></div>
              <div className="piece phero" style={{ "--d": ".15s" }}><em className="mono">&lt;Hero /&gt;</em><h4 className="disp">SHARVA</h4><u /><u /></div>
              <div className="cards">{names.map((n, i) => <div className="piece card2" key={n} style={{ "--d": 0.3 + i * 0.12 + "s" }}><em className="mono">&lt;Card /&gt;</em>{n}</div>)}</div>
            </div>
            <small className="mono tech">React · Next.js · Tailwind</small>
          </div>

          <div className="wire w1"><i className="pkt" /><i className="pkt back" /></div>

          {/* BACKEND: API, auth and database, with a request log */}
          <div className="dev server">
            <div className="blk">Express API<small className="mono">/api/projects</small></div>
            <div className="blk">JWT auth<small className="mono">protected routes</small></div>
            <div className="blk db">MongoDB<small className="mono">Mongoose</small></div>
            <div className="log mono"><p>→ GET /api/projects</p><p>✓ 200 OK · 12 ms</p></div>
            <small className="mono tech">Node · Express · MongoDB</small>
          </div>

          <div className="wire w2"><i className="pkt" /><i className="pkt back" /></div>

          {/* MOBILE: a phone that loads the same data */}
          <div className="dev phonewrap">
            <div className="phone">
              <div className="app">
                <h5 className="disp">Projects</h5>
                <div className="rows">{names.concat(names).map((n, i) => <div className="row" key={i} style={{ "--d": i * 0.1 + "s" }}><span>{n}</span></div>)}</div>
              </div>
            </div>
            <small className="mono tech">React Native · Expo</small>
          </div>
        </div>

        <p key={step} className="cap disp">{STEPS[step]}</p>
        <div className="hsbar"><i /></div>
      </div>
    </section>
  );
}
