import React, { createContext, useState, useEffect, useContext } from "react";

// ১. Context তৈরি
const ThemeContext = createContext();

// ২. Custom Provider
const ThemeProvider = ({ children }) => {
  // State দিয়ে থিম সেট করা (ডিফল্ট "dark")
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark" // ডিফল্ট থিম "dark"
  );

  // Theme Toggle Function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // localStorage-এ থিম সংরক্ষণ
  };

  // থিমের ইফেক্ট (ডকুমেন্টে অ্যাপ্লাই করা)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook (Theme সহজে ব্যবহার করার জন্য)
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Default Export
export default ThemeProvider;
