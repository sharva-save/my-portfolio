// Big outlined text that slides across the screen (the Lando Norris style divider).
export default function Marquee({ text }) {
  return <div className="marq"><div className="disp">{(text + "   ").repeat(8)}</div></div>;
}
