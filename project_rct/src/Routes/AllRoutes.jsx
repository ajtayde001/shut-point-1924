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
const AllRoutes = () => {
    return (
        <div>
          <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/men" element={<MenPage />}></Route>
                <Route path="/products/:user_id" element={<ProductPAge />}></Route>
                <Route path="/women" element={<WomenPage />}></Route>
                <Route path="/winter" element={<WinterPage />}></Route>
                <Route path="/sale" element={<SalePage />}></Route>
                <Route path="/jeans" element={<JeansPage />}></Route>

            
                <Route path="/login" element={<Login />}></Route>
                <Route path="/singup" element={<SingUp />}></Route>
            </Routes>
            <Footer/>
        </div>
    )
}

export default AllRoutes