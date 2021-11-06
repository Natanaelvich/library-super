import { ViewProps } from "react-native";
import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.64);
`;

export const ModalContent = styled.View`
  padding: 54px 24px 24px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: auto;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const WrapperInputs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin : 24px 0;
  width: 100%;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  height: 51px;

  background: #3e3e70;
  border-radius: 6px;
  width: 45%;

  font-size: 18px;
color: #FFFFFF;

text-align: center;
`;

export const ButtonSearch = styled.TouchableOpacity`
  border-radius: 10px;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;

  background: #fb7750;

  
`;

export const ButtonSearchText = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const WrapperCloseButon = styled.View`
  position: absolute;
  right: 16px;
  top: 16px;
`;
