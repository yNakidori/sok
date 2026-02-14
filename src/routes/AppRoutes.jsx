import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home/Home";
import Estoque from "../pages/Estoque/Estoque";
import Produtos from "../pages/Produtos/Produtos";
import Pedidos from "../pages/Pedidos/Pedidos";
import Unidades from "../pages/Unidades/Unidades";
import Login from "../pages/Login/Login";
import Operadores from "../pages/Operadores/Operadores";

const RootRedirect = () => {
  const { isAuthenticated } = useAuth();
  return <Navigate to={isAuthenticated ? "/app/home" : "/login"} replace />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />

        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/app/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="estoque" element={<Estoque />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="pedidos" element={<Pedidos />} />
          <Route path="unidades" element={<Unidades />} />
          <Route path="operadores" element={<Operadores />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
