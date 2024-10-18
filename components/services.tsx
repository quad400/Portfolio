"use client"

import {motion} from "framer-motion"
import { ArrowDown, MoveDownRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "01",
    title: "Web Development",
    description: "Unleash the full potential of your online presence with our expert web development solutions. We craft innovative and user-centric websites that leave a lasting impact on your audience.",
    href: "#"
  },
  {
    id: "02",
    title: "Frontend Development",
    description: "SEO (Search Engine Optimization) is the practice of optimizing websites to improve their visibility and ranking on search engine results pages (SERPs). It involves various strategies, including keyword research, on-page optimization, quality content creation, and link building..",
    href: "#"
  },
  {
    id: "03",
    title: "Backend Development",
    description: "Unlock the full potential of your application with seamless API integration. By integrating external APIs, you can enhance your app's functionality, access valuable data, and provide a more comprehensive user experience. Our expert developers ensure a smooth integration process, allowing your app to leverage the power of external services and deliver exceptional performance",
    href: "#"
  },
  {
    id: "04",
    title: "Mobile Development",
    description: "App development involves creating software applications for mobile devices like smartphones and tablets. It can be done natively (using platform-specific languages) or cross-platform (using frameworks like React Native). A strong focus on UI/UX design and thorough testing are crucial for a successful app",
    href: "#"
  },
]

const Services = () => {
  return (
    <motion.section id="services" className="h-full flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex py-8 flex-col justify-start items-start">
          <h2 className="xl:text-6xl text-4xl font-bold">Services</h2>
          <span className="h-1 w-20 bg-accent rounded-lg"></span>
        </div>
        <motion.div initial={{opacity: 0}} animate={{
          opacity: 1,
          transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
        }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >

          {services.map((service, index)=> (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.id}
                </div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45">
                <MoveDownRight className="text-primary h-8 w-8" />
                </Link>
              </div>
              <h2 className="text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Services