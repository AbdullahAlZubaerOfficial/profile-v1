import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-[100vh] text-white bg-slate-800 flex items-center justify-center">
      <span className="loading loading-spinner loading-xl"></span>
    </div>
  );
};

export default LoadingSpinner;
