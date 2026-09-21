import { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BookContext from "../../Context/BookContext";
import ListedCard from "../../Components/ui/ListedCard";
import EmptyList from "./EmptyList/EmptyList";
const ListedBooks = () => {
  const { readBooks, wishList, handleSorting,sortAppliedBy } = useContext(BookContext);
  return (
    <section className="container mx-auto px-4 py-15 space-y-6">
      <div className="py-6 bg-base-200 rounded-xl">
        {" "}
        <h1 className="text-center font-bold text-4xl">Books</h1>
      </div>

      {/* dropdown button start here  */}
      <div className="flex justify-center items-center">
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn btn-success m-1">
            Sort By ({sortAppliedBy.length===0?'None': sortAppliedBy})
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => handleSorting("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSorting("totalPages")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => handleSorting("yearOfPublishing")}>
              <a>Publisher Year</a>
            </li>
          </ul>
        </div>
      </div>

      {/* ------- dropdown end here ------------ */}

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wish List Books</Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-4">
            {readBooks.length === 0 ? (
             <div className="w-full" > <EmptyList title={"Your Read List Is Empty"} paragraph={" You haven't added any books to your read list yet. Explore the collection and start building your reading list. "} /></div>
            ) : (
              readBooks.map((book) => {
                return <ListedCard key={book.bookId} book={book}></ListedCard>;
              })
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="space-y-4">
            {wishList.length === 0 ? (
             <div className="w-full" > <EmptyList title={'Your Wishlist Is Empty'} paragraph={" You haven't added any books to your wishlist yet. Discover books you love and save them for later. "} /></div>
            ) : (
              wishList.map((book) => {
                return <ListedCard key={book.bookId} book={book}></ListedCard>;
              })
            )}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default ListedBooks;
