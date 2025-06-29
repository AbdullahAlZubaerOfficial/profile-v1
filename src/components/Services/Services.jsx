import React from "react";
import Title from "../Title/Title";
import serviceData from "./serviceData";
import { Element } from "react-scroll";
import Tilt from "react-parallax-tilt";

const Services = () => {
  return (
    <>
      <Element name="services" className="element">
        <Title title={"Services"} />
        <div className="my-10 flex items-center md:flex-row md:flex-nowrap justify-center flex-wrap gap-3 lg:gap-6">
          {serviceData?.map((service, index) => {
            const { logo, title, desc } = service;

            return (
              <Tilt>
                <div
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="shadow-md bg-white rounded-xl dark:text-slate-200 dark:border-none dark:bg-slate-800"
                  key={index}
                >
                  <div className="flex flex-col items-center justify-center gap-3 lg:gap-5 text-center w-full  xl:w-[400px] p-5 lg:p-10">
                    <div>{logo}</div>
                    <h4 className="text-2xl lg:text-3xl font-semibold">
                      {title}
                    </h4>
                    <p className="text-base">{desc}</p>
                  </div>
                </div>
              </Tilt>
            );
          })}
        </div>
      </Element>
    </>
  );
};

export default Services;
