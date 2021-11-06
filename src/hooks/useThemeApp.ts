import { useContext } from "react";
import { ThemeContext, ThemeContextData } from "../context/themeContext";

export default function useThemeApp(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}
