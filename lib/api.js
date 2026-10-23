import { PROJECTS, JOBS, SKILLS, GALLERY } from "./data";

// Set NEXT_PUBLIC_API_URL in client/.env.local to use your Node.js server (example: http://localhost:5000).
// Leave it empty and the site uses the local data in lib/data.js, so it works without a backend.
const API = process.env.NEXT_PUBLIC_API_URL;
export const API_ON = Boolean(API);

async function get(path, fallback) {
  if (!API) return fallback;
  try {
    const r = await fetch(API + path);
    if (!r.ok) throw new Error(r.status);
    return await r.json();
  } catch {
    return fallback;                       // server down? the page still works with local data
  }
}

export const getProjects = () => get("/api/projects", PROJECTS);
export const getJobs = () => get("/api/jobs", JOBS);
export const getSkills = () => get("/api/skills", SKILLS);
export const getGallery = () => get("/api/gallery", GALLERY);

export async function sendMessage(body) {
  const r = await fetch(API + "/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!r.ok) throw new Error("Could not send");
  return r.json();
}
