import React from 'react'
import { BrowserRouter, Routes, Route }
  from 'react-router-dom'
  import Landing from "./Pages/Landing/Landing"
  import Auth from "./Pages/Auth/Auth";
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Results from './Pages/Results/Results'
import ProductDetail from "./Pages/ProductDetail/ProductDetail"
import Cart from './Pages/Cart/Cart';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
const stripePromise = loadStripe(
  "pk_test_51QR1v3Jalni1ZU8HMcxkq8uFOQu3D8cc4eo53BoYjGm7et9ohgwB3D5P5Af0TmcVoj1kLdaVUIBN5TtMSCq5PDOZ00OxGvSIRo"
);
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"You must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You must log in to access your orders"}
              redirect={"/orders"}
            >
              <Orders/>
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router