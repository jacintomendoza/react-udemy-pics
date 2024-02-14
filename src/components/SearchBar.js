import React from "react";
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleOnChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter some text</label>
        <input value={term} onChange={handleOnChange} />
        <p>{term}!!</p>
      </form>
    </div>
  );
}

const useState = React.useState;

export default SearchBar;
