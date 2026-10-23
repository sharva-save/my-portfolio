"use client";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import ScrollScene from "../components/ScrollScene";
import Code from "../components/Code";
import FullStack from "../components/FullStack";
import Fitness from "../components/Fitness";
import Trading from "../components/Trading";
import Farm from "../components/Farm";
import Explore from "../components/Explore";
import Contact from "../components/Contact";

const TABS = [["code", "Code"], ["stack", "Full Stack"], ["fitness", "Fitness"], ["trading", "Trading"], ["adventure", "Adventure"], ["explore", "Explore"]];

export default function Page() {
  // "active" = the section crossing the middle of the screen. It sets the colour theme.
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const io = new IntersectionObserver(
      (list) => list.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-50% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <main data-theme={active}>
      <nav>
        <a href="#hero" className="logo disp">SHARVA</a>
        <div>{TABS.map(([id, name]) => <a key={id} href={`#${id}`} className={active === id ? "on" : ""}>{name}</a>)}</div>
      </nav>
      <Hero />
      <Marquee text="CODE · TRADE · LIFT · FARM · EXPLORE ·" />

      <Code />
      <FullStack />

      <ScrollScene id="fitness" no="02" title="Fitness" video="/media/run.mp4"
        lines={["Sunrise runs. Heavy lifts.", "A shaker of whey on the table.", "Discipline today, a stronger tomorrow."]}>
        <Fitness active={active === "fitness"} />
      </ScrollScene>

      <ScrollScene id="trading" no="03" title="Trading" video="/media/trading.mp4"
        lines={["Small capital. Big lessons.", "Risk first. Then patience.", "Every trade starts with where I’m wrong."]}>
        <Trading /> 
      </ScrollScene>

      <Farm />

      <ScrollScene id="explore" no="05" title="Explore" video="/media/torna.mp4"
        lines={[ "Many more to climb.", "A bigger perspective."]}>
        <Explore />
      </ScrollScene>

      <Contact />
      <div className="grain" />
    </main>
  );
}
