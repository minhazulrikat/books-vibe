import { lazy } from "react";


export const Home = lazy(()=> import("../Pages/Home/Home"));
export const ListedBooks = lazy(()=>import("../Pages/ListedBooks/ListedBooks"));
export const PagesToRead = lazy(()=>import("../Pages/PagesToRead/PagesToRead"));
export const BookDetails = lazy(()=>import("../Pages/BookDetails/BookDetails"));