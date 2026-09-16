"use client";

import { motion } from "framer-motion";
import { MoveDownRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Cross-platform Mobile",
    description:
      "I build production React Native and Expo apps for iOS and Android — from delivery and marketplace flows to fintech verification — with solid state management and performance-minded architecture.",
    href: "#contact",
  },
  {
    id: "02",
    title: "Native iOS & Android",
    description:
      "When native depth matters, I ship SwiftUI and Jetpack Compose experiences, including navigation SDKs, CarPlay, and platform integrations that cross-platform stacks alone can't cover.",
    href: "#contact",
  },
  {
    id: "03",
    title: "Full Stack APIs",
    description:
      "I own backend work in NestJS, Django, and Next.js — REST APIs, Redis caching, message queues, and admin tooling so mobile clients stay fast and reliable in production.",
    href: "#contact",
  },
  {
    id: "04",
    title: "Product & Fintech Features",
    description:
      "I deliver end-to-end product features across payments, identity checks, logistics, and marketplaces — collaborating across mobile and backend to ship what users actually need.",
    href: "#contact",
  },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className="h-full flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex py-8 flex-col justify-start items-start">
          <h2 className="xl:text-6xl text-4xl font-bold">Services</h2>
          <span className="h-1 w-20 bg-accent rounded-lg"></span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.id}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                >
                  <MoveDownRight className="text-primary h-8 w-8" />
                </Link>
              </div>
              <h2 className="text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
