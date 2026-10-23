"use client";
import { useEffect, useRef, useState } from "react";

// Horizontal scroll: the page scrolls down, but the row of slides slides sideways.
// How: a tall section + a sticky full-screen stage. Scroll progress p (0 to 1) moves the track left.
export default function HScroll({ id, no, title, video, children }) {
  const wrap = useRef(null), track = useRef(null), vid = useRef(null);
  const [hasVideo, setHasVideo] = useState(Boolean(video));
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      const w = wrap.current, t = track.current;
      const dist = Math.max(0, t.scrollWidth - innerWidth);       // how far the row must travel
      w.style.height = innerHeight + dist + "px";                 // so scroll distance = sideways distance
      const r = w.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight || 1)));
      t.style.transform = `translateX(${-p * dist}px)`;
      w.style.setProperty("--p", p);
      if (vid.current && vid.current.duration) vid.current.currentTime = p * vid.current.duration;
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    on();
    addEventListener("scroll", on, { passive: true }); addEventListener("resize", on); addEventListener("load", on);
    const late = setTimeout(on, 800);                              // re-measure after images load
    return () => { removeEventListener("scroll", on); removeEventListener("resize", on); removeEventListener("load", on); clearTimeout(late); cancelAnimationFrame(raf); };
  }, []);
  return (
    <section id={id} ref={wrap} className="hs">
      <div className="hstick">
        {hasVideo ? <video ref={vid} src={video} muted playsInline preload="auto" onError={() => setHasVideo(false)} /> : <div className="fallback" />}
        <div className="shade" />
        <div className="hshead mono">{no} / {title}</div>
        <div className="track" ref={track}>{children}</div>
        <div className="hsbar"><i /></div>
      </div>
    </section>
  );
}
