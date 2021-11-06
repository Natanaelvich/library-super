import { Switch, SwitchProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 119px 24px 24px;
  background: ${({theme})=> theme.colors.gray};
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

  color: ${({theme})=> theme.colors.secundary};
  margin-left: 16px;
`;

export const SwitchCustom = styled(Switch).attrs<SwitchProps>(({theme}) => ({
  trackColor: { false: theme.colors.textBold, true: theme.colors.textRegular},
  thumbColor: theme.colors.secundary,
  ios_backgroundColor: theme.colors.textRegular,
}))`
  margin-left: auto;
`;
