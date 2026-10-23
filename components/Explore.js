"use client";
import { useEffect, useRef } from "react";
import { GALLERY } from "../lib/data";
import { getGallery } from "../lib/api";
import useApi from "../lib/useApi";
import Media from "./Media";

const TRAIL = "M120 395 C250 360 180 320 330 290 S300 240 380 215 S400 190 400 168";

export default function Explore() {
  const gallery = useApi(getGallery, GALLERY);
  return (
    <div className="panelwrap">
      <div className="inner">
        <p className="lead"> I climb to get a bigger perspective on work, money and life.</p>
        <div className="panel peaks">
          <svg viewBox="0 0 800 420">
            <defs><linearGradient id="dawn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f2b27a" /><stop offset="1" stopColor="#ffe3b8" /></linearGradient></defs>
            <rect width="800" height="420" fill="url(#dawn)" />
            <circle cx="620" cy="140" r="38" fill="#fff3d0" />
            <g className="l1"><path d="M0 300 L120 190 L220 270 L330 170 L450 280 L560 200 L680 280 L800 210 V420 H0Z" fill="#b99a86" /></g>
            <g className="l2"><path d="M0 340 L140 250 L250 320 L380 230 L520 330 L650 260 L800 330 V420 H0Z" fill="#8a7a6a" /></g>
            <g className="l3">
              <path d="M180 420 L330 175 L370 165 L430 165 L470 175 L640 420Z" fill="#5f7d4f" />
              <path d="M330 175 L370 165 L430 165 L470 175 L440 180 L360 180Z" fill="#4a5f3e" />
              <g fill="#8a7f72"><rect x="362" y="148" width="76" height="18" /><rect x="358" y="136" width="12" height="30" /><rect x="430" y="136" width="12" height="30" /><rect x="388" y="132" width="24" height="34" /></g>
              <line x1="400" y1="132" x2="400" y2="96" stroke="#333" strokeWidth="2" />
              <path d="M400 98 L440 106 L400 116Z" fill="#ff7a1a" className="flag" />
              <path d={TRAIL} fill="none" stroke="#f3e6c8" strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" />
              <circle r="5" fill="#d9512a"><animateMotion dur="14s" repeatCount="indefinite" path={TRAIL} /></circle>
            </g>
            <g className="l4"><path d="M0 395 Q200 360 400 390 T800 380 V420 H0Z" fill="#3d5a30" /></g>
          </svg>
        </div>
        <div className="gal">{gallery.map((g, i) => (
          <figure key={g.cap} style={{ "--r": (i % 2 ? 3 : -3) + "deg" }}>
            <div style={{ background: `linear-gradient(160deg,${g.c},#10131c)` }}><Media src={g.src} className="ph" /></div>
            <figcaption>{g.cap}</figcaption>
          </figure>
        ))}</div>
      </div>
    </div>
  );
}
