import { useContext } from "react";
import {BookFavoritesContext,BookFavoritesContextData } from "../context/booksFavoritesContext";

export default function useFavoritesBooks(): BookFavoritesContextData {
  const context = useContext(BookFavoritesContext);

  return context;
}
