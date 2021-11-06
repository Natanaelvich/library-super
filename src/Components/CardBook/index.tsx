import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Book } from "../../screens/Home";

import * as S from "./styles";

type Props = {
book : Book
} & TouchableOpacityProps

const CardBook: React.FC<Props> = ({book,...rest}) => {
  return (
    <S.Container {...rest}>
      <S.Header>
        <S.TextBold>{book.titulo}</S.TextBold>

        <S.WrapperText>
          <FontAwesome5 name="calendar-day" />
          <S.Separator spacing={2} />
          <S.TextBold>{book.ano}</S.TextBold>
        </S.WrapperText>
      </S.Header>

      <S.Separator spacing={8} />
      <S.ContentRow>
        <S.WrapperText>
          <FontAwesome5 name="user-alt" />
          <S.TextRegular>Autor: {book.autor}</S.TextRegular>
        </S.WrapperText>

        <S.WrapperText>
          <FontAwesome5 name="key" />
          <S.TextRegular>ISBN: {book.isbn}</S.TextRegular>
        </S.WrapperText>
      </S.ContentRow>

      <S.Separator spacing={8} />
      <S.WrapperText>
        <FontAwesome5 name="book" />
        <S.TextRegular>Editora: {book.editora}</S.TextRegular>
      </S.WrapperText>
    </S.Container>
  );
};

export default CardBook;
