import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import OrderDetail from "./components/OrderDetail";
import OrderHistory from "./components/OrderHistory/index";
import PlaceOrder from "./components/PlaceOrder";
import AccountDetails from "./components/AccountDetails";

function App() {
    // Collapse isOpen State
    const [isOpen, setIsOpen] = React.useState(false);

    return (

        < Router >
            <div className="App">

                <Header />
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/order-history' element={< OrderHistory />}></Route>
                    <Route exact path='/order-detail' element={< OrderDetail />}></Route>
                    <Route exact path='/place-order' element={< PlaceOrder />}></Route>
                    <Route exact path='/my-account' element={< AccountDetails />}></Route>

                </Routes>
                <Footer />
            </div>
        </Router >
    );
}

export default App;
