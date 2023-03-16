import { BrowserRouter, Routes, Route } from "react-router-dom"
import Detail from "../pages/Detail"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router