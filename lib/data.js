// Edit this file to change your content. The code snippets are short illustrations, not your full source.
// export const PROJECTS = [
//   { file: "manthra.js", name: "Manthra", note: "Salon booking app with live 30-minute slots", stack: ["React", "Node.js", "MongoDB", "JWT"], url: "https://manthra-beauty.vercel.app/",
//     code: `// Manthra: hide slots that are already booked
// const taken = await Booking.find({ date }).distinct("slot");
// const free = ALL_SLOTS.filter((s) => !taken.includes(s));
// res.json({ date, free });` },
//   { file: "altitude.js", name: "Altitude Fitness", note: "Gym management with Admin and Member roles", stack: ["React", "Node.js", "MongoDB", "JWT"], url: "https://altitude-fitness-frontend.vercel.app",
//     code: `// Altitude Fitness: daily job that warns members before expiry
// cron.schedule("0 9 * * *", async () => {
//   const soon = await Member.find({ expiresAt: { $lte: in3Days() } });
//   soon.forEach(sendRenewalReminder);
// });` },
//   { file: "creation.js", name: "ACreationMedia", note: "3D interactive portfolio built with Three.js", stack: ["Three.js", "JavaScript"], url: "https://acreationmedia.vercel.app/",
//     code: `// ACreationMedia: the render loop
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }
// animate();` },
// ];

export const PROJECTS = [
  {
    file: "manthra.js",
    name: "Manthra",
    note: "Salon booking app with live 30-minute slots",
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    url: "https://manthra-beauty.vercel.app/",
    code: `// Manthra: hide slots that are already booked
const taken = await Booking.find({ date }).distinct("slot");
const free = ALL_SLOTS.filter((s) => !taken.includes(s));
res.json({ date, free });`
  },

  {
    file: "altitude.js",
    name: "Altitude Fitness",
    note: "Gym management with Admin and Member roles",
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    url: "https://altitude-fitness-frontend.vercel.app",
    code: `// Altitude Fitness: daily job that warns members before expiry
cron.schedule("0 9 * * *", async () => {
  const soon = await Member.find({ expiresAt: { $lte: in3Days() } });
  soon.forEach(sendRenewalReminder);
});`
  },

  {
    file: "creation.js",
    name: "ACreationMedia",
    note: "3D interactive portfolio built with Three.js",
    stack: ["Three.js", "JavaScript"],
    url: "https://acreationmedia.vercel.app/",
    code: `// ACreationMedia: the render loop
const renderer = new THREE.WebGLRenderer({ antialias: true });
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();`
  }
];
export const SKILLS = {
  Languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  Frameworks: ["React.js", "Next.js", "Node.js", "Express.js", "React Native", "Three.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap"],
  Database: ["MongoDB", "Mongoose"],
  Tools: ["Git", "GitHub", "Vercel", "Postman", "Axios", "JWT"],
  Concepts: ["REST APIs", "Responsive design", "SEO", "Agile/Scrum"],
};
export const GALLERY = [
  
  { src: "/gallery/5.jpeg", cap: "Sunrise from the top", c: "#d98a4a" },
  
  { src: "/gallery/4.jpeg", cap: "Next: more of India", c: "#4f7a9a" },
];

// Work history from the resume (shown on the horizontal Code track).
export const JOBS = [
  { co: "Uni5 Tech LLP", role: "React.js Developer", when: "Nov 2024 – Apr 2025", pts: ["HRMS platform: attendance, assets, onboarding", "15+ responsive dashboards (React, Next.js, Tailwind)", "50+ REST APIs integrated with Axios"] },
  { co: "Savit Interactive", role: "Web Developer", when: "Jul 2024 – Nov 2024", pts: ["eDrugstore.com: rebuilt key UI/UX flows", "FinHouse Capital: investment portfolio modules", "Google PageSpeed up about 20 points"] },
];
