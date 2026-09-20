import { useContext } from "react";
import { useLoaderData } from "react-router";
import BookContext from "../../Context/BookContext";
import { toast } from "react-toastify";

const BookDetails = () => {
  const expectedBook = useLoaderData();
  const { readBooks, setReadBooks , wishList, setWishList, } = useContext(BookContext);
  const isExistedAtReadList = readBooks.some(
    (readBook) => readBook.bookId === Number(expectedBook.bookId),
  );
  const isExistedAtWishList = wishList.some(
    (wishBook) => wishBook.bookId === Number(expectedBook.bookId),
  );

  const {
    bookName,
    author,
    image,
    rating,
    review,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const handleReadList = () => {
    if(isExistedAtReadList){
      toast.error("This Book is already existed")
    }
    else{
      setReadBooks([...readBooks,expectedBook]);
      if(isExistedAtWishList){
        setWishList(wishList.filter((wishListBook)=> wishListBook.bookId !== expectedBook.bookId));
      }
      toast.success(`${bookName} is added to the Wish List`)
    }
  };
  const handleWishList = () => {
    if(isExistedAtWishList){
      toast.error("This Book is already existed")
      return;
    }else if(isExistedAtReadList){
      toast.error("This Book is already at Read List");
      return;
    }
    else{
      setWishList([...wishList,expectedBook]);
      toast.success(`${bookName} is added to the Wish List`)
    }
  };


  return (
    <div className="flex justify-between my-15 items-start container mx-auto px-4 gap-12">
      <div className="flex-4 flex justify-center items-center bg-base-300 p-15 md:p-18 rounded-xl ">
        <img src={image} alt={bookName} className=" w-auto object-contain h-100" />
      </div>
      <div className="flex-5">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold">{bookName}</h2>
          <p className="text-lg">By: {author}</p>
        </div>
        <div className="divider"></div>
        {/* divider */}
        <div className="space-y-4">
          <p className="text-xl">{category}</p>
        </div>
        <div className="divider"></div>
        {/* divider */}
        <div className="space-y-6">
          <p className="text-base">
            {" "}
            <span className="font-bold">Review: </span> {review}
          </p>
          <p className="flex gap-4 items-center">
            <span className="font-bold">Tag:</span>
            {tags.map((tag, ind) => {
              return (
                <span key={ind} className="badge badge-soft badge-success">
                  {tag}
                </span>
              );
            })}
          </p>
        </div>
        <div className="divider"></div>
        {/* divider */}
        <div className="space-y-6">
          <div className="space-y-4 max-w-4/5">
            <p className="flex justify-between items-center">
              Number of page: <span className="font-bold">{totalPages}</span>
            </p>
            <p className="flex justify-between items-center">
              Publisher: <span className="font-bold">{publisher}</span>
            </p>
            <p className="flex justify-between items-center">
              Year of Publishing:{" "}
              <span className="font-bold">{yearOfPublishing}</span>
            </p>
            <p className="flex justify-between items-center">
              Rating: <span className="font-bold">{rating}</span>
            </p>
          </div>
        </div>
        <div className="divider"></div>
        {/* divider */}
        <div className="space-x-4">
          <button onClick={handleReadList} className="btn btn-outline">
            Add to ReadList
          </button>
          <button onClick={handleWishList} className="btn btn-info">Add to WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
