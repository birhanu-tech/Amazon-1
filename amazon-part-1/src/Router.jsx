import React from 'react'
import {
  BrowserRouter as Router,Routes,Route,redirect,} from "react-router-dom";
import Landing from './pages/Landing/Landing';
// import Auth from "./Pages/Auth/Auth";
import Payment from './pages/payment/Payment';
import Orders from './pages/orders/Orders';
import Cart from './pages/cart/Cart';
import Signup from './pages/auth/Signup';
import Result from './pages/results/Result';
import ProductDetail from './pages/productdetail/ProductDetail';

// import ProductDetail from "../Pages/ProductDetail/ProductDetail";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

// const stripePromise = loadStripe(
//   "pk_test_51OU6YoIrgvX7vjwlwFwZFFmBbuXRo77ewG49UZBndLITKEtINgOsTCmKbx4dvva5opJQYlTggPJ3SuK3HpprL1Pj006REMjwGf"
// );

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
        {/* <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default Routing