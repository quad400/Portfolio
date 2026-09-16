import {
  FaReact,
  FaPython,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaSwift,
  FaDocker,
} from "react-icons/fa";
import { TbBrandReactNative, TbBrandNextjs, TbBrandKotlin } from "react-icons/tb";
import {
  SiNestjs,
  SiDjango,
  SiTypescript,
  SiRedis,
  SiFlutter,
  SiExpo,
} from "react-icons/si";

export const projects = [
  {
    num: "01",
    category: "mobile development",
    title: "DriveToPass",
    description:
      "A UK driving test app across iOS and Android, supporting navigation, driving sessions, and test preparation workflows — including Mapbox turn-by-turn navigation and CarPlay integration.",
    stack: [
      { name: "SwiftUI" },
      { name: "Kotlin" },
      { name: "Jetpack Compose" },
      { name: "Mapbox" },
      { name: "CarPlay" },
    ],
    live: "#",
    github: "https://github.com/quad400",
  },
  {
    num: "02",
    category: "mobile development",
    title: "QuickCheck",
    description:
      "Fintech mobile and backend work spanning liveliness checks that unblocked ~70% of users during verification, plus Django bill-payment features with admin tooling and discount management.",
    stack: [
      { name: "React Native" },
      { name: "Django" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "Redux" },
    ],
    live: "#",
    github: "https://github.com/quad400",
  },
  {
    num: "03",
    category: "fullstack",
    title: "CourierDock",
    description:
      "A cross-platform delivery app covering order tracking, dispatch, and delivery confirmation — with Zustand state management, Redis caching for live order status, and RabbitMQ for reliable event delivery.",
    stack: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "Zustand" },
      { name: "NestJS" },
      { name: "Redis" },
      { name: "RabbitMQ" },
    ],
    live: "#",
    github: "https://github.com/quad400",
  },
  {
    num: "04",
    category: "fullstack",
    title: "AutoTout",
    description:
      "A vehicle marketplace platform spanning mobile, admin dashboard, and backend — React Query for data sync, Next.js admin tooling, Redis caching, and integrations for listings, payments, and identity verification.",
    stack: [
      { name: "Next.js" },
      { name: "React Native" },
      { name: "Expo" },
      { name: "TypeScript" },
      { name: "React Query" },
      { name: "Redis" },
    ],
    live: "#",
    github: "https://github.com/quad400",
  },
  {
    num: "05",
    category: "frontend",
    title: "Orderwayz",
    description:
      "Frontend for a multi-tenant ordering platform that helps vendors—including restaurants—manage businesses online, with vendor admin for orders, inventory, products, and customers, plus responsive vendor websites and dashboards.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "React Query" },
    ],
    live: "#",
    github: "https://github.com/quad400",
  },
  {
    num: "06",
    category: "mobile development",
    title: "Pillarpay",
    description:
      "A fintech mobile app built with Flutter, focused on secure and intuitive financial services — reusable UI components and flows, API integrations, and scalable mobile architecture for core financial features.",
    stack: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Riverpod" },
      { name: "Dio" },
    ],
    live: "#",
    github: "https://github.com/quad400",
  },
];

export const about = {
  title: "About me",
  description:
    "I'm Adediji Abdulquadri, a mobile engineer with a full stack background. I ship cross-platform and native apps with React Native, SwiftUI, and Jetpack Compose across fintech, marketplace, logistics, and navigation products — and I'm comfortable owning work end to end into NestJS, Django, and Next.js services.",
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
      fieldName: "Role",
      fieldValue: "Mobile & Full Stack Engineer",
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
    "Mobile engineer with a full stack background, shipping cross-platform and native apps across fintech, marketplace, logistics, and navigation — owning work end to end from mobile into NestJS, Django, and Next.js services.",
  items: [
    {
      company: "Pillarpay",
      position: "Mobile Engineer",
      duration: "Present",
      tech: "Flutter, Dart, Riverpod, Dio",
      highlights: [
        "Developing a fintech mobile app focused on secure and intuitive financial services",
        "Implemented reusable UI components and application flows with Flutter and Dart",
        "Integrated APIs and managed state to support core financial features and workflows",
      ],
    },
    {
      company: "DriveToPass",
      position: "Mobile Engineer",
      duration: "03/2026 – Present",
      tech: "SwiftUI, Kotlin, Jetpack Compose, Mapbox Navigation SDK, CarPlay",
      highlights: [
        "Built a UK driving test app across iOS and Android for navigation, sessions, and test prep",
        "Integrated Mapbox Navigation SDK for real-time turn-by-turn navigation on iOS",
        "Shipped Android with Kotlin and Jetpack Compose, plus CarPlay for in-car displays",
      ],
    },
    {
      company: "QuickCheck",
      position: "Mobile Engineer",
      duration: "10/2025 – Present",
      tech: "React Native, Django, TypeScript, Python, Redux, Android",
      highlights: [
        "Contributed to liveliness checks that unblocked ~70% of users in verification flows",
        "Built Django bill-payment features with admin tooling and discount management",
        "Refactored React Native code for reusability, maintainability, and performance",
      ],
    },
    {
      company: "Orderwayz",
      position: "Frontend Developer",
      duration: "2024 – 2026",
      tech: "Next.js, React, TypeScript, React Query",
      highlights: [
        "Built and maintained the frontend of a multi-tenant ordering platform for vendors",
        "Shipped vendor admin for orders, inventory, products, customers, and operations",
        "Developed responsive vendor websites and dashboards for online presence and orders",
      ],
    },
    {
      company: "CourierDock",
      position: "Mobile Full Stack Developer",
      duration: "07/2025 – 08/2026",
      tech: "React Native, Expo, Zustand, Redis, RabbitMQ, NestJS",
      highlights: [
        "Built a cross-platform delivery app for tracking, dispatch, and confirmation",
        "Used Zustand for lightweight state across delivery, courier, and admin views",
        "Added Redis caching and RabbitMQ queues for live status and reliable events",
      ],
    },
    {
      company: "AutoTout",
      position: "Full Stack Mobile Developer",
      duration: "01/2025 – 01/2026",
      tech: "Next.js, React Native, Expo, TypeScript, React Query, Redis",
      highlights: [
        "Shipped a vehicle marketplace across mobile, frontend, and backend",
        "Built Next.js admin dashboard for listings, sellers, and transactions",
        "Integrated listings, payments, and identity verification with Redis caching",
      ],
    },
  ],
};

export const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I graduated with a Bachelor of Science in Physics from the University of Ilorin. The degree built strong analytical and problem-solving foundations that I now apply to mobile and full stack engineering.",
  items: [
    {
      institution: "University of Ilorin, Nigeria",
      degree: "B.S. in Physics",
      duration: "2018 – 2023",
      detail: "CGPA 3.94",
    },
  ],
};

export const skills = {
  title: "My skills",
  description:
    "I work across mobile and full stack — from React Native, SwiftUI, and Jetpack Compose to NestJS, Django, and Next.js — with the languages and platforms needed to ship production apps end to end.",
  skillLists: [
    {
      icon: <TbBrandReactNative />,
      name: "react native",
    },
    {
      icon: <SiExpo />,
      name: "expo",
    },
    {
      icon: <FaSwift />,
      name: "swiftui",
    },
    {
      icon: <TbBrandKotlin />,
      name: "kotlin / compose",
    },
    {
      icon: <SiFlutter />,
      name: "flutter",
    },
    {
      icon: <TbBrandNextjs />,
      name: "next js",
    },
    {
      icon: <SiNestjs />,
      name: "nestjs",
    },
    {
      icon: <SiDjango />,
      name: "django",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiRedis />,
      name: "redis",
    },
    {
      icon: <FaReact />,
      name: "react js",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
  ],
};

export const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "(+234) 813 959 6749",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "adedijiabdulquadri@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    value: "Ogun State, Nigeria",
  },
];
