// /* eslint-disable no-unused-vars */
import { appcentric, tcs } from "../../public/assets/images";

import {
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  email,
  cpp,
  bootstrap,
  react,
  redux,
  now,
  sonic,
  event,
  dog,
  meme,
  threejs,
  snapgram,
  summiz,
  tailwindcss,
  twitter,
  threads,
  typescript,
  jquery,
} from "../../public/assets/icons";

export const skills = [
  {
    id: 1,
    imageUrl: css,
    text: "CSS",
    name: "CSS",
    type: "Frontend",
  },

  {
    id: 2,
    imageUrl: git,
    text: "Git",
    name: "Git",
    type: "Version Control",
  },
  {
    id: 3,
    imageUrl: github,
    text: "Github",
    name: "GitHub",
    type: "Version Control",
  },
  {
    id: 4,
    imageUrl: html,
    text: "HTML",
    name: "HTML",
    type: "Frontend",
  },
  {
    id: 5,
    imageUrl: javascript,
    text: "JavaScript",
    name: "JavaScript",
    type: "Frontend",
  },

  {
    id: 6,
    imageUrl: mui,
    name: "Material-UI",
    text: "MaterialUI",
    type: "Frontend",
  },
  {
    id: 7,
    imageUrl: bootstrap,
    text: "Bootstrap",
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    id: 8,
    imageUrl: jquery,
    text: "JQuery",
    name: "JQuery",
    type: "Backend",
  },
  {
    id: 9,
    imageUrl: react,
    text: "React",
    name: "React",
    type: "Frontend",
  },
  {
    id: 10,
    imageUrl: redux,
    text: "Redux",
    name: "Redux",
    type: "State Management",
  },
  {
    id: 11,
    imageUrl: threejs,
    text: "threeJS",
    name: "threeJS",
    type: "Frontend",
  },
  {
    id: 12,
    imageUrl: tailwindcss,
    text: "Tailwind",
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    id: 13,
    imageUrl: typescript,
    text: "TypeScript",
    name: "TypeScript",
    type: "Frontend",
  },
  {
    id: 14,
    imageUrl: cpp,
    text: "c++",
    name: "cpp",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Frontend React Developer",
    company_name: "Tata consultancy services",
    icon: tcs,
    iconBg: "#E195AB",
    date: "Aug 2023 - 15 Jan 2025 (Present)",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ServiceNow (ITSM, Automations)",
    company_name: "Tata consultancy services",
    icon: tcs,
    iconBg: "#62D84E",
    date: "May 2022 - July 2023",
    points: [
      "Managed 34+ bundles on ServiceNow,  while collaborating with cross-functional teams for complex requests and ensuring timely resolutions.",
      "Communicated effectively with international clients via email, chats, and calls, consistently exceeding performance metrics, contributing to a 13% increase in the customer base.",
      "Leveraged problem solving skills and effective teamwork to enhance customer assurance, achieving recognition for project management skills while successfully managing inquiries from both foreign and native customers",
    ],
  },
  {
    title: "React.js Developer Intern",
    company_name: "appcentric",
    icon: appcentric,
    iconBg: "#FADA7A",
    date: "Jan 2022 - July 2021",
    points: [
      "Built a ReactJS-based eCommerce web app, boosting operational efficiency by 33% with intuitive modules for categories, products, and store management. Added a shipping feature for streamlined order processing and improved user navigation and visual appeal.",
      "Applied advanced React concepts, in the development process, including state management, class-based components, and the Context API. Ensured a visually appealing design by utilizing modular CSS and Material UI components, which improved user engagement by 27% .",
    ],
  },
];

export const socialLinks = [
  {
    name: "Email",
    link: "mailto:ridhipriya4503@gmail.com",
    iconUrl: email,
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/ridhi-priya",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ridhi-priya/",
  },
  {
    name: "Twitter",
    iconUrl: twitter,
    link: "https://x.com/Rpriya4503",
  },
];

export const projects = [
  // MemeVerse App
  {
    iconUrl: meme,
    theme: "bg-pink-500",
    name: "MemeVerse App",
    description:
      "Developed MemeVerse, a meme discovery app with dynamic search, categorization, and real-time updates using React, Tailwind CSS, and Redux Toolkit. Integrated REST APIs for fetching trending memes and enabling user interactions.",
    Repolink: "https://github.com/ridhi-priya/MemeVerse",
    Livelink: "https://meme-verse-gold.vercel.app/",
  },
  // Dog Search App
  {
    iconUrl: dog,
    theme: "bg-purple-600",
    name: "Dog Search App",
    description:
      "Developed a dog search application that allows users to search and filter dog breeds, displaying detailed information and images. Built with React and styled using Tailwind CSS, leveraging API integration for real-time breed data.",
    Repolink: "https://github.com/ridhi-priya/dogSearch",
    Livelink: "https://dog-search-gray.vercel.app/",
  },
  // Event Management App
  {
    iconUrl: event,
    theme: "btn-back-blue",
    name: "Event Management App",
    description:
      "Developed a web application for event management with features like adding, updating, and deleting events, styled using Tailwind CSS and powered by React Context and useReducer for scalable state management.",
    Repolink: "https://github.com/ridhi-priya/event-management-platform",
    Livelink: "https://event-management-platform-delta.vercel.app/",
  },
  // Dynamic Form Generator
  {
    iconUrl: threads,
    theme: "btn-back-black",
    name: "Dynamic Form Generator",
    description:
      "Designed and implemented a dynamic form generator with real-time JSON validation and form preview, using React, TypeScript, and Tailwind CSS, while utilizing custom hooks, React Hook Form, and a light/dark mode toggle for an enhanced user experience and seamless data submission.",
    Repolink: "https://github.com/ridhi-priya/DynamicFormGenerator",
    Livelink: "https://json-dynamic-form-generator.vercel.app/",
  },
  // Now Platform App
  {
    iconUrl: now,
    theme: "btn-back-yellow",
    name: "Now Platform App",
    description:
      "Developed a user-friendly eCommerce web app using ReactJS with modules for product management and a shipping feature for streamlined order processing. Utilized advanced React concepts, state management, and Material UI components, improving user engagement by 27%.",
    Repolink: "https://github.com/ridhi-priya/now_platform",
    Livelink: "https://now-platform.vercel.app/",
  },
  // Portfolio using JS
  {
    iconUrl: snapgram,
    theme: "bg-orange-500",
    name: "Portfolio using JS",
    description:
      "Crafted an interactive portfolio website using HTML, CSS, and JS, with dynamic animations, smooth section navigation, and an effective contact section for seamless communication and accessibility.",
    Repolink: "https://github.com/ridhi-priya/MyPortfolio",
    Livelink: "https://ridhi.vercel.app/",
  },
  // sonic speed
  {
    iconUrl: sonic,
    theme: "btn-back-orange",
    name: "Sonic speed",
    description:
      "Developed a speed writing test app using ReactJS, integrating an API to fetch new paragraphs for users to type. The app tracks typing speed and accuracy, providing real-time feedback on the number of correctly typed words and characters.",
    Repolink: "https://github.com/ridhi-priya/sonicspeed",
    Livelink: "https://ridhi-priya.github.io/sonicspeed/",
  },
  // nameit
  {
    iconUrl: summiz,
    theme: "bg-cyan-500",
    name: "NameIt Application",
    description:
      "Developed a React project, Nameit, that generates over 100 name suggestions based on user-typed keywords, with functionality to redirect users to Namecheap.com to check domain availability, showcasing expertise in React, API integration, and user experience design.",
    Repolink: "https://github.com/ridhi-priya/nameit",
    Livelink: "https://ridhi-priya.github.io/nameit/",
  },
];
