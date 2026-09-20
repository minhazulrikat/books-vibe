import { Link, useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const  expectedBook = useLoaderData();
  console.log(expectedBook);
  const {bookName,author,image,rating, review} = expectedBook;

  return (
    <div>
      <h1>{bookName}</h1>
      <p>{author}</p>
      <Link className="btn btn-primary" to={'/'}>back to home</Link>
    </div>
  );
};

export default BookDetails;
