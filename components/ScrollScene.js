"use client";
import { useEffect, useRef, useState } from "react";

// A tall section with a sticky full-screen stage. While you scroll through it:
//  - --p (0 to 1) is set on the section, and the CSS uses it to reveal text and fade in the panel
//  - if a video is given, its playhead follows your scroll (the Apple AirPods trick)
export default function ScrollScene({ id, no, title, video, lines = [], children }) {
  const wrap = useRef(null), vid = useRef(null);
  const [hasVideo, setHasVideo] = useState(Boolean(video));
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      const r = wrap.current.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
      wrap.current.style.setProperty("--p", p);
      const v = vid.current;
      if (v && v.duration) v.currentTime = p * v.duration;
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    on(); addEventListener("scroll", on, { passive: true }); addEventListener("resize", on);
    return () => { removeEventListener("scroll", on); removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, []);
  return (
    <section id={id} ref={wrap} className="scene">
      <div className="stick">
        {hasVideo ? <video ref={vid} src={video} muted playsInline preload="auto" onError={() => setHasVideo(false)} /> : <div className="fallback" />}
        <div className="shade" />
        <div className="head"><span className="mono">{no}</span><h2 className="disp">{title}</h2></div>
        <div className="lines">{lines.map((l, i) => <p key={i} style={{ "--i": i }}>{l}</p>)}</div>
        <div className="slot">{children}</div>
      </div>
    </section>
  );
}
