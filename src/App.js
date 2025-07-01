import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Layout from './Layout';
import useGet from "./hooks/useGet";
import { useEffect } from 'react';
import PreLoader from "./components/Preloader";
import { useDispatch, useSelector } from 'react-redux';
import { setAllCategories, setAllProducts } from './store/product/productSlice';
import Checkout from './screens/Checkout';
import ScrollToTop from './components/ScrollToTop';
import Login from "./screens/Login";
import Register from './screens/Register';
import OrderDetails from './screens/OrderDetails';
import axios from 'axios';
import { setUserAddress } from './store/user/userSlice';
import MyOrders from './screens/MyOrders';
import NotFound from './components/NotFound';
import Protected from './components/Protected';
import AdminPanel from './screens/AdminPanel';
import SingleOrderDetails from './screens/SingleOrderDetails';
import Catering from './screens/Catering';
import CatProducts from './components/CatProducts';
import GiftCards from './screens/GiftCards';
import BluePlate from './screens/BluePlate';
import PartyTray from './screens/PartyTray';
import Texas from './components/Texas';
import Lakejackson from './components/Lakejackson';
import Needville from './components/Needville';
import Contact from './components/Contact';

function App() {

  const { data: categories } = useGet("/categories.php");
  const { data: products, loading: prodLoading } = useGet("/products.php");
  const { currentUser, isGuest, activeProductCat } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (categories && products) {
      dispatch(setAllProducts(products));
      dispatch(setAllCategories(categories));
      console.log(products)
      console.log(categories)

    }
  }, [products, categories, dispatch]);

  useEffect(() => {
    (async () => {
      if (currentUser && !isGuest) {
        try {
          const latestAddresses = await axios.get(`${process.env.REACT_APP_BASE_URL}/addresse.php?cid=${currentUser.id}&_=${new Date().getTime()}`);
          dispatch(setUserAddress(latestAddresses.data));
        } catch (error) {
          console.log(error);
        }
      }
    })()
  }, [currentUser, dispatch, isGuest]);

  if (prodLoading) {
    return <PreLoader />
  }


  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={currentUser && currentUser.aid === 1 ? <AdminPanel /> : <Layout />}>
          <Route index element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="catering" element={<Catering />} />
          <Route path="partytray" element={<PartyTray />} />
          <Route path="blue-plate-special" element={<BluePlate />} />
          <Route path="productlisting" element={activeProductCat ? <CatProducts /> : <Navigate to="/" />} />
          <Route path="gift-cards" element={<GiftCards />} />

          {currentUser &&
            <>
              <Route path="myorders" element={<Protected component={<MyOrders />} />} />
            </>
          }
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="orderdetails/:id" element={<OrderDetails />} />
        {currentUser && currentUser.aid === 1 &&
          <>
            <Route path="singleorder/:id" element={<SingleOrderDetails />} />
          </>
        }
        <Route path='*' element={<NotFound />} />
        <Route path="texas" element={<Texas />} />
        <Route path="lakejackson" element={<Lakejackson />} />
        <Route path="needville" element={<Needville />} />
        <Route path="contact" element={<Contact />} />


      </Routes>
    </>
  );
}

export default App;
