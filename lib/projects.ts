export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  video?: string;
  cols: string;
  centerLogo?: string;
  bgColor?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Undesk",
    category: "Professional Work",
    description: "A collaborative workspace designed for modern teams, focusing on productivity and seamless integration.",
    image: "",
    centerLogo: "/logo4.png",
    bgColor: "#111111",
    link: "https://www.undesk.in",
    cols: "md:col-span-12"
  },
  {
    id: 2,
    title: "InterJob",
    category: "Professional Work",
    description: "An India focused tutoring and freelance marketplace built to rethink commissions, payments, and access for businesses, students, and independent professionals in India.",
    image: "",
    centerLogo: "/portfolio-img/interjob-logo.png",
    bgColor: "#1D56CF",
    link: "https://interjob.in",
    cols: "md:col-span-6"
  },
  {
    id: 3,
    title: "Hospital Finder",
    category: "Personal Project",
    description: "A real world hospital finder built with Next.js and OpenStreetMap fast, map driven, and designed for practical, city wide healthcare discovery.",
    image: "/portfolio-img/2.png",
    link: "https://hospitalfinderbyarham.vercel.app",
    cols: "md:col-span-6"
  },
  {
    id: 4,
    title: "Rishabh's Portfolio",
    category: "Creative Model",
    description: "A creative model bringing emotion, precision, and style to every frame.",
    image: "/portfolio-img/1.png",
    link: "https://rmaniac.vercel.app",
    cols: "md:col-span-8"
  },
  {
    id: 5,
    title: "Real Time Chat System",
    category: "Personal Project",
    description: "Production ready messaging system with real architecture, real data models, and real time messaging built with Next.js and Supabase.",
    image: "/portfolio-img/4.png",
    link: "https://realtimechatbyarham.vercel.app/signup",
    cols: "md:col-span-4"
  }
];
