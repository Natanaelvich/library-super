import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: ${Platform.OS === "ios" ? 55 + getStatusBarHeight() : 55}px 24px 24px;
  background-color: ${({theme})=> theme.colors.gray};
`;

export const Header = styled.View`
flex-direction: row;
margin-bottom: 85px;
justify-content: space-between;
`
export const ButtonHeader = styled.TouchableOpacity`
`

export const Title = styled.Text`
font-size: 24px;
font-weight: bold;
margin-top: 24px;
margin-bottom: 8px;
color: ${({theme})=> theme.colors.textBold};
`;

export const WrapperText = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin :18px 0;
`;

export const TextBold = styled.Text`
  font-size: 14px;

  color: ${({theme})=> theme.colors.textBold};
  font-weight: bold;
  margin-left: 4px;
`;

export const TextRegular = styled.Text`
  color: ${({theme})=> theme.colors.textRegular};
  font-weight: normal;
`;

export const ButtonAddFavorite = styled.TouchableOpacity`
flex-direction: row;
margin-top: 70px;
align-self: center;
`

export const ButtonAddFavoriteText = styled.Text`
font-size: 16px;
font-weight: bold;
color:  ${({theme})=> theme.colors.primary};
margin-left: 8px;
`

