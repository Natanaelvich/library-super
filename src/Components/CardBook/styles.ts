import { TextProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 120px;

  background: ${({theme})=> theme.colors.white};
  border-radius: 6px;

  elevation: 2;
  margin-top: 12px;
  padding: 16px;
`;

export const WrapperText = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextBase = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: "tail",
} as TextProps)`
  max-width: 90%;
`;

export const TextBold = styled(TextBase)`
  font-size: 14px;

  color: ${({theme})=> theme.colors.textBold};
  font-weight: bold;
`;

export const TextRegular = styled(TextBase)`
  font-size: 12px;

  color: ${({theme})=> theme.colors.textRegular};
  margin-left: 3px;
`;

export const Separator = styled.View<{ spacing: number }>`
  padding: ${({ spacing }) => (spacing ? spacing : 0)}px;
`;
