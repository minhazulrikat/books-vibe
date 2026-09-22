import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import {
  BookDetails,
  Home,
  ListedBooks,
  PagesToRead,
} from "../lazyLoadPages/LazyLoadPages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/booksData.json").then((res) => res.json()),
      },
      {
        path: "listed-books",
        Component: ListedBooks,
      },
      {
        path: "book-details/:id",
        Component: BookDetails,
        loader: async ({ params }) => {
          const res = await fetch("/booksData.json");

          const bookData = await res.json();

          const expectedBook = bookData.find(
            (book) => book.bookId === Number(params.id),
          );
          if (!expectedBook) {
            throw new Response("Book Not Found", {
              status: 404,
            });
          }
          return expectedBook;
        },
      },
      {
        path: "pages-to-read",
        Component: PagesToRead,
      },
    ],
  },
]);

export default router;
