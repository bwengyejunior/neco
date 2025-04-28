
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has theme preference stored
    const savedTheme = localStorage.getItem("theme");
    // Check system preference
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else if (systemPrefersDark) {
      // Use system preference if no saved preference
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 relative overflow-hidden shadow-md"
      aria-label="Toggle theme"
    >
      <div className={`transform transition-all duration-500 ${isAnimating ? 'scale-0' : 'scale-100'}`}>
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-primary" />
        ) : (
          <Sun className="h-5 w-5 text-primary" />
        )}
      </div>
      <div 
        className={`absolute inset-0 bg-primary/10 rounded-full transform transition-transform duration-500 ${isAnimating ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      ></div>
    </button>
  );
};

export default ThemeToggle;
