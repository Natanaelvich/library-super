import { ScrollView, ScrollViewProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;

  padding-top: 35px;
`;

export const Header = styled.View`
padding: 0 24px 0;
`

export const ContentScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
} as ScrollViewProps)``;

export const ButtonMenu = styled.TouchableOpacity`
  margin-bottom: 24px;
`;

export const TextLarge = styled.Text`
  font-size: 16px;
  line-height: 17px;

  color: #3e3e70;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const TextSmall = styled.Text`
  font-size: 12px;
  color: #949494;
  margin-bottom: 8px;
`;

export const WrapperFormSearch = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextInput = styled.TextInput`
  height: 43px;
  flex: 1;

  background: #ffffff;
  border-radius: 12px;

  padding: 0 16px;
  margin-right: 18px;
`;

export const ButtonSearch = styled.TouchableOpacity`
  width: 42px;
  height: 42px;

  background: #fb7750;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const WrapperRow = styled.View`
  margin-top: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextResults = styled.Text`
 font-size: 12px;
  color: #949494;
`

export const TextUnderline = styled.Text`
  font-size: 12px;

  text-decoration-line: underline;

  color: #fb7750;
`;
