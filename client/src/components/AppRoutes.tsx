import { BrowserRouter, Route, Routes } from "react-router";

import Login from "@pages/Login";
import Signup from "@pages/Signup";
import Home from "@pages/Home";

import ProtectedRoute from "@components/ProtectedRoute";
import AppLayout from "@components/AppLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index path="/" element={<Home />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
