import logo from './logo.svg';
import './css/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookCreate from './pages/BookCreate';
import BookDetail from './pages/BookDetail';
import About from './pages/About';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home}/>
      <Route path="/create" exact component={BookCreate}/>
      <Route path="/details/:id" exact component={BookDetail}/>
      <Route path="/about" exact component={About}/>
    </BrowserRouter>
  );
}

export default App;
