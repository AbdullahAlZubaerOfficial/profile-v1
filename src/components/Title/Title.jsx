import React from "react";

const Title = ({ title }) => {
  return (
    <div className="text-center dark:text-slate-200">
      <h1 className="mt-10 lg:my-10 text-4xl font-bold text-center">{title}</h1>
    </div>
  );
};

export default Title;
