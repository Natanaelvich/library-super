import { AntDesign } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Alert, Modal } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

type Props = {
  visible: boolean;
  onClose: () => void;
  handleSearch: (initialYear: string, finalYear: string) => void;
  initialYear: string;
  finalYear: string;
  setInitialYear: Dispatch<SetStateAction<string>>;
  setFinalYear: Dispatch<SetStateAction<string>>;
};

const ModalPickerPeriod: React.FC<Props> = ({
  visible,
  onClose,
  handleSearch,
  initialYear,
  finalYear,
  setFinalYear,
  setInitialYear,
}) => {
  const theme = useTheme();

  
  useEffect(()=>{
      setInitialYear(initialYear || "2021")
      setFinalYear(finalYear || "2021")
  },[]);
  
  function handleSearchByPeriod() {
    if (initialYear.length === 0 || finalYear.length === 0) {
      Alert.alert("Todos os campos são obrigatórios");
      return;
    }

    if (Number(initialYear) > Number(finalYear)) {
      Alert.alert("A data inicial deve ser inferior a data final.");
      return;
    }

    onClose();
    handleSearch(initialYear, finalYear);
  }
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
              onPress={() => onClose()}
              color={theme.colors.textBold}
            />
          </S.WrapperCloseButon>

          <S.WrapperInputs>
            <S.TextInput
              value={initialYear}
              onChangeText={setInitialYear}
              maxLength={4}
              keyboardType="number-pad"
            />

            <AntDesign
              name="arrowright"
              size={24}
              color={theme.colors.textBold}
            />

            <S.TextInput
              value={finalYear}
              onChangeText={setFinalYear}
              maxLength={4}
              keyboardType="number-pad"
            />
          </S.WrapperInputs>
          <S.ButtonSearch onPress={handleSearchByPeriod}>
            <S.ButtonSearchText>BUSCAR</S.ButtonSearchText>
          </S.ButtonSearch>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};

export default ModalPickerPeriod;
