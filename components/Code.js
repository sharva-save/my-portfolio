"use client";
import { PROJECTS, SKILLS, JOBS } from "../lib/data";
import { getProjects, getSkills, getJobs } from "../lib/api";
import useApi from "../lib/useApi";
import HScroll from "./HScroll";
import Media from "./Media";

// Slides: intro, one per project, work history, skills. Add screenshots as public/media/projects/<name>.jpg
export default function Code() {
  const projects = useApi(getProjects, PROJECTS);
  const jobs = useApi(getJobs, JOBS);
  const skills = useApi(getSkills, SKILLS);
  return (
    <HScroll id="code" no="01" title="Code" video="/media/code.mp4">
      <div className="hslide intro">
        <h2 className="disp">Code</h2>
        <p className="lead">I build things people actually use. Full Stack Developer (MERN), 1.5+ years, 3 companies. Keep scrolling →</p>
      </div>

      {projects.map((p, i) => (
        <article className="hslide proj" key={p.file}>
          <div className="shot">
            <span className="shotname disp">{p.name}</span>
            <Media src={`/projects/${p.file.replace(".js", "")}.png`} className="ph" />
            <div className="chrome"><i /><i /><i /><span>{p.url.replace("https://", "")}</span></div>
          </div>
          <div className="info">
            <span className="mono">0{i + 1}</span>
            <h3 className="disp">{p.name}</h3>
            <p>{p.note}</p>
            <div className="tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
            <a className="btn p" href={p.url} target="_blank" rel="noreferrer">Live demo ↗</a>
          </div>
        </article>
      ))}

      <div className="hslide jobs">
        <span className="mono">Experience</span>
        {jobs.map((j) => (
          <div className="job" key={j.co}>
            <h3 className="disp">{j.co}</h3>
            <small className="mono">{j.role} · {j.when}</small>
            <ul>{j.pts.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        ))}
      </div>

      <div className="hslide skillsl">
        <span className="mono">Skills</span>
        {Object.entries(skills).map(([k, list]) => <div key={k}><small className="mono">{k}</small><div className="tags ">{list.map((s) => <span key={s}>{s}</span>)}</div></div>)}
      </div>
    </HScroll>
  );
}
