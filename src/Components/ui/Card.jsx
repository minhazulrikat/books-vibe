import { FaRegStar } from "react-icons/fa";

const Card = ({ book }) => {
  const { bookName, image, rating, category, tags, author } = book;

  return (
    <div className="card h-full bg-base-100 shadow-sm cursor-pointer p-6 space-y-6">
      <figure className="py-8 bg-base-200 rounded-xl">
        <img
          className="object-contain h-41.5 w-auto rounded-xl"
          src={image}
          fetchPriority="high"
          alt={bookName}
        />
      </figure>
      <div className="card-body p-0 gap-4">
        <div className="flex gap-4 items-center">
{
  tags.map((tag,index) => <span key={index} className="badge badge-success badge-soft">{tag}</span> )
}
        </div>
       <div className="space-y-4">
         <h2 className="card-title text-2xl">{bookName}</h2>
        <p> By : { author}</p>
       </div>
        <div className="h-px border-t border-dashed border-gray-300"></div>
        <div className="card-actions justify-end">
          <p>{category}</p>
          <p className="text-right flex justify-end items-center gap-0.5">{rating} <span><FaRegStar/></span> </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
