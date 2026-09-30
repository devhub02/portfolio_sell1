export const profile = {
  name: "Devendra Kumar",
  initials: "DK",
  email: "devhub9084@gmail.com",
  phone: "9084830365",
  location: "Gaya, India",
  github: "https://github.com/devhub02",
  resume: "/Devendra_Kumar_Resume.docx",
  summary:
    "Early-career Mechanical Engineer with hands-on experience in mechanical design, product development, project management, and technical analysis. Strong entrepreneurial mindset with experience in startup vision and business model development.",
  hls: "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8",
};

export const img = (seed: string, w = 900, h = 700) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const projects = [
  { title: "TripG", tag: "Travel product · Startup", seed: "tripg", span: "md:col-span-7", ratio: "aspect-[16/10]" },
  { title: "Mechanical Design", tag: "SolidWorks · CAD", seed: "cadmech", span: "md:col-span-5", ratio: "aspect-square md:aspect-auto md:h-full" },
  { title: "Product Development", tag: "UI/UX · System design", seed: "product", span: "md:col-span-5", ratio: "aspect-square md:aspect-auto md:h-full" },
  { title: "Mobile & Web Apps", tag: "React · React Native", seed: "reactapps", span: "md:col-span-7", ratio: "aspect-[16/10]" },
];

export const skillGroups = [
  { title: "Mechanical Engineering", items: ["Mechanical Design", "CAD Drafting", "SolidWorks 3D Modeling", "Computer-Aided Design (CAD)", "Engineering Analysis", "Product Development"] },
  { title: "Programming & Development", items: ["Python", "JavaScript", "React", "React Native", "HTML & CSS", "MATLAB"] },
  { title: "Software & Product Design", items: ["UI/UX Design", "System Design", "Mobile Application Development", "Microsoft Excel", "Software Applications"] },
  { title: "Project & Business", items: ["Project Management", "Technical Analysis", "Startup & Business Model Development"] },
  { title: "Creative & Digital", items: ["Adobe Software", "Content Development", "Video Production & Editing"] },
  { title: "AI, Design & Productivity", items: ["ChatGPT", "Claude", "Google Gemini", "Antigravity", "Figma"] },
];

export const journal = [
  { title: "Where mechanical engineering meets software", read: "4 min read", date: "Topic", seed: "j1" },
  { title: "Building a startup vision from day one", read: "5 min read", date: "Topic", seed: "j2" },
  { title: "Designing products with UI/UX fundamentals", read: "3 min read", date: "Topic", seed: "j3" },
  { title: "Using AI tools to build faster", read: "4 min read", date: "Topic", seed: "j4" },
];

export const explorations = [
  { seed: "e1", label: "SolidWorks" }, { seed: "e2", label: "React" }, { seed: "e3", label: "Figma" },
  { seed: "e4", label: "Python" }, { seed: "e5", label: "MATLAB" }, { seed: "e6", label: "Video editing" },
];
