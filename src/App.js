import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import {UserContext} from "./context/UserProvider"


import Home from "./routes/Home";
import Products from "./routes/Products";
import Provider from "./routes/Provider";
import NotFound from "./routes/NotFound";
import Login from "./routes/Login";
import Register from "./routes/Register";

import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";


function App() {

  const { user } = useContext(UserContext);

  if (user === false) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <hr />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/provider" element={<Provider />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </>
  );
}

export default App;
