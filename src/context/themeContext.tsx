import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import api from "../services/api";

type Theme = "dark" | "light";

export type ThemeContextData = {
  theme: Theme;
  changeTheme: (type: Theme) => void;
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  async function changeTheme(type: Theme) {
    setTheme(type);

    await AsyncStorage.setItem("theme:type", type);
  }

  useEffect(() => {
    async function getThemeType() {
      const themeType = await AsyncStorage.getItem("theme:type");

      if (themeType) {
        setTheme(themeType as Theme);
      }
    }

    getThemeType();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
