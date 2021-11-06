import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Switch } from "react-native";

import * as S from "./styles";

const DrawerContent: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <S.Container>
      <S.Option>
        <FontAwesome size={18} name="heart" color="#343152" />
        <S.OptionText>Meus favoritos</S.OptionText>
      </S.Option>

      <S.Option>
        <FontAwesome size={18} name="moon-o" color="#343152" />
        <S.OptionText>Tema Escuro</S.OptionText>

        <S.SwitchCustom onValueChange={setDarkMode} value={darkMode} />
      </S.Option>
    </S.Container>
  );
};

export default DrawerContent;
