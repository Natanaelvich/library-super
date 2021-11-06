import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal } from "react-native";

import * as S from "./styles";

type Props = {
  visible: boolean;
  onClose: () => void;
  handleSearch: (initialYear: string, finalYear: string) => void;
};

const ModalPickerPeriod: React.FC<Props> = ({
  visible,
  onClose,
  handleSearch,
}) => {
  const [initialYear, setInitialYear] = useState("2021");
  const [finalYear, setFinalYear] = useState("2021");

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => onClose()}
    >
      <S.ModalContainer>
        <S.ModalContent>
          <S.WrapperCloseButon>
            <AntDesign
              name="close"
              size={24}
              color="black"
              onPress={() => onClose()}
            />
          </S.WrapperCloseButon>

          <S.WrapperInputs>
            <S.TextInput
              value={initialYear}
              onChangeText={setInitialYear}
              maxLength={4}
              keyboardType="number-pad"
            />

            <AntDesign name="arrowright" size={24} color="black" />

            <S.TextInput
              value={finalYear}
              onChangeText={setFinalYear}
              maxLength={4}
              keyboardType="number-pad"
            />
          </S.WrapperInputs>
          <S.ButtonSearch onPress={() => handleSearch(initialYear, finalYear)}>
            <S.ButtonSearchText>BUSCAR</S.ButtonSearchText>
          </S.ButtonSearch>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};

export default ModalPickerPeriod;
