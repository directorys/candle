import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AProduct from "./components/Admin/AProduct";
import Buy from "./components/Buy";
import Shop from "./components/Shop";
import Contract from "./components/Contract";
import Goods from "./components/Goods";
import Thanks from "./components/Thanks";
import Home from './components/Home';
import Auth from "./components/Auth";
import ATotem from "./components/Admin/ATotem";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/buy" element={<Buy/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contract" element={<Contract/>}/>
        <Route path="/goods" element={<Goods/>}/>
        <Route path="/thanks" element={<Thanks/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/admin-product" element={<AProduct/>}/>
        <Route path="/admin-totem" element={<ATotem/>}/>
      </Routes>
    </BrowserRouter>
  );
}
