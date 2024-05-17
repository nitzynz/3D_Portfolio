import {
  meta,
  shopify,
  starbucks,
  tesla,
  CISCO,
  LT,
  cloudwareLogo,
} from "../assets/images";
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
  wf,
  yoom,
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
  outlook,
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
    title: "Software Engineer",
    company_name: "Cloudware IT",
    icon: cloudwareLogo,
    iconBg: "#accbe1",
    date: "January 2024",
    points: [
      "Designed an interactive graphical website, switching over from multi-page website to single page, using Javascript, React, Tailwind, HTML5/ CSS3, increasing the revenue by 220%.",
      "Developed own CAPTCHA, reducing the contact form spamming by 75%.",
      "Collaborated with the President to create digital marketing designs leading to additional client subscriptions.",
      "Built RESTful APIs that served data to the front-end based on dynamic user input, handling 20000+ concurrent users.",
      "Formulating technical designs for independent problems, driving cross-team collaboration, upholding software reliability practices and proactively identifying areas of future work.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "CISCO",
    icon: CISCO,
    iconBg: "#accbe1",
    date: "August 2020 - July 2022",
    points: [
      "Led the development of multiple applications for a Fortune 500 financial/ banking organization, using Java, Kotlin, Android Studio",
      "Refactored outdated Node.js, Python, Java codebases to facilitate modularity, scalability, & testability.",
      "Developed and maintained high-performance backend systems, resulting in a 15% increase in website traffic and conversion rates.",
      "Built RESTful APIs that served data to the front-end based on dynamic user input, handling 20000+ concurrent users.",
      "Developed Python scripts to automate data cleaning and transformation processes, increasing efficiency by 30%.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "CISCO",
    icon: CISCO,
    iconBg: "#accbe1",
    date: "January 2020 - June 2020",
    points: [
      "Created several critical error processing pipelines, and a framework to scale easy deployment and monitoring of new pipelines.",
      "Designed and deployed an automated workflow for resolving customer queries, leading to an increase in customer satisfaction of 35%",
      " Analyzed user behaviors, preferences to create custom interfaces based on feedback; resulting in 80% increase in customer satisfaction.",
    ],
  },
  {
    title: "FrontEnd Software Engineering Intern",
    company_name: "Larsen & Toubro Infotech",
    icon: LT,
    iconBg: "#accbe1",
    date: "June 2019 - Dec 2019",
    points: [
      "Engineered the design of payroll management website, using JavaScript, figma, Integration testing, enhancing the user rating by 35%",
      "Translated complex design requirements into interactive user experiences to promote customer engagement and drive web traffic",
      "Led the integration of a customer service chat functionality to answer user questions and schedule consultations, resulting in a 15% increase in leads",
    ],
  },
];

export const socialLinks = [
  {
    name: "Email",
    iconUrl: outlook,
    link: "mailto:ngovinda@buffalo.edu?subject=Email From Your Website",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/nitzynz/",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/nithya-g/",
  },
];

export const projects = [
  {
    iconUrl: yoom,
    theme: "btn-back-black",
    name: "Yoom, a Zoom clone",
    description:
      "Built with the latest Next.js and TypeScript, this project replicates Zoom, a widely used video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.",
    link: "https://github.com/nitzynz/Zoom_Clone",
  },
  {
    iconUrl: wf,
    theme: "btn-back-blue",
    name: "Wallet Friendly",
    description:
      "Developed using Next.js and Bright Data's webunlocker, this e-commerce product scraping site is designed to assist users in making informed decisions. It notifies users when a product drops in price and helps competitors by alerting them when the product is out of stock, all managed through cron jobs.",
    link: "https://github.com/nitzynz/WalletFriendly",
  },
  {
    iconUrl: portfolio,
    theme: "btn-back-black",
    name: "3D Portfolio Design",
    description:
      "Designed this 3D portfolio using React, Javascript, Tailwind, Three.js and Vite.",
    link: "https://github.com/nitzynz/3D_Portfolio",
  },
  {
    iconUrl: web,
    theme: "btn-back-pink",
    name: "Cloudware IT Website Design",
    description:
      "Created a responsive website for mobile and desktop devices using React.js, Tailwind, Vite, HTML5/ CSS3, Jest, E2E testing, increasing the client satisfaction by 100% and the revenue by 220%. Managed code repositories, review tools, and continuous integration processes to improve website analytics and end user feedback.",
    link: "https://github.com/nitzynz/",
  },
  {
    iconUrl: tuktuk,
    theme: "btn-back-blue",
    name: "TukTuk Carpooling",
    description:
      "Created javascript prototypes and concept sketches for mobile and web version of the application, utilizing figma, canvas, D3, SVG. Designed and architected aesthetic responsive front-end UI for both mobile and web applications, using React.js, HTML5/CSS3, increasing the revenue by 120%. Integrated AWS services, EC2, load balancing, lambda, increasing the application efficiency by 25%.",
    link: "https://github.com/nitzynz/",
  },
  {
    iconUrl: CISCO,
    theme: "btn-back-blue",
    name: "Network Service Automation",
    description:
      "Developed and deployed an AI chatbot, powered by the knowledge articles of CISCO, to guide the engineers on network fixes.",
    link: "https://github.com/nitzynz/",
  },
];
