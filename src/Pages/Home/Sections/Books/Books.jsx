import { Link } from "react-router";
import Card from "../../../../Components/ui/Card";

const Books = ({ booksData }) => {

  return (
    <section>
      <div className="container mx-auto px-4 md:my-15 my-10">
        <h2 className="text-4xl font-semibold text-center mb-9">Books</h2>
        {/* section heading */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {booksData.map((book) => {
            return <Link key={book.bookId} to={`book-details/${book.bookId}`}><Card book={book}></Card></Link>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Books;
