import React from "react";
import { Keyboard, Platform } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const KeyboardDismiss: React.FC = ({ children }) => {
  function handleCloseKeyboard() {
      console.log('ALOOOO')
    if (Platform.OS === "ios") {
      Keyboard.dismiss();
    }
  }

  return <TouchableWithoutFeedback style={{flex : 1}} onPress={handleCloseKeyboard}>{children}</TouchableWithoutFeedback>;
};

export default KeyboardDismiss;
