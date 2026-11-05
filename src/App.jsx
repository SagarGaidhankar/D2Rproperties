
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Sell from "./pages/Sell";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminLeads from "./pages/admin/AdminLeads";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />

          <Route path="/buy" element={<Properties />} />

          <Route
            path="/properties/:id"
            element={<PropertyDetails />}
          />

          <Route path="/sell" element={<Sell />} />

          {/* Admin Login */}
          <Route
            path="/admin/login"
            element={<AdminLogin />}
          />

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/admin"
              element={<Navigate to="/admin/leads" replace />}
            />

            <Route
              path="/admin/leads"
              element={<AdminLeads />}
            />
          </Route>

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div className="p-10 text-center">
                <h1 className="text-2xl font-bold">
                  404 – Page not found
                </h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
