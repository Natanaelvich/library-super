import { MaterialIcons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Keyboard, RefreshControl } from "react-native";
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
  const theme = useTheme();

  const {
    books,
    results,
    loading,
    loadingPagination,
    getBooks,
    getBooksPagination,
    handleSearchBook,
    handleSearchBookByPeriod,
  } = useBooks();

  const [querySearch, setQuerySearch] = useState("");
  const [showModalPickerPeriod, setShowModalPickerPeriod] = useState(false);
  const [initialYear, setInitialYear] = useState("");
  const [finalYear, setFinalYear] = useState("");

  function handleOpenDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  function handleNavigateToBookDetails(book: Book) {
    navigation.navigate("BookDetails", { bookId: book.id });
  }

  function clearFilters() {
    setQuerySearch("");
    setInitialYear("");
    setFinalYear("");

    getBooks()
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

          {(!!querySearch ||
            !!initialYear ||
            !!finalYear) && (
              <S.TextUnderline onPress={clearFilters}>
                Limpar Filtros
              </S.TextUnderline>
            )}

          {results > 0 && <S.TextResults>{results} resultados</S.TextResults>}
        </S.WrapperRow>
      </S.Header>

      {loading ? (
        <ActivityIndicator
          animating={loading}
          size="large"
          color={theme.colors.primary}
        />
      ) : (
        <>
          <S.ListBooks
            data={books}
            keyExtractor={(item) => item.id}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={() => {
                  getBooks();
                }}
              />
            }
            renderItem={({ item }) => (
              <CardBook
                onPress={() => handleNavigateToBookDetails(item)}
                key={item.id}
                book={item}
              />
            )}
            onEndReachedThreshold={0}
            onEndReached={() => {
              if (!loadingPagination) {
                getBooksPagination(querySearch, initialYear, finalYear);
              }
            }}
            ListFooterComponent={() => (
              <S.WrapperLoadingPagination>
                {loadingPagination && (
                  <ActivityIndicator
                    animating={loadingPagination}
                    size="large"
                    color={theme.colors.primary}
                  />
                )}
              </S.WrapperLoadingPagination>
            )}
          />
        </>
      )}

      <ModalPickerPeriod
        visible={showModalPickerPeriod}
        onClose={() => setShowModalPickerPeriod(false)}
        handleSearch={handleSearchBookByPeriod}
        initialYear={initialYear}
        finalYear={finalYear}
        setFinalYear={setFinalYear}
        setInitialYear={setInitialYear}
      />
    </S.Container>
  );
};

export default Home;
