import { useContext } from "react";
import  BookContext  from "../../Context/BookContext";




const Home = () => {
const {readBooks,setReadBooks} = useContext(BookContext);
    return (
        <div>
            <h1>Home Pages</h1>
            <p>{readBooks}</p>
           
        </div>
    );
};

export default Home;