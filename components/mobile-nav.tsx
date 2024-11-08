"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {useState} from "react"


const links = [
  {
    name: "home",
    path: "#",
  },
  {
    name: "services",
    path: "#services",
  },
  {
    name: "resume",
    path: "#resume",
  },
  {
    name: "work",
    path: "#work",
  },
  {
    name: "contact",
    path: "#contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleSheetClose = () => {
    setIsOpen(false);
  };

  return (
    <Sheet  open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <AlignRight className="h-10 w-10 text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center items-center space-y-8">
        <div className="mt-32 mb-10 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-semibold">
              Abdulquadri<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-8 justify-center items-center">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                onClick={handleSheetClose}
                className={cn(
                  "capitalize font-medium hover:text-accent transition-all",
                  link.path === pathname &&
                    "text-accent border-b-2  border-accent"
                )}
              >
                <SheetClose />
                {link.name}
              </Link>
            );
          })}
        </nav>
        <Link href="#contact" onClick={handleSheetClose}>
          <Button>Hire me</Button>
        </Link>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
