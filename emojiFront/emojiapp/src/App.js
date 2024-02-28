import './App.css';
import { useState } from "react";
import Index from './components/indexEmoji';
import NavBarIndex from './components/Nav/nav';
import SearchBar from './components/Search/searchBar';
import SearchResultsList from './components/Search/searchResults';

function App() {

  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <NavBarIndex />
      <Index />
      <SearchBar setResults={setResults}/>
      {results && results.length > 0 && <SearchResultsList results={results} />}
    </div>
  );
}

export default App;
