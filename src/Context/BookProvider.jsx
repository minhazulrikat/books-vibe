import {  useState } from "react";
import BookContext from "./BookContext";

const BookProvider = ({ children }) => {
  const getReadListFromLocalStorage = (key)=>{
   return JSON.parse(localStorage.getItem(key))||[];
  }
  const [readBooks, setReadBooks] = useState(()=>getReadListFromLocalStorage('readBookList'));
  const [wishList, setWishList] = useState(()=>getReadListFromLocalStorage('wishListData'));

  const setDataToLocalStorage = (key,data)=>{
    localStorage.setItem(key,JSON.stringify(data));
  }
  const handleSorting = (sortBy) => {
     setReadBooks ((prevReadbooks)=> [...prevReadbooks].sort((a,b)=> b[sortBy] - a[sortBy]));
    setWishList ((prevWishListBooks)=> [...prevWishListBooks].sort((a,b)=> b[sortBy] - a[sortBy]));
    
  };

  

  return (
    <BookContext.Provider
      value={{ readBooks, setReadBooks, wishList, setWishList , handleSorting,setDataToLocalStorage }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
