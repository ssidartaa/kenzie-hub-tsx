import { Routes, Route, Navigate } from "react-router-dom";

import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Login from "../Pages/Login";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
};

export default RoutesMain;
