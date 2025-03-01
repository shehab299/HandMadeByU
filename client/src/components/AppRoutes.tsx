import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "@pages/Login";
import Signup from "@pages/Signup";
import Home from "@pages/Home";

import ProtectedRoute from "@components/ProtectedRoute";
import AppLayout from "@components/AppLayout";
import CreateShopForm from "@features/shop/createShopForm";
import ShopProfile from "@features/shop/shopProfile";
import ProductView from "@features/products/ProductView";
import { AuthProvider } from "context/AuthContext";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AuthProvider>
                <AppLayout />
              </AuthProvider>
            </ProtectedRoute>
          }
        >
          <Route index path="/" element={<Home />} />
          <Route index path="/create-shop" element={<CreateShopForm />} />
          <Route index path="/shop/:id" element={<ShopProfile />} />
          <Route index path="/shop/:shopId/product/:productId" element={<ProductView />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
