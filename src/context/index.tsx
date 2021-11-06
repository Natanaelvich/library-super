import React from "react";

import { BooksProvider } from "./booksContext";
import { BookFavoritesProvider } from "./booksFavoritesContext";
import { ThemeProvider } from "./themeContext";

const AppProvider: React.FC = ({ children }) => (
  <BooksProvider>
    <BookFavoritesProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </BookFavoritesProvider>
  </BooksProvider>
);

export default AppProvider;
