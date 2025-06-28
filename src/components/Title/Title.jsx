import React from "react";
import ShinyText from "../../Animation/ShinyText";

const Title = ({ title }) => {
  return (
    <div className="text-center">
      {/* <h1 className="my-10 text-4xl font-bold text-center">{title}</h1>;
       */}
      <ShinyText
        text={title}
        disabled={false}
        speed={3}
        className="my-10 text-4xl font-bold text-center"
      />
    </div>
  );
};

export default Title;
