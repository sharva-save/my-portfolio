"use client";
import { useState } from "react";
import { sendMessage, API_ON } from "../lib/api";

const EMAIL = "sharvasave2509@gmail.com";

export default function Contact() {
  const [state, setState] = useState("idle");           // idle, sending, sent, error
  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget, body = Object.fromEntries(new FormData(form));
    if (!API_ON) {                                      // no Node.js server yet: open the visitor's email app
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio message from " + body.name)}&body=${encodeURIComponent(body.message + "\n\n" + body.email)}`;
      return;
    }
    setState("sending");
    try { await sendMessage(body); setState("sent"); form.reset(); } catch { setState("error"); }
  }
  return (
    <section id="contact" className="sec">
      <div className="inner" style={{ textAlign: "center" }}>
        <h2 className="disp big">More than average</h2>
        <p className="lead" style={{ margin: "6px auto 0" }}>Let’s build something together.</p>
        <form className="cform" onSubmit={submit}>
          <input name="name" placeholder="Your name" required maxLength={80} />
          <input name="email" type="email" placeholder="Your email" required maxLength={120} />
          <textarea name="message" placeholder="What would you like to build?" required rows={4} maxLength={1000} />
          <button className="btn p" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}</button>
          <p className="cmsg" role="status">{state === "sent" ? "Thanks! I’ll get back to you soon." : state === "error" ? "Couldn’t send. Please email me directly." : ""}</p>
        </form>
      </div>
    </section>
  );
}
