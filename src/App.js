import React from 'react'
import Header from './components/header';
import Footer from './components/footer';
import Warning from './components/warning';
import Search from './components/searchblock';
import Compare from './components/compare';
import Deals from './components/dealswrapper';
import PopularLocation from './components/popularlocation';
import PopularQuestions from './components/popular_questions';
import mainReservation from './components/reservation/mainReservation';
import rezervasyonDetay from './components/reservation/rezervasyonDetay';
import hakkimizda from './components/hakkimizda';
import basariliRezervasyon from './components/reservation/basarili_rezervasyon';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
function Home() {
    return (
        <div>
            <Route path="/" component={Header}></Route>
            <Route path="/reservation" component={mainReservation} exact />
            <Route path="/rezervasyondetay" component={rezervasyonDetay} exact />
            <Route path="/hakkimizda" component={hakkimizda} exact />
            <Route path="/basarili_rezervasyon" component={basariliRezervasyon} exact />
            <Route path="/" component={Warning} exact></Route>
            <Route path="/" component={Search} exact></Route>
            <Route path="/" component={Compare} exact></Route>
            <Route path="/" component={Deals} exact></Route>
            <Route path="/" component={PopularLocation} exact></Route>
            <Route path="/" component={PopularQuestions} exact></Route>
            <Route path="/" component={Footer}></Route>
        </div>
    )
}

export default Home
