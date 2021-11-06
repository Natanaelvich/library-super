import { MaterialIcons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Keyboard } from "react-native";
import { useTheme } from "styled-components/native";
import CardBook from "../../Components/CardBook";
import ModalPickerPeriod from "../../Components/ModalPickerPeriod";
import useBooks from "../../hooks/useBooks";

import * as S from "./styles";

export type Book = {
  ano: number;
  autor: string;
  editora: string;
  id: string;
  isbn: string;
  titulo: string;
};

const Home: React.FC = () => {
  const navigation = useNavigation();
  const theme = useTheme()

  const {
    books,
    results,
    loading,
    getBooks,
    handleSearchBook,
    handleSearchBookByPeriod,
  } = useBooks();

  const [querySearch, setQuerySearch] = useState("");
  const [showModalPickerPeriod, setShowModalPickerPeriod] = useState(false);

  function handleOpenDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  function handleNavigateToBookDetails(book: Book) {
    navigation.navigate("BookDetails", { bookId: book.id });
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.ButtonMenu onPress={handleOpenDrawer}>
          <MaterialIcons name="menu" size={24} color={theme.colors.textBold} />
        </S.ButtonMenu>

        <S.TextSmall>Bem vindo</S.TextSmall>
        <S.TextLarge>Busque livros pelo titulo autor ou ISBN</S.TextLarge>

        <S.WrapperFormSearch>
          <S.TextInput
            placeholder="Digite sua busca aqui..."
            value={querySearch}
            onChangeText={setQuerySearch}
            placeholderTextColor={theme.colors.textBold}
          />

          <S.ButtonSearch
            onPress={() => handleSearchBook(querySearch)}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator
                size="small"
                animating={loading}
                color="#fff"
              />
            ) : (
              <MaterialIcons name="search" size={18} color="#fff" />
            )}
          </S.ButtonSearch>
        </S.WrapperFormSearch>

        <S.WrapperRow>
          <S.TextSmall>
            Ou{" "}
            <S.TextUnderline onPress={() => setShowModalPickerPeriod(true)}>
              Busque por um período
            </S.TextUnderline>{" "}
          </S.TextSmall>

          {results > 0 && <S.TextResults>{results} resultados</S.TextResults>}
        </S.WrapperRow>
      </S.Header>

      {loading ? (
        <ActivityIndicator animating={loading} size="large" color="#fb7750" />
      ) : (
        <S.ContentScroll>
          {books.map((b) => (
            <CardBook
              onPress={() => handleNavigateToBookDetails(b)}
              key={b.id}
              book={b}
            />
          ))}
        </S.ContentScroll>
      )}

      <ModalPickerPeriod
        visible={showModalPickerPeriod}
        onClose={() => setShowModalPickerPeriod(false)}
        handleSearch={handleSearchBookByPeriod}
      />
    </S.Container>
  );
};

export default Home;
