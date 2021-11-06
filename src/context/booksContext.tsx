import React, { createContext, useState } from "react";
import { Keyboard } from "react-native";
import api from "../services/api";

export type Book = {
  ano: number;
  autor: string;
  editora: string;
  id: string;
  isbn: string;
  titulo: string;
};

export type BookDetailsProps = {
  idioma: "string";
  peso: 0;
  comprimento: 0;
  largura: 0;
  altura: 0;
} & Book;

export type BooksContextData = {
  books: Book[];
  loading : boolean;
  results : number;
  getBooks: () => Promise<void>;
  handleSearchBook: (querySearch: string) => Promise<void>;
  handleSearchBookByPeriod: (
    initialYear: string,
    finalYear: string
  ) => Promise<void>;
};

const BooksContext = createContext<BooksContextData>({} as BooksContextData);

const BooksProvider: React.FC = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(0);

  async function getBooks() {
    try {
      setLoading(true);
      const response = await api.get("/api/Livros");

      setBooks(response.data.items);
      setResults(response.data.totalCount);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearchBook(querySearch: string) {
    try {
      Keyboard.dismiss();

      setLoading(true);
      const response = await api.get("/api/Livros", {
        params: {
          Busca: querySearch,
        },
      });

      setBooks(response.data.items);
      setResults(response.data.totalCount);
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

      setLoading(true);
      const response = await api.get("/api/Livros", {
        params: {
          AnoInicial: initialYear,
          AnoFinal: finalYear,
        },
      });

      setBooks(response.data.items);
      setResults(response.data.totalCount);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        loading,
        results,
        getBooks,
        handleSearchBook,
        handleSearchBookByPeriod,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export { BooksProvider, BooksContext };
