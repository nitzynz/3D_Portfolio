import { meta, shopify, starbucks, tesla, CISCO, LT } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  tuktuk,
  web,
  portfolio,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  Threejs,
  vue,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: Threejs,
    name: "Threejs",
    type: "Frontend",
  },
  {
    imageUrl: vue,
    name: "vue",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: portfolio,
    theme: "btn-back-black",
    name: "3D Portfolio Design",
    description:
      "Designed this 3D portfolio using React, Javascript, Tailwind, Three.js and Vite.",
    //link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: web,
    theme: "btn-back-pink",
    name: "Cloudware IT Website Design",
    description:
      "Created a responsive website for mobile and desktop devices using React.js, Tailwind, Vite, HTML5/ CSS3, Jest, E2E testing, increasing the client satisfaction by 100% and the revenue by 220%. Managed code repositories, review tools, and continuous integration processes to improve website analytics and end user feedback.",
    //link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: tuktuk,
    theme: "btn-back-blue",
    name: "TukTuk Carpooling",
    description:
      "Created javascript prototypes and concept sketches for mobile and web version of the application, utilizing figma, canvas, D3, SVG. Designed and architected aesthetic responsive front-end UI for both mobile and web applications, using React.js, HTML5/CSS3, increasing the revenue by 120%. Integrated AWS services, EC2, load balancing, lambda, increasing the application efficiency by 25%.",
    //link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: CISCO,
    theme: "btn-back-blue",
    name: "Network Service Automation",
    description:
      "Developed and deployed an AI chatbot, powered by the knowledge articles of CISCO, to guide the engineers on network fixes.",
    //link: "https://github.com/adrianhajdin/threads",
  },
];
