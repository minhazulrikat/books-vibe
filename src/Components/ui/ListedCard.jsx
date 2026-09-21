import { FaRegStar } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineFindInPage } from "react-icons/md";
import { Link } from "react-router";

const ListedCard = ({ book }) => {
  const { bookName, image, rating, category, tags, author,yearOfPublishing, totalPages,publisher,bookId} = book;
  return (
    <div className="card flex-row gap-6 bg-base-100 shadow-sm cursor-pointer p-6 ">
      <figure className="p-7 bg-base-200 rounded-xl">
        <img
          className="object-contain h-43 w-auto rounded-xl"
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="card-body p-0 gap-4">
       
        <div className="space-y-4">
          <h2 className="card-title text-2xl">{bookName}</h2>
          <p> By : {author}</p>
        </div>

         <div className="flex gap-4 items-center">
           <span className="font-bold">Tag : </span>
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-success badge-soft">
              {tag}
            </span>
          ))}
          <p className="text-base-content/70">Year of Publishing: {yearOfPublishing}</p>
        </div>
        <div className="flex gap-4 items-center justify-start">
          <div className="text-base-content/70 flex gap-1 items-center">
          <span> <FaRegCircleUser /></span>
          <span>Publisher: {publisher}</span>
          </div>
          <div className="text-base-content/70 flex gap-1 items-center">
          <span> <MdOutlineFindInPage /></span>
         <span> Page: {totalPages}</span>
          </div>
        </div>

        <div className="h-px border-t border-dashed border-gray-300"></div>
        <div className="card-actions gap-2">
         <span className="badge badge-info text-info badge-soft">Category: {category}</span>
         <span className="badge badge-warning text-warning-content badge-soft">Rating: {rating}</span>
         <Link to={`/book-details/${bookId}`} className="btn btn-xs rounded-full btn-success">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ListedCard;
