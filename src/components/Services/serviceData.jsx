import { FaMobileAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaBugSlash } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

const serviceData = [
  {
    logo: <CgWebsite size={50} />,
    title: "Web Design",
    desc: "I design clean, user-focused interfaces that are both visually appealing and functional. My goal is to create engaging digital experiences that enhance usability, accessibility, and brand identity across all devices.",
  },
  {
    logo: <FaLaptopCode size={50} />,
    title: "Web Development",
    desc: "I build responsive, dynamic web applications using modern tools like React. My focus is on writing clean, efficient code that <Br delivers fast, reliable, and scalable user experiences tailored to client goals.",
  },
  {
    logo: <FaBugSlash size={50} />,
    title: "Bug Fixing",
    desc: "I specialize in identifying and resolving issues that affect app performance. Whether it's front-end glitches or deeper logic bugs, I work to ensure smooth functionality and stable deployment.",
  },
];
export default serviceData;
