import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Book } from "../../context/booksContext";

export const Container = styled.View`
  flex: 1;
  background: ${({theme})=> theme.colors.gray};

  padding-top: 35px;
`;

export const Header = styled.View`
padding: 0 24px 0;
`

export const ListBooks = styled(FlatList as new () => FlatList<Book>).attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
  },
})``;

export const WrapperLoadingPagination = styled.View`
height: 64px;
width: 100%;
align-items: center;
justify-content: center;
`

export const ButtonMenu = styled.TouchableOpacity`
  margin-bottom: 24px;
`;

export const TextLarge = styled.Text`
  font-size: 16px;
  line-height: 17px;

  color:  ${({theme})=> theme.colors.secundary};
  font-weight: bold;
  margin-bottom: 12px;
`;

export const TextSmall = styled.Text`
  font-size: 12px;
  color: ${({theme})=> theme.colors.textSmall};
  margin-bottom: 8px;
`;

export const WrapperFormSearch = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextInput = styled.TextInput`
  height: 43px;
  flex: 1;

  background: ${({theme})=> theme.colors.white};
  color: ${({theme})=> theme.colors.textBold};
  border-radius: 12px;

  padding: 0 16px;
  margin-right: 18px;
`;

export const ButtonSearch = styled.TouchableOpacity`
  width: 42px;
  height: 42px;

    background: ${({theme})=> theme.colors.primary};
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
  color: ${({theme})=> theme.colors.textRegular};
`

export const TextUnderline = styled.Text`
  font-size: 12px;

  text-decoration-line: underline;

  color: ${({theme})=> theme.colors.primary};
`;
