"use client"

import { FaReact, FaNodeJs, FaHtml5, FaPython, FaCss3 } from "react-icons/fa";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
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

const experience = {
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

const education = {
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

const skills = {
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

const Resume = () => {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] fle items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        
      <div className="flex py-8 flex-col justify-start items-start">
          <h2 className="xl:text-6xl text-4xl font-bold">Resume</h2>
          <span className="h-1 w-20 bg-accent rounded-lg"></span>
        </div>
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skills.skillLists.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-center items-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60 text-sm">
                        {item.fieldName}
                      </span>
                      <h3 className="text-base">{item.fieldValue}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Resume;
