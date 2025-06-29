import { FaMobileAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaBugSlash } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

const serviceData = [
  {
    logo: (
      <img
        className="w-[80px]"
        src="https://i.ibb.co/1Y0kNv67/web.png"
        alt=""
      />
    ),
    title: "Web Design",
    desc: "I design clean, user-focused interfaces that are visually appealing and functional. My goal is to create engaging digital experiences that enhance usability, accessibility, and brand identity across all devices.",
  },
  {
    logo: (
      <img
        className="w-[80px]"
        src="https://i.ibb.co/h5Yptxm/code.png"
        alt=""
      />
    ),
    title: "Web Development",
    desc: "I build responsive, dynamic web applications using modern tools like React. My focus is on writing clean, efficient code that <Br delivers fast, reliable, and scalable user experiences tailored to client goals.",
  },
  {
    logo: (
      <img
        className="w-[80px]"
        src="https://i.ibb.co/fYwzvG8x/bug.png"
        alt=""
      />
    ),
    title: "Bug Fixing",
    desc: "I specialize in identifying and resolving issues that affect app performance. Whether it's front-end glitches or deeper logic bugs, I work to ensure smooth functionality and stable deployment.",
  },
];
export default serviceData;
