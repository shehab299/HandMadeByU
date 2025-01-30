import { BrowserRouter, Route, Routes } from "react-router";

import Login from "@pages/Login";
import Signup from "@pages/Signup";
import Home from "@pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
