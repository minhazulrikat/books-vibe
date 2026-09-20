import { useState } from "react";
import BookContext from "./BookContext";

const BookProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleSorting = (sortBy) => {
     setReadBooks ((prevReadbooks)=> [...prevReadbooks].sort((a,b)=> b[sortBy] - a[sortBy]));
    setWishList ((prevWishListBooks)=> [...prevWishListBooks].sort((a,b)=> b[sortBy] - a[sortBy]));
    
  };

  return (
    <BookContext.Provider
      value={{ readBooks, setReadBooks, wishList, setWishList , handleSorting }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
