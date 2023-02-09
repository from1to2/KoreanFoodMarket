import Counter from './components/Counter';
import './App.css';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartList from './components/CartList';
import Login from './components/Login';
import UserRedirects from './components/UserRedirects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/'element={<ProductList/>}/>
        <Route path='/cart'element={<CartList/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/product/:id'element={<UserRedirects/>}/>
          {/* <Counter/> */}
      </Routes>
        
      </BrowserRouter>
     
    </div>
  );
}

export default App;
