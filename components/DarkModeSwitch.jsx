import { useTheme } from "next-themes";
import { useState } from "react";
import { useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <BsFillSunFill
          className="darkMode_buttons"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          className="darkMode_buttons"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkModeSwitch;
