import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Modules/Component/Home/Home";
import Promo from "../Modules/Component/Promo/Promo";
import Rooms from "../Modules/Component/Rooms/Rooms";
import Admin from "../Modules/Component/Admin/Admin";
import Login from "../Modules/Component/Admin/Login";
import Signup from "../Modules/Component/Admin/Signup";
import Home2 from "../Modules/Component/Home/Home2";
export default function BasePages() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path= 'home' element={<Home />} />
      <Route path= 'rooms' element={<Rooms />}/>
      <Route path= 'promo' element={<Promo />}/>
      <Route path= 'admin' element={<Admin />}/>
      <Route path= 'login' element={<Login />}/>
      <Route path= 'signup' element={<Signup />}/>
      <Route path= 'home2' element={<Home2 />}/>
    </Routes>
  );
}
