import React, { useRef, useState } from "react";
import Title from "../Title/Title";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import Button from "../Button/Button";
import Lottie from "lottie-react";
import emailjs from "emailjs-com";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import gmail from "../../assets/icons/gmail.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import location from "../../assets/icons/location.png";
import facebook from "../../assets/icons/facebook.png";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import contactAnimation from "../../assets/contact2.json";
import { Link } from "react-router";
import { Element } from "react-scroll";
import toast from "react-hot-toast";
const Contact = () => {
  const formRef = useRef();
  const [isPending, setIsPending] = useState(false);
  const handleEmailSend = (e) => {
    e.preventDefault();
    setIsPending(true);
    emailjs
      .sendForm(
        `${import.meta.env.VITE_S_KEY}`, // Replace with your EmailJS Service ID
        `${import.meta.env.VITE_T_KEY}`, // Replace with your EmailJS Template ID
        formRef.current,
        `${import.meta.env.VITE_P_KEY}` // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsPending(false);
          toast.success("Email sent");

          formRef.current.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };
  return (
    <>
      <Element name="contact" className="element">
        <Title title={"Get In Touch"} />
        <div className="my-15 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
          <div className="space-y-3 lg:space-y-6">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="space-y-3 bg-white dark:text-slate-200 dark:bg-slate-800 dark:border-none  p-5 rounded-xl shadow-md"
            >
              <h3 className="text-3xl font-semibold ">
                Let's create something <br /> amazing together!
              </h3>
              <p className="text-base">
                Feel free to reach out for projects, collaborations, or web web
                development inquiries via the form or email.
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="dark:text-slate-200 bg-white dark:bg-slate-800 p-3 lg:p-5 rounded-xl shadow-md lg:flex items-center gap-3 lg:gap-5"
            >
              <div className="space-y-3">
                <div className="flex glass items-center gap-3 p-5 shadow-md rounded-xl bg-white">
                  <span className="w-[45px]">
                    <img className="w-full h-full" src={gmail} alt="gmail" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a href="mailto:mdtahmidalam122@gmail.com">
                      mdtahmidalam122@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex glass items-center gap-3 p-5 shadow-md rounded-xl bg-white">
                  <span className="w-[45px]">
                    <img
                      className="w-full h-full"
                      src={whatsapp}
                      alt="whatsapp"
                    />
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <a href="tel:+8801318195591">+88 01318195591</a>
                  </div>
                </div>
                <div className="flex glass items-center gap-3 p-5 shadow-md rounded-xl bg-white">
                  <span className="w-[45px]">
                    <img
                      className="w-full h-full"
                      src={location}
                      alt="location"
                    />
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
                  <h3 className="text-2xl font-semibold text-center">
                    Follow Me
                  </h3>
                  <div className="flex items-center gap-3 lg:gap-4">
                    <Link
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      to={"https://www.facebook.com/TahmidAlamJG"}
                      target="_blank"
                      className=" border-slate-300 dark:border-slate-500 w-10 h-10 rounded-full flex items-center justify-center"
                    >
                      <img
                        className="w-full h-full hover:scale-110 transition-transform duration-500"
                        src={facebook}
                        alt="facebook"
                      />
                    </Link>
                    <Link
                      data-aos="fade-down"
                      data-aos-duration="1000"
                      to={"https://www.linkedin.com/in/tahmidalam122/"}
                      target="_blank"
                      className=" border-slate-300 dark:border-slate-500 w-10 h-10 rounded-full flex items-center justify-center"
                    >
                      <img
                        className="w-full h-full hover:scale-110 transition-transform duration-500"
                        src={linkedin}
                        alt="linkedin"
                      />
                    </Link>
                    <Link
                      data-aos="fade-left"
                      data-aos-duration="1000"
                      to={"https://github.com/tahmid122"}
                      target="_blank"
                      className="border-slate-300 dark:border-slate-500 border-none w-10 h-10 rounded-full flex items-center justify-center bg-white"
                    >
                      <img
                        className="w-full h-full hover:scale-110 transition-transform duration-500"
                        src={github}
                        alt="github"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="bg-white border border-slate-300 glass rounded-xl p-3 lg:p-5 shadow-md space-y-3"
          >
            <h3 className="text-3xl font-semibold capitalize dark:text-slate-200">
              Send me a message
            </h3>
            <div>
              <form
                ref={formRef}
                onSubmit={handleEmailSend}
                className="space-y-3"
              >
                <div className="flex lg:flex-row flex-col items-center gap-5">
                  <div className="w-full">
                    <label className="mb-2 text-sm text-slate-900 dark:text-slate-200 font-medium block">
                      Your Name*
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Enter name"
                        required
                        className="pr-4 dark:bg-slate-800 dark:border-none pl-10 lg:pl-12 py-3 text-sm text-slate-900 dark:text-slate-200 rounded-xl bg-white shadow-xs border border-slate-300 w-full outline-none"
                      />

                      <div className="absolute dark:text-slate-200 left-4">
                        <FaUser />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="mb-2 text-sm text-slate-900 dark:text-slate-200 font-medium block">
                      Email Address*
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        name="user_email"
                        required
                        placeholder="Enter email address"
                        className="pr-4 dark:bg-slate-800 dark:border-none pl-10 lg:pl-12 py-3 text-sm text-slate-900 dark:text-slate-200 rounded-xl bg-white shadow-xs border border-slate-300 w-full outline-none"
                      />

                      <div className="absolute left-4 dark:text-slate-200">
                        <MdEmail />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label className="mb-2 text-sm text-slate-900 dark:text-slate-200 font-medium block">
                    Subject*
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      name="title"
                      required
                      placeholder="What about this?"
                      className="pr-4 dark:bg-slate-800 dark:text-slate-200 dark:border-none pl-10 lg:pl-12 py-3 text-sm text-slate-900  rounded-xl bg-white shadow-xs border border-slate-300 w-full outline-none"
                    />

                    <div className="absolute left-4 dark:text-slate-200">
                      <FaBookOpen />
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <label className="mb-2 text-sm text-slate-900 dark:text-slate-200 font-medium block">
                    Message*
                  </label>
                  <div className="relative flex items-center">
                    <textarea
                      type="text"
                      name="message"
                      required
                      placeholder="Describe your message"
                      className="pr-4 dark:bg-slate-800 dark:border-none pl-10 lg:pl-12 py-3 text-sm text-slate-900 dark:text-slate-200 rounded-xl bg-white  shadow-xs border border-slate-300 w-full outline-none resize-none h-[200px]"
                    />

                    <div className="absolute left-4 top-4 dark:text-slate-200">
                      <FaMessage />
                    </div>
                  </div>
                </div>
                <div className="w-full text-center">
                  <button
                    type="submit"
                    disabled={isPending}
                    className={`relative inline-block px-4 py-2 font-medium group ${
                      isPending ? "cursor-no-drop" : ""
                    }`}
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-sky-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-sky-500 group-hover:bg-sky-500"></span>
                    <span className="relative text-black group-hover:text-white">
                      {isPending ? (
                        <div>
                          <span className="loading loading-spinner loading-md mr-2"></span>
                          Sending...
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </span>
                  </button>
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
