import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { useTheme } from "styled-components/native";
import useFavoritesBooks from "../../hooks/useFavoritesBooks";
import api from "../../services/api";
import { Book } from "../Home";

import * as S from "./styles";

type BookDetailsProps = {
  idioma: "string";
  peso: 0;
  comprimento: 0;
  largura: 0;
  altura: 0;
} & Book;

const BookDetails: React.FC = () => {
  const { goBack } = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const { addBookFavorite, bookFavorites, removeBookFavorite } =
    useFavoritesBooks();

  const { bookId } = route.params as { bookId: string };

  const [bookLocal, setBookLocal] = useState<BookDetailsProps | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getBook() {
      try {
        setLoading(true);
        const response = await api.get(`/api/Livros/${bookId}`);

        setBookLocal(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getBook();
  }, []);

  const favorited = useMemo(() => {
    const bookFavoritedFind = bookFavorites.find((b) => b.id === bookId);

    return !!bookFavoritedFind;
  }, [bookFavorites]);

  function handleAddBookToFavorites() {
    if (bookLocal) {
      if (favorited) {
        removeBookFavorite(bookLocal);
      } else {
        addBookFavorite(bookLocal);
      }
    }
  }

  return (
    <S.Container>
      <S.ButtonBack onPress={goBack}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={31}
          color={theme.colors.textBold}
        />
      </S.ButtonBack>

      {loading ? (
        <ActivityIndicator
          animating={loading}
          size="large"
          color={theme.colors.primary}
        />
      ) : (
        <>
          {!!bookLocal?.id && (
            <>
              <FontAwesome5
                name="book"
                size={80}
                color={theme.colors.primary}
              />
              <S.Title>{bookLocal.titulo}</S.Title>

              <S.WrapperText>
                <FontAwesome5
                  name="calendar-day"
                  color={theme.colors.textBold}
                />
                <S.TextBold>{bookLocal.ano}</S.TextBold>
              </S.WrapperText>

              <S.ContentRow>
                <S.WrapperText>
                  <FontAwesome5 name="user-alt" color={theme.colors.textBold} />
                  <S.TextBold>
                    Autor: <S.TextRegular> {bookLocal.autor}</S.TextRegular>
                  </S.TextBold>
                </S.WrapperText>

                <S.WrapperText>
                  <FontAwesome5 name="key" color={theme.colors.textBold} />
                  <S.TextBold>
                    ISBN: <S.TextRegular> {bookLocal.isbn}</S.TextRegular>
                  </S.TextBold>
                </S.WrapperText>
              </S.ContentRow>

              <S.WrapperText>
                <FontAwesome5 name="book" color={theme.colors.textBold} />
                <S.TextBold>
                  Editora: <S.TextRegular> {bookLocal.editora}</S.TextRegular>
                </S.TextBold>
              </S.WrapperText>

              <S.ContentRow>
                <S.WrapperText>
                  <FontAwesome5 name="user-alt" color={theme.colors.textBold} />
                  <S.TextBold>
                    Idioma: <S.TextRegular> {bookLocal.idioma}</S.TextRegular>
                  </S.TextBold>
                </S.WrapperText>

                <S.WrapperText>
                  <FontAwesome5 name="key" color={theme.colors.textBold} />
                  <S.TextBold>
                    Peso: <S.TextRegular>{bookLocal.peso}g </S.TextRegular>
                  </S.TextBold>
                </S.WrapperText>
              </S.ContentRow>

              <S.WrapperText>
                <SimpleLineIcons
                  name="size-fullscreen"
                  color={theme.colors.textBold}
                />
                <S.TextBold>
                  Dimensões:{" "}
                  <S.TextRegular>
                    {" "}
                    A {bookLocal.altura}cm, L {bookLocal.largura}cm, C{" "}
                    {bookLocal.comprimento}cm
                  </S.TextRegular>
                </S.TextBold>
              </S.WrapperText>

              <S.ButtonAddFavorite onPress={handleAddBookToFavorites}>
                {favorited ? (
                  <MaterialCommunityIcons
                    name="heart"
                    size={24}
                    color="#F44336"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={24}
                    color="#F44336"
                  />
                )}

                <S.ButtonAddFavoriteText>
                  Adicionar aos favoritos
                </S.ButtonAddFavoriteText>
              </S.ButtonAddFavorite>
            </>
          )}
        </>
      )}
    </S.Container>
  );
};

export default BookDetails;
