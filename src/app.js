import React from "react"
import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import { Container } from "react-bootstrap"
import Header from "./Components/Header"
import { CartProvider } from "./context/CartContext"

function  App() {
    return(
        <CartProvider>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
            </Container>
        </CartProvider>
    )
}

export default App