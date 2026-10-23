"use client";

import HScroll from "./HScroll";
import Media from "./Media";

const PICS = [
  { n: 1, cap: "Break free", src: "/gallery/3.jpeg" },
  { n: 2, cap: "Keep moving", src: "/gallery/farm1.jpeg" },
  { n: 3, cap: "Rise higher", src: "/gallery/farm2.jpeg" },
];

export default function Farm() {
  return (
    <HScroll
      id="adventure"
      no="04"
      title="Adventure"
      video="/media/farm.mp4"
    >
      <div className="hslide intro">
        <h2 className="text-6xl">Adventure</h2>

        <p className="lead">
          Life isn't about finding the easiest path. It's about taking the road
          less travelled, climbing higher, and discovering who you become along
          the way. Keep scrolling →
        </p>
      </div>

      {PICS.map((p) => (
        <figure className="hslide photo" key={p.n}>
          <div className="pic">
            <Media src={p.src} className="ph" />
          </div>

          <figcaption className="disp">{p.cap}</figcaption>
        </figure>
      ))}

      <div className="hslide stats">
        <div>
          <b className="disp">1</b>
          <small className="mono">life to explore</small>
        </div>

        <div>
          <b className="disp">0</b>
          <small className="mono">limits to accept</small>
        </div>

        <div>
          <b className="disp">∞</b>
          <small className="mono">places to discover</small>
        </div>
      </div>
    </HScroll>
  );
}