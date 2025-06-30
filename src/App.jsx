import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Products from "./components/Product"
import ProductList from "./components/ProductList"


function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <ProductList/>
    <About/>
    {/* <Products/> */}
    <Footer/>
    </>
  )
}

export default App
