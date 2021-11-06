import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { useToast } from "react-native-toast-notifications";
import api from "../services/api";

export type BookFavorite = {
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
} & BookFavorite;

export type BookFavoritesContextData = {
  bookFavorites: BookFavorite[];
  addBookFavorite: (book: BookDetailsProps) => Promise<void>;
  removeBookFavorite: (book: BookDetailsProps) => Promise<void>;
};

const BookFavoritesContext = createContext<BookFavoritesContextData>(
  {} as BookFavoritesContextData
);

const BookFavoritesProvider: React.FC = ({ children }) => {
  const toast = useToast();

  const [bookFavorites, setBookFavorites] = useState<BookFavorite[]>([]);

  const addBookFavorite = useCallback(
    async (book: BookFavorite) => {
      const bookFavoritesTemp = [...bookFavorites, book];

      setBookFavorites(bookFavoritesTemp);

      await AsyncStorage.setItem(
        "favorites:books",
        JSON.stringify(bookFavoritesTemp)
      );

      toast.show("Livro adicionado aos favoritos", {
        type: "success",
      });
    },
    [bookFavorites]
  );
  const removeBookFavorite = useCallback(
    async (book: BookFavorite) => {
      const bookFavoritesTemp = bookFavorites.filter((b) => b.id !== book.id);

      setBookFavorites(bookFavoritesTemp);

      await AsyncStorage.setItem(
        "favorites:books",
        JSON.stringify(bookFavoritesTemp)
      );

      toast.show("Livro removido dos favoritos");
    },
    [bookFavorites]
  );

  useEffect(() => {
    async function getFavoritesBooks() {
      const booksFavoritesStorage = await AsyncStorage.getItem(
        "favorites:books"
      );

      if (booksFavoritesStorage) {
        const booksFavoritesParse = JSON.parse(booksFavoritesStorage);

        setBookFavorites(booksFavoritesParse);
      }
    }

    getFavoritesBooks();
  }, []);

  return (
    <BookFavoritesContext.Provider
      value={{
        bookFavorites,
        addBookFavorite,
        removeBookFavorite,
      }}
    >
      {children}
    </BookFavoritesContext.Provider>
  );
};

export { BookFavoritesProvider, BookFavoritesContext };
