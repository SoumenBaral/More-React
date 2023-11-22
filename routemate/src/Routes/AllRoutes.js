import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ProductsList from '../pages/Products/ProductsList';
import ProductDetails from '../pages/Products/ProductDetails';
import  Contact  from '../pages/Contact/Contact';
import ContactIn from '../pages/Contact/ContactIn';
import ContactEuro from '../pages/Contact/ContactEuro';
import ContactUSA from '../pages/Contact/ContactUSA';
import Admin from '../pages/Admin';
import NotFound from '../pages/NotFound';

export const AllRoutes = () => {
    let user = false
  return (
    <>
        <Routes>
            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='products' element={<ProductsList></ProductsList>}></Route>
            <Route path='products/:id' element={<ProductDetails></ProductDetails>}></Route> 

            <Route path='/contact' element={<Contact></Contact>}>
                <Route path="in"  element={<ContactIn></ContactIn>}></Route>
                <Route path='euro'  element={<ContactEuro></ContactEuro>}></Route>
                <Route path='usa'  element={<ContactUSA></ContactUSA>}></Route>
            </Route> 


            <Route path='/admin' element ={user?<Admin></Admin> : <Navigate to={'/products'}></Navigate>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
    
    </>
  )
}
