import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import api from "../../services/api";
import { Book } from "../Home";

import * as S from "./styles";

type typeBookDetails = {
  idioma: "string";
  peso: 0;
  comprimento: 0;
  largura: 0;
  altura: 0;
} & Book;

const BookDetails: React.FC = () => {
  const { goBack } = useNavigation();
  const route = useRoute();

  const { bookId } = route.params as { bookId: number };

  const [bookLocal, setBookLocal] = useState<typeBookDetails | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getBook() {
      try {
        setLoading(true);
        const response = await api.get(`/api/Livros/${bookId}`);

        setBookLocal(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getBook();
  }, []);

  return (
    <S.Container>
      <S.ButtonBack onPress={goBack}>
        <MaterialIcons name="keyboard-arrow-left" size={31} />
      </S.ButtonBack>

      {loading ? (
        <ActivityIndicator animating={loading} size="large" color="#fb7750" />
      ) : (
        <>
          {!!bookLocal?.id && (
            <>
              <FontAwesome5 name="book" size={80} color="#FB7750" />
              <S.Title>{bookLocal.titulo}</S.Title>

              <S.WrapperText>
                <FontAwesome5 name="calendar-day" />
                <S.TextBold>{bookLocal.ano}</S.TextBold>
              </S.WrapperText>

              <S.ContentRow>
                <S.WrapperText>
                  <FontAwesome5 name="user-alt" />
                  <S.TextBold>
                    Autor: <S.TextRegular> {bookLocal.autor}</S.TextRegular>
                  </S.TextBold>
                </S.WrapperText>

                <S.WrapperText>
                  <FontAwesome5 name="key" />
                  <S.TextBold>
                    ISBN: <S.TextRegular> {bookLocal.isbn}</S.TextRegular>
                  </S.TextBold>
                </S.WrapperText>
              </S.ContentRow>

              <S.WrapperText>
                <FontAwesome5 name="book" />
                <S.TextBold>
                  Editora: <S.TextRegular> {bookLocal.editora}</S.TextRegular>
                </S.TextBold>
              </S.WrapperText>

              <S.ContentRow>
                <S.WrapperText>
                  <FontAwesome5 name="user-alt" />
                  <S.TextBold>
                    Idioma: <S.TextRegular> {bookLocal.idioma}</S.TextRegular>
                  </S.TextBold>
                </S.WrapperText>

                <S.WrapperText>
                  <FontAwesome5 name="key" />
                  <S.TextBold>
                    Peso: <S.TextRegular>{bookLocal.peso}g </S.TextRegular>
                  </S.TextBold>
                </S.WrapperText>
              </S.ContentRow>

              <S.WrapperText>
                <SimpleLineIcons name="size-fullscreen" />
                <S.TextBold>
                  Dimensões:{" "}
                  <S.TextRegular>
                    {" "}
                    A {bookLocal.altura}cm, L {bookLocal.largura}cm, C{" "}
                    {bookLocal.comprimento}cm
                  </S.TextRegular>
                </S.TextBold>
              </S.WrapperText>

              <S.ButtonAddFavorite>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={24}
                  color="#F44336"
                />

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
