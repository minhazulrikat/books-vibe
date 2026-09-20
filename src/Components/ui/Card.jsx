
const Card = ({ book }) => {
  const { bookName, image, rating, category } = book;

  return (
    <div
    
      className="card bg-base-100 shadow-sm cursor-pointer"
    >
      <figure>
        <img
          className="object-contain h-80 w-auto rounded-xl"
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <div className="divider"></div>
        <div className="card-actions justify-end">
          <p>{category}</p>
          <p className="text-right">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
