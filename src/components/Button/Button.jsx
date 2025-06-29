import React from "react";
import { Link } from "react-router";

const Button = ({ text, link, target, type }) => {
  return (
    <Link
      to={link}
      target={target}
      type={type}
      className="relative inline-block px-4 py-2 font-medium group"
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-sky-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-sky-500 group-hover:bg-sky-500"></span>
      <span className="relative text-black group-hover:text-white">{text}</span>
    </Link>
  );
};

export default Button;
