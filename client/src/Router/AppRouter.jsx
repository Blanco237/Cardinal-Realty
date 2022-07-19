import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Header from '../components/Header';
import Footer from '../components/Footer';


import { ROUTES } from './routes'

const AppRouter = () => {
  return (
    <Router>
        <><Header /></>
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.LOGIN} element={<Login />}/>
            <Route path={ROUTES.REGISTER} element={<Register />}/>
        </Routes>
        <><Footer /></>
    </Router>
  )
}

export default AppRouter