import { Route, Routes } from 'react-router-dom';
import './App.css';
import BooksContainer from './BooksContainer';
import Categories from './Categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BooksContainer />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
