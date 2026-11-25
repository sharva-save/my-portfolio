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
  {
    co: "Otet Infosystems",
    role: "Full Stack Developer",
    when: "Apr 2025 – Present",
    pts: [
      "Develop and maintain full-stack applications using React.js, Node.js, Express.js and MongoDB",
      "Build and integrate REST APIs with JWT authentication",
      "Create responsive, reusable UI components and manage code with Git and GitHub"
    ]
  },
  {
    co: "Uni5 Tech LLP",
    role: "React.js Developer",
    when: "Nov 2024 – Apr 2025",
    pts: [
      "Built 5+ responsive dashboards using React.js, Next.js and Tailwind CSS",
      "Integrated 50+ REST APIs across attendance, asset management and employee onboarding modules",
      "Reduced reported mobile UX issues by 40% and manual data entry by 30%"
    ]
  },
  {
    co: "Savit Interactive",
    role: "Web Developer",
    when: "Jul 2024 – Nov 2024",
    pts: [
      "Improved UI/UX of eDrugstore.com, a healthcare platform",
      "Developed investment portfolio modules for FinHouse Capital",
      "Improved SEO and Core Web Vitals, increasing Google PageSpeed Insights score by about 20 points",
      "Worked directly with clients to gather requirements and deliver tailored solutions"
    ]
  },
  {
    co: "Rebel Corp",
    role: "Web Developer",
    when: "Feb 2024 – Jul 2024",
    pts: [
      "Built and customised responsive websites using HTML, CSS, JavaScript and WordPress",
      "Improved website UI/UX across mobile, tablet and desktop devices",
      "Fixed bugs, handled content and layout updates, and delivered changes based on client requirements"
    ]
  }
];
