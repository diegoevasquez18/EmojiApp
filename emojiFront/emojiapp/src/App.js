import './App.css';
import Index from './components/indexEmoji';
import NavBarIndex from './components/Nav/nav';
import Component from './components/Search/searchBar';
import Api from './components/prueba';

function App() {
  return (
    <div className="App">
      <NavBarIndex />
      <Index />
      <Component />
      <Api />
    </div>
  );
}

export default App;
