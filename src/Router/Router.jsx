import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import RootLayout from "../Layout/RootLayout";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import ErrorPage from "../ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";

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
    ],
  },
]);

export default router;
