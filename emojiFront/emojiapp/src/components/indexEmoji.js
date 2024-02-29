import { useState } from "react";
import SearchBar from "./Search/searchBar";
import SearchResult from "./Search/searchResult";

const Index = () =>{
    const [valueEmoji, setValueEmoji] = useState('weather');
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(current => !current);
    }

    return ( 
        <div  className={`App ${darkMode?"darkbg":""}`}>
      <header className="hero">
          <h3>Busca tu Emoji favorito...</h3>
      </header>
        <div>
        <SearchBar setValueEmoji={setValueEmoji} toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        <SearchResult valueEmoji={valueEmoji} darkMode={darkMode}/>
        </div>
    </div>
  );
  }
  
  export default Index