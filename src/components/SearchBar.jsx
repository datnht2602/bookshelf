import { useEffect, useState } from 'react'

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        // Here you can handle the search logic, e.g., updating the query state in App.jsx
        console.log("Search Term:", searchTerm);
        onSearch(searchTerm);
        setSearchTerm(""); // Clear the input after search
    }
    return (
        <form onSubmit={handleSubmit} className="d-flex">
            <input className="form-control me-2"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for books"
            value={searchTerm}
            />
        </form>
    )
}

export default SearchBar;