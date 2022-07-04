import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home.js";
import Entry from "./components/Entry/Entry";
import Out from "./components/Out/Out";
import EditOut from "./components/EditOut/EditOut";
import EditEntry from "./components/EditEntry/EditEntry";
import { useState } from "react";
import UserContext from "./contexts/UserContext";

export default function App() {

  const [token, setToken] = useState(null)

  return (
    <BrowserRouter>
      <UserContext.Provider value={{token, setToken}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/out" element={<Out />} />
          <Route path="/editentry" element={<EditEntry />} />
          <Route path="/editout" element={<EditOut />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}