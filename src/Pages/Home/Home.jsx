import { useLoaderData } from "react-router";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Books from "./Sections/Books/Books";

const Home = () => {
  const booksData = useLoaderData();
  
  return (
    <section >
      <HeroBanner></HeroBanner>
      <Books booksData={booksData}></Books>
    </section>
  );
};

export default Home;
