import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    icon: <Github />,
    path: "https://github.com/quad400",
  },
  {
    icon: <Linkedin />,
    path: "https://www.linkedin.com/in/abdulquadri-adediji/",
  },
];

const Socials = ({
  iconStyle,
  containerStyle,
}: {
  iconStyle: string;
  containerStyle: string;
}) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className={iconStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
