import { useState } from "react";
import BookContext from "./BookContext";


const BookProvider = ({children}) => {
  const [readBooks, setReadBooks] = useState([]);
  return (
    <BookContext.Provider value={{readBooks,setReadBooks}}>
{children}
    </BookContext.Provider>

  );
};

export default BookProvider;