import Root from "./Component/Root";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Component/User";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import { AdminProduct } from "./Pages/Admin/AdminProduct";
import UserDashboard from "./Pages/User/UserDashboard";
import UserProduct from "./Pages/User/UserProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
          <Route path="/admin/product" element={<AdminProduct />}></Route>
          <Route path="/user/dashboard" element={<UserDashboard />}></Route>
          <Route path="/user/product" element={<UserProduct />}></Route>
          {/* 
         
           */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
