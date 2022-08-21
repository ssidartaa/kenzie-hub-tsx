import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import LoadingPage from "../LoadingPage";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <LoadingPage />;

  return user ? <Outlet /> : <Navigate to="/" replace />;
};
export default ProtectedRoutes;
