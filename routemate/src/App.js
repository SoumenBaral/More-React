import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Admin from './components/Admin';
import NotFound from './components/NotFound';
import ContactIn from './components/ContactIn';
import ContactEuro from './components/ContactEuro';
import ContactUSA from './components/ContactUSA';

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
                <Route path="'in'"  Component={<ContactIn></ContactIn>}></Route>
                <Route path='euro'  Component={<ContactEuro></ContactEuro>}></Route>
                <Route path='usa'  Component={<ContactUSA></ContactUSA>}></Route>
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
