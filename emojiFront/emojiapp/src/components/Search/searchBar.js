import { useState } from "react";

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState(null)

    const fetchData = (value) => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>{
        console.log(json)
        const result = json.filter((user) =>{
          return value && user && user.name && user.name.toLowerCase().includes(value);
        });
        setResults(result);
      })
      
    };
    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };
  
    return (
      <input
        placeholder="Search Emoji"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    );
  }

export default SearchBar;