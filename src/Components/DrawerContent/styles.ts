import { Switch, SwitchProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 119px 24px 24px;
`;

export const Title = styled.Text``;

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const OptionText = styled.Text`
  font-weight: bold;
  font-size: 16px;

  color: #343152;
  margin-left: 16px;
`;

export const SwitchCustom = styled(Switch).attrs<SwitchProps>({
  trackColor: { false: "#ddd", true: "#3A3A44" },
  thumbColor: "#242238",
  ios_backgroundColor: "#3e3e3e",
})`
  margin-left: auto;
`;
