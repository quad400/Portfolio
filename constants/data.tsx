import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaPython,
  FaCss3,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

export const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Talkie Talker",
    description:
      "Talkie Talker is a cutting-edge messaging platform designed specifically for realtors, enabling seamless communication with clients, colleagues, and partners. As a solo creator, I've poured my heart and soul into crafting a unique solution that addresses the communication needs of real estate professionals.",
    stack: [
      { name: "Next Js" },
      { name: "MongoDB" },
      { name: "ReactJs" },
      { name: "Shadcn UI" },
      { name: "Socket.io" },
      { name: "Tailwind Css" },
      { name: "Typescript" },
    ],
    video: null,
    image: "/assets/work/project1.png",
    live: "https://talkie-talker-six.vercel.app/",
    github: "https://github.com/quad400/Talkie-Talker",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Stack",
    description:
      "Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Stack.",
    stack: [
      { name: "ExpressJs" },
      { name: "MongoDB" },
      { name: "ReactJs" },
      { name: "Shadcn UI" },
      { name: "Tailwind Css" },
      { name: "Typescript" },
    ],
    video: null,
    image: "/assets/work/project2.png",
    live: "https://stack-five.vercel.app",
    github: "https://github.com/quad400/Stack-Client",
  },
  {
    num: "03",
    category: "backend develpment",
    title: "Krendzy B2B Ecommerce Application",
    description:
      "This API serves as the backbone for a B2B e-commerce application, featuring functionalities for user management, product handling, shopping cart operations, and payment processing. It’s built using NestJS with a focus on scalability, security, and maintainability.",
    stack: [
      { name: "Nest Js" },
      { name: "Postgresql" },
      { name: "Typeorm" },
      { name: "Redis" },
    ],
    image: "/assets/work/project4.png",
    live: "https://documenter.getpostman.com/view/34498096/2sAXjDfbRE",
    github: "https://github.com/quad400/kdtrendzapi",
  },
  {
    num: "04",
    category: "mobile develpment",
    title: "Trendzy",
    description:
      "Trendz Wears is a mobile application that allows users to shop for the latest fashion trends. With a user-friendly interface and a wide range of products, Trendz Wears makes shopping fun and convenient.",
    stack: [
      { name: "React Native" },
      { name: "Express JS" },
      { name: "MongoDB" },
      { name: "Javascript" },
      { name: "Redux" },
    ],
    video: "/assets/work/project3.mp4",
    image: null,
    live: "https://github.com/quad400/Trendz-Wears-App",
    github: "https://github.com/quad400/Trendz-Wears-App",
  },
];

export const about = {
  title: "About me",
  description:
    "Hello! I'm Adediji Abdulquadri, a passionate fullstack and mobile developer with a diverse background and a commitment to crafting exceptional digital experiences. With a Bachelor of Science degree in Physics from the University of Ilorin, I transitioned from understanding the principles of the physical world to creating innovative software solutions that make a difference.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Adediji Abdulquadri",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 813 959 6749",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "adedijiabdulquadri@gmail.com",
    },
    {
      fieldName: "Open to work",
      fieldValue: "Freelance, Full-time",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Yoruba",
    },
  ],
};

export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "With over 4years of experience in fullstack and mobile development, I have honed my skills in creating robust, scalable, and user-friendly applications. My journey as a developer has equipped me with a diverse set of technical proficiencies and a deep understanding of both frontend and backend development.",
  items: [
    {
      company: "Petabyte Technologies",
      position: "Full Stack Developer (Team Lead)",
      duration: "2023 - Present",
    },
    {
      company: "Lundenva",
      position: "Mobile Developer",
      duration: "2022 - 2023",
    },
  ],
};

export const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I graduated with a Bachelor of Science degree in Physics from the University of Ilorin. My academic journey provided me with a solid foundation in analytical thinking, problem-solving, and a deep understanding of the physical principles that underpin modern technology. While studying Physics, I developed a keen interest in computational methods and software development, which ultimately led me to pursue a career in fullstack and mobile development.",
  items: [
    {
      institution: "University Of Ilorin",
      degree: "Physics",
      duration: "2018 - 2023",
    },
    {
      institution: "Freecode Camp",
      degree: "Frontend Web Developent BootCamp",
      duration: "2021 - 2022",
    },
    {
      institution: "notJust Dev Academy",
      degree: "Mobile Development BootCamp",
      duration: "2022 - 2023",
    },
    {
      institution: "Online Course",
      degree: "Full Stack Development",
      duration: "2020 - 2024",
    },
  ],
};

export const skills = {
  title: "My skills",
  description:
    "As a versatile fullstack and mobile developer, I possess a comprehensive set of skills that span across various aspects of software development. My expertise allows me to build robust, scalable, and user-friendly applications. Here’s an overview of my key skills:",
  skillLists: [
    {
      icon: <FaReact />,
      name: "react js",
    },
    {
      icon: <TbBrandNextjs />,
      name: "next js",
    },
    {
      icon: <FaNodeJs />,
      name: "node js",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <FaHtml5 />,
      name: "html",
    },
    {
      icon: <TbBrandReactNative />,
      name: "react native",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
  ],
};

export const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "(+234) 813 9596 749",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "adedijiabdulquadri@gamil.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    value: "Ogun State, Nigeria",
  },
];
