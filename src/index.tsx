import { StatusBar } from "expo-status-bar";
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
            <StatusBar backgroundColor='#fff' style='dark' />
          <Routes />
        </ThemeContainer>
      </AppProvider>
    </ToastProvider>
  );
};

export default Main;
