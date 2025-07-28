import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "../Title/Title";
import { FaUser, FaBookOpen, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdMessage } from "react-icons/md";
import Lottie from "lottie-react";
import contactAnimation from "../../assets/contact2.json";
import toast from "react-hot-toast";

// Animation variants
const slideFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.title || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7b8df874-281c-47f8-bb32-95f6a3baf6e9",
          name: formData.name,
          email: formData.email,
          subject: formData.title,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", title: "", message: "" });
        toast.success("Message sent successfully! 🎉");
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      toast.error("Failed to send message. Please try again! ❌");
    }
  };

  const InputField = ({ id, name, value, onChange, placeholder, required, icon: Icon, type = "text" }) => (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 dark:border-none dark:bg-slate-800 dark:text-slate-200 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
        aria-describedby={`${id}-help`}
      />
      <div className="absolute left-4 top-3.5 text-slate-500 dark:text-slate-400">
        <Icon aria-hidden="true" />
      </div>
    </div>
  );

  const TextareaField = ({ id, name, value, onChange, placeholder, required, icon: Icon }) => (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={6}
        required={required}
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 dark:border-none dark:bg-slate-800 dark:text-slate-200 outline-none resize-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
        aria-describedby={`${id}-help`}
      ></textarea>
      <div className="absolute left-4 top-4 text-slate-500 dark:text-slate-400">
        <Icon aria-hidden="true" />
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <Title title={"Get In Touch"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side with contact info and animation */}
        <div className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg dark:text-slate-200 flex flex-col">
          <motion.div
            className="space-y-8"
            variants={slideFromLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch 🤝</h2>
              <p className="text-slate-600 dark:text-slate-300">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
            </motion.div>

            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="h-6 w-6 text-sky-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:zubaerislam703@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">
                    zubaerislam703@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaPhone className="h-6 w-6 text-sky-500" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+8801560047265" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors">
                    +880 15600 47265
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="h-6 w-6 text-sky-500" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-slate-600 dark:text-slate-300">Dhaka, Bangladesh</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="w-full max-w-md mx-auto mt-auto">
            <Lottie 
              animationData={contactAnimation} 
              loop={true} 
              aria-hidden="true"
              className="h-64 md:h-80"
            />
          </div>
        </div>

        {/* Right side contact form (unchanged) */}
        {/* Right side contact form */}
        <div className="bg-white border border-slate-300 glass rounded-xl p-6 shadow-md dark:bg-slate-900 dark:border-none dark:text-slate-200">
          <h3 className="text-3xl font-semibold mb-5">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-slate-900 dark:text-slate-200"
              >
                Your Name*
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 dark:border-none dark:bg-slate-800 dark:text-slate-200 outline-none"
                />
                <div className="absolute left-4 top-3 text-slate-500 dark:text-slate-400">
                  <FaUser />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-slate-900 dark:text-slate-200"
              >
                Email Address*
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 dark:border-none dark:bg-slate-800 dark:text-slate-200 outline-none"
                />
                <div className="absolute left-4 top-3 text-slate-500 dark:text-slate-400">
                  <MdEmail />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="title"
                className="block mb-2 font-medium text-slate-900 dark:text-slate-200"
              >
                Subject*
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="What about this?"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 dark:border-none dark:bg-slate-800 dark:text-slate-200 outline-none"
                />
                <div className="absolute left-4 top-3 text-slate-500 dark:text-slate-400">
                  <FaBookOpen />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-slate-900 dark:text-slate-200"
              >
                Message*
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your message"
                  rows={6}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 dark:border-none dark:bg-slate-800 dark:text-slate-200 outline-none resize-none"
                ></textarea>
                <div className="absolute left-4 top-4 text-slate-500 dark:text-slate-400">
                  <MdMessage />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`relative inline-block px-6 py-3 font-medium rounded-xl overflow-hidden
                  ${
                    status === "loading"
                      ? "cursor-not-allowed bg-sky-400"
                      : "bg-sky-600 hover:bg-sky-700"
                  }
                  text-white transition duration-300`}
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="loading loading-spinner loading-md"></span>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>

            {/* Status messages */}
            {status === "success" && (
              <p className="text-green-500 text-center font-semibold mt-2">
                Message sent successfully! ✅
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center font-semibold mt-2">
                Failed to send message. Please try again! ❌
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}