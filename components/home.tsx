"use client";

import Photo from "@/components/photo";
import Socials from "@/components/socials";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Home = () => {
  return (
    <motion.section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Adediji Abdulquadri</span>
            </h1>
            <p>
              I excel in crafting elegant digital expriences and proficient and
              various programming languages and technologies
            </p>

            <div className="flex flex-col xl:flex-row justify-start items-center mt-6 gap-5">
              <Button
                variant="outline"
                size="lg"
                className="uppercase group flex items-center gap-2"
              >
                <Link href="https://petabytesports-my.sharepoint.com/:w:/g/personal/abdulquadri_pesports_gg/EWprdyJ5fVhLoTP1wB5JiiUBMukS8D34CGri7Ga7dWZgfA?e=DSrbe3">Download CV</Link>
                <Download className="h-4 w-4 text-accent group-hover:text-primary" />
              </Button>
              <div className="mb-4 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6 "
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-6 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </motion.section>
  );
};

export default Home;
