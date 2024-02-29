import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Index from './components/indexEmoji';
import NavBarIndex from './components/Nav/nav';
import Animated from './components/Pages/animated';

function App() {

 return (
    <div>
      <BrowserRouter>
      <NavBarIndex />
        <Routes >
          <Route path="/" element={<Index />} />
          <Route path="/animated" element={<Animated />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
