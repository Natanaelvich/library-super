import { useContext } from "react";
import { BooksContext, BooksContextData } from "../context/booksContext";

export default function useBooks(): BooksContextData {
  const context = useContext(BooksContext);

  return context;
}
