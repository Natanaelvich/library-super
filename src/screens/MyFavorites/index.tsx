import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTheme } from "styled-components/native";
import CardBook from "../../Components/CardBook";
import useFavoritesBooks from "../../hooks/useFavoritesBooks";

import * as S from "./styles";

export type Book = {
  ano: number;
  autor: string;
  editora: string;
  id: string;
  isbn: string;
  titulo: string;
};

const MyFavorites: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const { bookFavorites } = useFavoritesBooks();

  function handleNavigateToBookDetails(book: Book) {
    navigation.navigate("BookDetails", { bookId: book.id });
  }

  return (
    <S.Container>
      <S.ButtonBack onPress={navigation.goBack}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={31}
          color={theme.colors.textBold}
        />
      </S.ButtonBack>

      <S.ContentScroll>
        {bookFavorites.map((b) => (
          <CardBook
            onPress={() => handleNavigateToBookDetails(b)}
            key={b.id}
            book={b}
          />
        ))}
      </S.ContentScroll>
    </S.Container>
  );
};

export default MyFavorites;
