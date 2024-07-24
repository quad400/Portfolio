"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
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

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

console.log(formData)
    setStatus("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const { message } = await res.json();
    setStatus(message);
    if (res.status === 200) {
      setFormData({
        firstName: "",
        phoneNumber: "",
        service: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex my-8 flex-col justify-start items-start">
          <h2 className="xl:text-6xl text-4xl font-bold">Contacts</h2>
          <span className="h-1 w-20 bg-accent rounded-lg"></span>
        </div>
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h2 className="text-4xl text-accent">Let's work together</h2>
              <p className="text-white/60">
                Are you looking for a dedicated and skilled fullstack and mobile
                developer to bring your vision to life? Let's collaborate to
                create exceptional digital experiences that make a lasting
                impact. Here’s how we can work together:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Firstname"
                />
                <Input
                  type="lastname"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Lastname"
                />
                <Input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                />
                <Input
                  type="phone"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                />
              </div>

              <Select
                onValueChange={handleChange}
                defaultValue={formData.service}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="webdev">Web Development</SelectItem>
                    <SelectItem value="frontend">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="backend">Backend Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="fullstack">
                      Fullstack Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here."
                />

              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="text-accent flex items-center justify-center w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] rounded-md">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white/60">{item.title}</h3>
                    <p className="text-xl">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
