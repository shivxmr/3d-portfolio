import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  freelance,
  rv,
  python,
  github,
  java,
  stockmarket,
  animazing,
  chat,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  // {
  //   id: "works",
  //   title: "Experience",
  // },
  {
    id: "contact",
    title: "Contact",
  },
  // {
  //   id: "socials",
  //   title: "Socials",
  // },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Frontend Designer",
    icon: backend,
  },
  {
    title: "Stock Market Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Freelance Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer (Internship)",
    company_name: "Magic Quill Media",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Oct 2022 - Dec 2022",
    points: [
      "Created web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Solved various problems wherever possible.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Visual Computing Intern",
    company_name: "RV College of Engineering",
    icon: rv,
    iconBg: "#fff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Learnt Image Processing using Python.",
      "Learnt usage of various libraries like OpenCV",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Animazing - Animation Showcase",
    description:
      "This project was created to showcase my animation and front-end skills. The colors, animations, and transitions are inspired by some of the most well used software, applications and websites.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      // {
      //   name: "javascript",
      //   color: "green-text-gradient",
      // },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
    ],
    image: animazing,
    source_code_link: "https://shivxmr-animazing.netlify.app/",
    deployment_link: "https://shivxmr-animazing.netlify.app",
  },
  {
    name: "MERN Stack Chat App",
    description:
      "A dynamic chat application developed using the MERN stack and Socket.io. With robust features like authentication, JWT integration, and Bcrypt.js encryption, this app delivers secure and real-time communication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node js",
        color: "orange-text-gradient",
      },
      // {
      //   name: "express js",
      //   color: "white-text-gradient",
      // },
    ],
    image: chat,
    source_code_link: "https://github.com/shivxmr/MERN-Chat-App",
  },
  {
    name: "Stock Price Predictor",
    description:
      "Predicted the price of the S&P500 stock market index. Created an initial ML Model to estimate accuracy, then built a backtesting engine to more accurately measure accuracy & to further improve the accuracy.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "jupyter",
        color: "green-text-gradient",
      },
      {
        name: "yfinance",
        color: "pink-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "orange-text-gradient",
      },
    ],
    image: stockmarket,
    source_code_link: "https://github.com/shivxmr/Stock-Price-Predictor",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
