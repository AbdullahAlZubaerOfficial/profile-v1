import React from "react";
import Title from "../Title/Title";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import Button from "../Button/Button";
import Lottie from "lottie-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

import contactAnimation from "../../assets/contact2.json";
import { Link } from "react-router";
import { Element } from "react-scroll";
const Contact = () => {
  return (
    <>
      <Element name="contact" className="element">
        <Title title={"Get In Touch"} />
        <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
          <div className="space-y-3 lg:space-y-6">
            <div className="space-y-3 bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-3xl font-semibold ">
                Let's create something <br /> amazing together!
              </h3>
              <p className="text-base">
                Feel free to reach out for projects, collaborations, or web web
                development inquiries via the form or email.
              </p>
            </div>
            <div className="glass p-3 lg:p-5 rounded-xl shadow-md lg:flex gap-3 lg:gap-5">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-5 shadow-md rounded-xl bg-white">
                  <span>
                    <MdEmail size={30} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a href="mailto:mdtahmidalam122@gmail.com">
                      mdtahmidalam122@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-5 shadow-md rounded-xl bg-white">
                  <span>
                    <FaPhone size={30} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <a href="tel:+8801318195591">+88 01318195591</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-5 shadow-md rounded-xl bg-white">
                  <span>
                    <FaLocationDot size={30} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p>Rangpur, Bangladesh</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start  w-full ">
                <div className="w-[70%]">
                  <Lottie animationData={contactAnimation} loop={true} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">Follow Me On</h3>
                  <div className="flex items-center gap-3 lg:gap-4">
                    <Link className="border border-slate-300 w-10 h-10 rounded-full flex items-center justify-center">
                      <FaFacebook size={23} />
                    </Link>
                    <Link className="border border-slate-300 w-10 h-10 rounded-full flex items-center justify-center">
                      <FaLinkedin size={23} />
                    </Link>
                    <Link className="border border-slate-300 w-10 h-10 rounded-full flex items-center justify-center">
                      <FaGithub size={23} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-3 lg:p-5 shadow-md space-y-3">
            <h3 className="text-3xl font-semibold capitalize">
              Send me a message
            </h3>
            <div>
              <form className="space-y-3">
                <div className="flex lg:flex-row flex-col items-center gap-5">
                  <div className="w-full">
                    <label className="mb-2 text-sm text-slate-900 font-medium block">
                      Your Name*
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="Enter name"
                        className="pr-4 pl-10 lg:pl-12 py-3 text-sm text-slate-900 rounded-xl bg-white shadow-xs border border-slate-300 w-full outline-none"
                      />

                      <div className="absolute left-4">
                        <FaUser />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="mb-2 text-sm text-slate-900 font-medium block">
                      Email Address*
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="Enter email address"
                        className="pr-4 pl-10 lg:pl-12 py-3 text-xs text-slate-900 rounded-xl bg-white shadow-sm border border-slate-300 w-full outline-none"
                      />

                      <div className="absolute left-4">
                        <MdEmail />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label className="mb-2 text-sm text-slate-900 font-medium block">
                    Subject*
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="What about this?"
                      className="pr-4 pl-10 lg:pl-12 py-3 text-sm text-slate-900 rounded-xl bg-white shadow-xs border border-slate-300 w-full outline-none"
                    />

                    <div className="absolute left-4">
                      <FaBookOpen />
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <label className="mb-2 text-sm text-slate-900 font-medium block">
                    Message*
                  </label>
                  <div className="relative flex items-center">
                    <textarea
                      type="text"
                      placeholder="Describe your message"
                      className="pr-4 pl-10 lg:pl-12 py-3 text-sm text-slate-900 rounded-xl bg-white  shadow-xs border border-slate-300 w-full outline-none resize-none h-[200px]"
                    />

                    <div className="absolute left-4 top-4">
                      <FaMessage />
                    </div>
                  </div>
                </div>
                <div className="w-full text-center">
                  <Button text={"Send message"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Contact;
