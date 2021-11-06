import React from "react";
import AppProvider from "./context";
import Routes from "./routes";
import ThemeContainer from "./theme";

const Main: React.FC = () => {
  return (
    <AppProvider>
      <ThemeContainer>
        <Routes />
      </ThemeContainer>
    </AppProvider>
  );
};

export default Main;
