import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import useBooks from "./services/useBook";
import { useState } from "react";
import BookDetail from "./components/BookDetail";

function App() {

  const [ selectedBook, setSelectedBook ] = useState(null);
  const {books, loading, setSearchTerm} = useBooks('fiction');
  function handleSearch(term) {
    setSearchTerm(term);
    console.log("Search Term in App:", term);
  }

  function handleSeeMore(book) {
    setSelectedBook(book);
    console.log("Selected Book:", book);
  }

  function handleCloseModal() {
    setSelectedBook(null);
  }



  return (
    <>
      <NavBar onSearch={handleSearch} />
      {loading ? (
        <p className="placeholder-glow display-3 text-body-secondary">
          {" "}
          <span className="placeholder col-12">Loading</span>
        </p>
      ) : (
        <BookList books={books} onSeeMore={handleSeeMore}/>
      )}
      <Footer />
      {selectedBook && <BookDetail book={selectedBook} onClose={handleCloseModal} />}
    </>
  );
}

export default App;
