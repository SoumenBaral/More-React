import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
        <main>
          <Routes>
            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='products' element={<ProductsList></ProductsList>}></Route>
            <Route path='products/001' element={<ProductDetails></ProductDetails>}></Route>
            <Route path='contact' element={<Contact></Contact>}></Route> 
          </Routes>
        </main>
        
      <Footer></Footer>          

    </div>
  );
}

export default App;
