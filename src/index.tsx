import React from "react";
import { ToastProvider } from "react-native-toast-notifications";
import AppProvider from "./context";
import Routes from "./routes";
import ThemeContainer from "./theme";

const Main: React.FC = () => {
  return (
    <ToastProvider>
      <AppProvider>
        <ThemeContainer>
          <Routes />
        </ThemeContainer>
      </AppProvider>
    </ToastProvider>
  );
};

export default Main;
