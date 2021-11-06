import React, { createContext, useCallback, useState } from "react";
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
  loading: boolean;
  loadingPagination: boolean;
  results: number;
  getBooks: () => Promise<void>;
  getBooksPagination: (querySearch: string,initialYear: string,
    finalYear: string) => Promise<void>;
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
  const [loadingPagination, setLoadingPagination] = useState(false);
  const [skipCount, setSkipCount] = useState(20);

  async function getBooks() {
    try {
      setLoading(true);
      setSkipCount(20)
      
      const response = await api.get("/api/Livros", {
        params: {
          MaxResultCount: 20,
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

  const getBooksPagination = useCallback(async (querySearch: string,initialYear: string,
    finalYear: string) => {
    try {
        console.log(skipCount)
      setLoadingPagination(true);
      const response = await api.get("/api/Livros", {
        params: {
          MaxResultCount: 20,
          SkipCount: skipCount,
          Busca: querySearch,
          AnoInicial: initialYear,
          AnoFinal: finalYear,
        },
      });

      setSkipCount(skipCount + 20);
      setBooks([...books, ...response.data.items]);
      setResults(response.data.totalCount);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingPagination(false);
    }
  }, [skipCount, books]);

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
        loadingPagination,
        results,
        getBooks,
        getBooksPagination,
        handleSearchBook,
        handleSearchBookByPeriod,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export { BooksProvider, BooksContext };
