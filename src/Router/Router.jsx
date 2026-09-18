import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import RootLayout from "../Layout/RootLayout";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import ErrorPage from "../ErrorPage/ErrorPage";


 const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      errorElement: <ErrorPage/>,
      children:[
        {
            index:true,
            Component:Home,
        },
        {
          path:'listed-books',
          Component:ListedBooks
        }
      ]
     
      
    },
   
  ]);




export default router;
