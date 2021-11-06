import { MaterialIcons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Keyboard } from "react-native";
import CardBook from "../../Components/CardBook";
import ModalPickerPeriod from "../../Components/ModalPickerPeriod";
import api from "../../services/api";

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

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [querySearch, setQuerySearch] = useState("");
  const [showModalPickerPeriod, setShowModalPickerPeriod] = useState(false);
const [results, setResults] = useState(0)

  function handleOpenDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  function handleNavigateToBookDetails(book: Book) {
    navigation.navigate("BookDetails", { bookId: book.id });
  }

  async function handleSearchBook() {
    try {
      Keyboard.dismiss();

      setLoading(true);
      const response = await api.get("/api/Livros", {
        params: {
          Busca: querySearch,
        },
      });

      setBooks(response.data.items);
      setResults(response.data.totalCount)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearchBookByPeriod(
    initialYear: string,
    finalYear: string
  ) {
    try {
      Keyboard.dismiss();
      setShowModalPickerPeriod(false);

      setLoading(true);
      const response = await api.get("/api/Livros", {
        params: {
          AnoInicial: initialYear,
          AnoFinal: finalYear,
        },
      });

      setBooks(response.data.items);
      setResults(response.data.totalCount)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function getBooks() {
      try {
        setLoading(true);
        const response = await api.get("/api/Livros");

        setBooks(response.data.items);
        setResults(response.data.totalCount)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getBooks();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.ButtonMenu onPress={handleOpenDrawer}>
          <MaterialIcons name="menu" size={24} />
        </S.ButtonMenu>

        <S.TextSmall>Bem vindo</S.TextSmall>
        <S.TextLarge>Busque livros pelo titulo autor ou ISBN</S.TextLarge>

        <S.WrapperFormSearch>
          <S.TextInput
            placeholder="Digite sua busca aqui..."
            value={querySearch}
            onChangeText={setQuerySearch}
          />

          <S.ButtonSearch onPress={handleSearchBook} disabled={loading}>
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

{results > 0 && (

    <S.TextResults>
{results} resultados
          </S.TextResults>
              )}
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
