"use client";
import { useEffect, useState } from "react";
import Media from "./Media";

const ROUTE = "M30 230 C110 110 190 270 280 170 S430 60 520 150 S650 260 770 110";
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

// Counts up from 0 to `to` while the section is on screen.
function useCount(to, run) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) { setV(0); return; }
    let f = 0;
    const t = setInterval(() => { f++; setV(to * Math.min(f / 40, 1)); if (f >= 40) clearInterval(t); }, 30);
    return () => clearInterval(t);
  }, [run, to]);
  return v;
}

export default function Fitness({ active }) {
  const km = useCount(5, active), steps = useCount(10000, active);
  const [done, setDone] = useState([true, true, false, true, false, false, false]);
  const toggle = (i) => setDone((d) => d.map((x, j) => (j === i ? !x : x)));
  return (
    <div className="panelwrap">
      <div className="inner">
        <p className="lead">Runs at sunrise, heavy lifts, a shaker of whey. It’s how I keep the rest of my day sharp.</p>
        <div className="panel map">
          <svg viewBox="0 0 800 300">
            <defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,.07)" /></pattern></defs>
            <rect width="800" height="300" fill="url(#g)" />
            <path d={ROUTE} className="route ghost" />
            <path d={ROUTE} className={"route " + (active ? "draw" : "")} />
            <circle r="14" className="pulse"><animateMotion dur="9s" repeatCount="indefinite" path={ROUTE} /></circle>
            <circle r="6" className="runner"><animateMotion dur="9s" repeatCount="indefinite" path={ROUTE} /></circle>
          </svg>
          <div className="kv"><div><b>{km.toFixed(1)} km</b><small>morning run</small></div><div><b>{Math.round(steps).toLocaleString("en-IN")}</b><small>steps a day</small></div></div>
        </div>
        <div className="week">{DAYS.map((d, i) => <button key={i} className={done[i] ? "on" : ""} onClick={() => toggle(i)}>{d}</button>)}<small>Tap a day to mark a workout done</small></div>
      </div>
    </div>
  );
}
