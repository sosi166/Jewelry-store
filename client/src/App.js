import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import ProductAbout from './components/ProductAbout/ProductAbout';
import Shop from './components/Shop/Shop';
import Contact from './components/Contact/Contact';
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShopAbout from './components/ShopAbout/ShopAbout';
import Delivery from './components/Delivery/Delivery';
import Footer from './components/Footer/Footer';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

function App() {

    return (
        <>
            <Nav />
            <BrowserRouter basename={baseUrl} >
                <Routes >
                    <Route exact path={baseUrl} element={<Shop />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/cart' element={<ShoppingCart />} />
                    <Route path='/shopabout' element={<ShopAbout />} />
                    <Route path='/delivery' element={<Delivery />} />
                    <Route path='/product/about/:id' element={<ProductAbout />} />
                    <Route path='*' element={<h1>Not Found</h1>} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}
export default App;
