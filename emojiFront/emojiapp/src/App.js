import './App.css';
import { useState } from "react";
import Index from './components/indexEmoji';
import NavBarIndex from './components/Nav/nav';
import SearchBar from './components/Search/searchBar';
import SearchResult from "./components/Search/searchResult"
import Item from './components/Cards/emojiCard';

function App() {

  const [valueEmoji, setValueEmoji] = useState('smile');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(current => !current);
  }

  return (
    <div className={`App ${darkMode?"darkbg":""}`}>
      <NavBarIndex />
      <Index />
      <SearchBar setValueEmoji={setValueEmoji} toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <SearchResult valueEmoji={valueEmoji} darkMode={darkMode}/>
    </div>
  );
}

export default App;
