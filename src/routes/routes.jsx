import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import ListaClientes from "../pages/ListaClientes";
import DetalleCliente from "../pages/DetalleCliente";
import useAutorizaciones from "../hooks/useAutorizaciones";

const AppRoutes = () => {
  const { admin } = useAutorizaciones();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          admin
            ? <Dashboard />
            : <Navigate to="/login" />
        }
      />

      <Route
        path="/clientes"
        element={
          admin
            ? <ListaClientes />
            : <Navigate to="/login" />
        }
      />

      <Route
        path="/clientes/:id"
        element={
          admin
            ? <DetalleCliente />
            : <Navigate to="/login" />
        }
      />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;