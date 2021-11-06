import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import useThemeApp from "../../hooks/useThemeApp";

import * as S from "./styles";

const DrawerContent: React.FC = () => {
  const { changeTheme, theme } = useThemeApp();
const navigation  = useNavigation()

  const [darkMode, setDarkMode] = useState(false);

  function handleChangeTheme(value: boolean) {
    changeTheme(theme === "light" ? "dark" : "light");
    setDarkMode(value);
  }

  function handleNavigateToMyFavorites(){
    navigation.navigate('MyFavorites')
  }

  return (
    <S.Container>
      <S.Option onPress={handleNavigateToMyFavorites}>
        <FontAwesome size={18} name="heart" color="#343152" />
        <S.OptionText>Meus favoritos</S.OptionText>
      </S.Option>

      <S.Option>
        <FontAwesome size={18} name="moon-o" color="#343152" />
        <S.OptionText>Tema Escuro</S.OptionText>

        <S.SwitchCustom onValueChange={handleChangeTheme} value={darkMode} />
      </S.Option>
    </S.Container>
  );
};

export default DrawerContent;
