import { useEffect, useState } from "react";
import { ModeContext } from "./ModeContext";
const html = document.getElementById("html");
const DarkModeProvider = ({ children }) => {
  const [mode, setMode] = useState(true);
  useEffect(() => {
    if (mode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [mode]);
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default DarkModeProvider;
