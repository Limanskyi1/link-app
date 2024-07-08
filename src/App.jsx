import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Login, Preview, Register } from "./pages";
import React from "react";
import { useSelector } from "react-redux";
/////
import "./styles/app.scss";
import "./styles/btns.scss";
import { Profile } from "./pages/Profile";
import { useFetchUserData } from "./hooks/useFetchUserData";

const ProtectedRoute = ({ element, isAuth }) => {
  return isAuth ? element : <Navigate to="/login" />;
};

const App = () => {
  const isAuthTrue = useSelector((state) => state.user?.isAuth);
  const user = useSelector((state) => state.user);

  useFetchUserData(user);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={<ProtectedRoute isAuth={isAuthTrue} element={<Home />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute isAuth={isAuthTrue} element={<Profile />} />}
        />
        <Route
          path="/preview"
          element={<ProtectedRoute isAuth={isAuthTrue} element={<Preview />} />}
        />
      </Routes>
    </>
  );
};

export default App;
