import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home/index";
import OrderDetail from "./components/OrderDetail";
import OrderHistory from "./components/OrderHistory/index";
import PlaceOrder from "./components/PlaceOrder";
import AccountDetails from "./components/AccountDetails";


const MyRoutes = ({ props }) => {
    return (
      

        < Router >
        <div className="App">

        <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/order-history' element={< OrderHistory />}></Route>
                    <Route exact path='/order-detail' element={< OrderDetail />}></Route>
                    <Route exact path='/place-order' element={< PlaceOrder />}></Route>
                    <Route exact path='/my-account' element={< AccountDetails />}></Route>

                </Routes>
        </div>
        </Router >

    );
};
export default MyRoutes;