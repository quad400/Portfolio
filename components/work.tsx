"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperBtn from "@/components/swiper-btn";
import { projects } from "@/constants/data";

const Work = () => {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center xl:px-0 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex my-8 flex-col justify-start items-start">
          <h2 className="xl:text-6xl text-4xl font-bold">Projects</h2>
          <span className="h-1 w-20 bg-accent rounded-lg"></span>
        </div>

        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
            className="h-full"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.num} className="h-auto">
                <article className="bg-[#232329] rounded-xl p-8 flex flex-col gap-6 group h-full min-h-[380px]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-5xl leading-none font-extrabold text-transparent text-outline">
                      {project.num}
                    </span>
                    <div className="flex items-center gap-3">
                      <Link href={project.github} target="_blank">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-12 h-12 rounded-full bg-white/5 flex justify-center items-center">
                              <BsGithub className="text-white text-xl group-hover:text-accent transition-colors" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <span>GitHub</span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                      {project.live && project.live !== "#" && (
                        <Link href={project.live} target="_blank">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-12 h-12 rounded-full bg-white/5 flex justify-center items-center">
                                <BsArrowUpRight className="text-white text-xl group-hover:text-accent transition-colors" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <span>Live project</span>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-accent text-sm uppercase tracking-wide">
                      {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors capitalize">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-white/60 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="border-t border-white/10 pt-4">
                    <ul className="flex gap-x-3 gap-y-1 flex-wrap">
                      {project.stack.map((item, index) => (
                        <li
                          key={item.name}
                          className="text-accent text-sm md:text-base"
                        >
                          {item.name}
                          {index < project.stack.length - 1 && ","}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </SwiperSlide>
            ))}

            <SwiperBtn
              containerStyles="flex gap-2 justify-end mt-8"
              btnStyles="w-[44px] h-[44px] rounded-md bg-accent hover:bg-accent-hover text-primary text-[22px] transition-all flex justify-center items-center"
            />
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
