import { BrowserRouter, Route, Routes } from "react-router";

import Login from "@pages/Login";
import Signup from "@pages/Signup";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
