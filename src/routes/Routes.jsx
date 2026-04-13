import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homePage/HomePage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/errorpage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";
import PagesToRead from "../pages/pagestoread/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/books",
        element: <Books></Books>
      },
      {
        path: "/booksDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json'),
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead></PagesToRead>,

      },
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);