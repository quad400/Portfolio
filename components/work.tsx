"use client";

import { delay, motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowDownRight, BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import SwiperBtn from "@/components/swiper-btn";

const projects = [
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
    live: "https://talkietalker.onrender.com/",
    github: "",
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
    github: "",
  },
  {
    num: "03",
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
    live: "",
    github: "https://github.com/quad400/Trendz-Wears-App",
  },
  {
    num: "04",
    category: "mobile develpment",
    title: "Serviceo",
    description:
      "Serviceo is a mobile application that connects users with local service providers. Whether you need a plumber, electrician, or cleaner, Serviceo has got you covered. With a simple and intuitive interface, finding the right service provider is just a tap away.",
    stack: [
      { name: "React Native" },
      { name: "Tailwind Css" },
      { name: "Javascript" },
      { name: "Redux" },
    ],
    video: "/assets/work/project4.mp4",
    image: null,
    live: "https://github.com/quad400/serviceo-api",
    github: "https://github.com/quad400/serviceo-api",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center xl:px-0"
    >
      <div className="container mx-auto px-4">
        <div className="flex my-8 flex-col justify-start items-start">
          <h2 className="xl:text-6xl text-4xl font-bold">Projects</h2>
          <span className="h-1 w-20 bg-accent rounded-lg"></span>
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:rxr-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-accent text-xl">
                    {item.name}
                    {index < project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>View project</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>View project</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12  xl:h-[520px]"
              onSlideChange={(swiper) => {
                setProject(projects[swiper.activeIndex]);
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[460px] flex group justify-center items-center">
                    <div className="absolute top-0 bottom-0 h-full w-full bg-black-10 z-10"></div>
                    <div className="w-full h-full">
                      {project?.image && (
                        <Image
                          src={project.image}
                          fill
                          className="aspect-video"
                          alt={project.title}
                        />
                      )}
                      {project?.video && (
                        <video
                          src={project.video}
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="w-[44px] h-[44px] rounded-md bg-accent hover:bg-accent-hover text-primary text-[22px] transition-all flex justify-center items-center"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;