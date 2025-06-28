import React from "react";
import { Link } from "react-router";

const Button = ({ text, link, target }) => {
  return (
    <Link
      to={link}
      target={target}
      className="relative inline-block px-4 py-2 font-medium group"
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-purple-800 group-hover:bg-purple-800"></span>
      <span className="relative text-black group-hover:text-white">{text}</span>
    </Link>
  );
};

export default Button;
