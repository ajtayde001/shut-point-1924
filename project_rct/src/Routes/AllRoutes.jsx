import React from 'react'
import { Route, Routes } from "react-router-dom";
import MenPage from '../pages/MenPage';
import WinterPage from '../pages/WinterWerPage';
import Login from '../pages/Login';
import MainPage from '../pages/MainPage';
import SalePage from '../pages/SalePage';
import JeansPage from '../pages/JeansPage';
import WomenPage from '../pages/WomenPage';
import Navbar from './Navbar';
import Footer from '../pages/Footer';
import ProductPAge from '../pages/ProductPAge';
import SingUp from '../pages/SingUp';
import CardPage from '../pages/CardPage';
import Checkout from '../pages/Checkout';
import FavData from '../pages/FavraitePage';
import PrivateRoute from './PrivateRoute';
const AllRoutes = () => {
    return (
        <div>
          <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/men" element={
                 <PrivateRoute><MenPage /></PrivateRoute>}></Route>
                <Route path="/products/:user_id" element={<ProductPAge />}></Route>
                <Route path="/women" element={ <PrivateRoute><WomenPage /></PrivateRoute>}></Route>
                <Route path="/winter" element={<PrivateRoute><WinterPage /></PrivateRoute>}></Route>
                <Route path="/sale" element={<PrivateRoute><SalePage /></PrivateRoute>}></Route>
                <Route path="/jeans" element={<PrivateRoute><JeansPage /></PrivateRoute>}></Route>
                <Route path="/_card" element={<CardPage />}></Route>
                <Route path="/_fav" element={<FavData />}></Route>
                <Route path="/checkout/:total" element={<Checkout />}></Route>
            
                <Route path="/login" element={<Login />}></Route>
                <Route path="/singup" element={<SingUp />}></Route>
            </Routes>
          
        </div>
    )
}

export default AllRoutes