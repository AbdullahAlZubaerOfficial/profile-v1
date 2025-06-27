import React from "react";
import Title from "../Title/Title";
import serviceData from "./serviceData";
const Services = () => {
  return (
    <>
      <Title title={"Services"} />
      <div className="my-10 flex items-center justify-center gap-6">
        {serviceData?.map((service, index) => {
          const { logo, title, desc } = service;
          return (
            <div className="shadow-md bg-white rounded-xl" key={index}>
              <div className="flex flex-col items-center justify-center gap-5 text-center  w-[400px] p-10">
                <div>{logo}</div>
                <h4 className="text-3xl font-semibold">{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
