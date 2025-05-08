import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Nav from "./component/navigationbar/navbar"
import LogIn from "./pages/signPages/logIn"
import Products from "./component/products/products"
import StarFoodFlyer from "./component/folter"
import Register from "./pages/signPages/register"
import { AuthProvider } from "./contexts/AuthContext"
import AddProduct from "./pages/productspage/Addproduct"
import ProductList from "./pages/productspage/getAllproduct"
import UpdateProduct from "./pages/productspage/updateproduct"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Products />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/allProducts" element={<ProductList />} />
              <Route path="/update/:id" element={<UpdateProduct />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          <StarFoodFlyer />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}


export default App