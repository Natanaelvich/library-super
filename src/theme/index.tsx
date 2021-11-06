import React from "react";
import { ThemeProvider } from "styled-components/native";
import useThemeApp from "../hooks/useThemeApp";
import dark from "./dark";
import light from "./light";

export type ThemeType = typeof light;

const ThemeContainer: React.FC = ({ children }) => {
  const { theme } = useThemeApp();

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeContainer;
