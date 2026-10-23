"use client";
import { useEffect, useState } from "react";

// Fixed starting data (so server and browser match), then a new candle arrives every second.
function seed() {
  let s = 7, p = 100; const out = [];
  const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 48; i++) { const o = p, c = o + (r() - 0.46) * 4; out.push({ o, c, h: Math.max(o, c) + r() * 1.5, l: Math.min(o, c) - r() * 1.5, v: 20 + r() * 60 }); p = c; }
  return out;
}
const W = 800, H = 300;

export default function Trading() {
  const [d, setD] = useState(seed);
  const [hover, setHover] = useState(null);
  useEffect(() => {
    const t = setInterval(() => setD((a) => {
      const o = a[a.length - 1].c, c = o + (Math.random() - 0.46) * 4;
      return [...a.slice(1), { o, c, h: Math.max(o, c) + Math.random() * 1.5, l: Math.min(o, c) - Math.random() * 1.5, v: 20 + Math.random() * 60 }];
    }), 1000);
    return () => clearInterval(t);
  }, []);
  const lo = Math.min(...d.map((k) => k.l)), hi = Math.max(...d.map((k) => k.h)), cw = W / d.length;
  const y = (v) => 10 + ((hi - v) / (hi - lo)) * (H - 80);
  const ma = d.map((k, i) => { const sl = d.slice(Math.max(0, i - 4), i + 1); return `${cw * i + cw / 2},${y(sl.reduce((a, b) => a + b.c, 0) / sl.length)}`; }).join(" ");
  const last = d[d.length - 1], shown = hover === null ? last : d[hover];
  const onMove = (e) => { const r = e.currentTarget.getBoundingClientRect(); setHover(Math.min(d.length - 1, Math.max(0, Math.floor(((e.clientX - r.left) / r.width) * d.length)))); };
  return (
    <div className="panelwrap">
      <div className="inner">
        <p className="lead">Small capital, big lessons. Every trade starts with where I’m wrong, not where I’ll win.</p>
        <div className="panel chart">
          <div className="ticker mono"><b></b> simulated data · O {shown.o.toFixed(1)} H {shown.h.toFixed(1)} L {shown.l.toFixed(1)} C {shown.c.toFixed(1)}</div>
          <svg viewBox={`0 0 ${W} ${H}`} onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
            {[0, 1, 2, 3].map((g) => <line key={g} x1="0" x2={W} y1={20 + g * 60} y2={20 + g * 60} className="grid" />)}
            {d.map((k, i) => { const up = k.c >= k.o, x = cw * i + cw / 2; return (
              <g key={i} className={up ? "up" : "dn"}>
                <rect x={cw * i + 2} width={cw - 4} y={H - k.v * 0.6} height={k.v * 0.6} className="vol" />
                <line x1={x} x2={x} y1={y(k.h)} y2={y(k.l)} />
                <rect x={x - cw * 0.3} width={cw * 0.6} y={y(Math.max(k.o, k.c))} height={Math.max(2, Math.abs(y(k.o) - y(k.c)))} />
              </g>); })}
            <polyline points={ma} className="ma" />
            <line x1="0" x2={W} y1={y(last.c)} y2={y(last.c)} className="last" />
            {hover !== null && <line x1={cw * hover + cw / 2} x2={cw * hover + cw / 2} y1="0" y2={H} className="cross" />}
          </svg>
          <div className="rules"><span>Risk first</span><span>Patience</span><span>Journal every trade</span></div>
        </div>
      </div>
    </div>
  );
}
