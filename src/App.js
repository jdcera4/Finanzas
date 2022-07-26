import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Content } from "./pages/content"

import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <div className="text-black h-screen flex text-white" style={{background: 'black'}}>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/:id" element={<ProtectedRoute><Content /></ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
