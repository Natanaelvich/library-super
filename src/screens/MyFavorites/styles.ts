import { ScrollViewProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.gray};

  padding-top: 35px;
`;

export const ButtonBack = styled.TouchableOpacity`
  margin-bottom: 24px;
  margin-left: 24px;
`;

export const ContentScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
} as ScrollViewProps)``;
