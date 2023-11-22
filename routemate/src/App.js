import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import ProductsList from './pages/Products/ProductsList';
import ProductDetails from './pages/Products/ProductDetails';
import Footer from './components/Footer';
import Contact from './pages/Contact/';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import ContactIn from './pages/Contact/ContactIn';
import ContactEuro from './pages/Contact/ContactEuro';
import ContactUSA from './pages/Contact/ContactUSA';

function App() {
  const user = false;
  return (
    <div className="App">
      <Header></Header>
      
        <main>
          <Routes>
            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='products' element={<ProductsList></ProductsList>}></Route>
            <Route path='products/:id' element={<ProductDetails></ProductDetails>}></Route> 
            {/* Makes our route dynamic by the using of :id that why we can create lots of route using on routes */}
            {/* just pass the parameter to vai route baby */}

            {/* we can write like this ....... */}
            {/* <Route path='contact/in'  Component={<ContactIn></ContactIn>}></Route>
            <Route path='contact/euro'  Component={<ContactEuro></ContactEuro>}></Route>
            <Route path='contact/usa'  Component={<ContactUSA></ContactUSA>}></Route> */}


            <Route path='/contact' element={<Contact></Contact>}>
                <Route path="in"  element={<ContactIn></ContactIn>}></Route>
                <Route path='euro'  element={<ContactEuro></ContactEuro>}></Route>
                <Route path='usa'  element={<ContactUSA></ContactUSA>}></Route>
            </Route> 


            <Route path='/admin' element ={user?<Admin></Admin> : <Navigate to={'/products'}></Navigate>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </main>
        
      <Footer></Footer>          

    </div>
  );
}

export default App;
