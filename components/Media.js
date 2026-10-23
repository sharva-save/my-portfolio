"use client";
// Shows a real photo or video if the file exists in /public, otherwise hides itself.
export default function Media({ src, className = "bg" }) {
  const hide = (e) => { e.currentTarget.style.display = "none"; };
  return src.endsWith(".mp4")
    ? <video className={className} src={src} autoPlay muted loop playsInline onError={hide} />
    : <img className={className} src={src} alt="" onError={hide} />;
}
