import { ThemeContext } from "@/providers/theme-provider";
import { useContext } from "react";

// Custom hook to use the context easily
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
