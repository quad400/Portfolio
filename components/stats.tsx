"use client";

import { cn } from "@/lib/utils";
import CountUp from "react-countup";

const statistics = [
  {
    count: 4,
    text: "Years of expreience",
  },
  {
    count: 10,
    text: "Projects Completed",
  },
  {
    count: 10,
    text: "Technologies mastered",
  },
  {
    count: 700,
    text: "Code Commits",
  },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto items-center justify-center xl:max-w-none">
          {statistics.map((item, index) => (
            <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
              <CountUp
                end={item.count}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-bold"
              />
              <p
                className={cn(
                  "leading-snug text-white/80",
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                )}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
