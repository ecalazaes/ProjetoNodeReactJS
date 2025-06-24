import Navbar from "./components/navbar/navbar.jsx";
import {Outlet} from "react-router-dom"
import Footer from "./components/footer/footer.jsx";
import {CartProvider} from "./contexts/useCartContext.jsx";
import {ToastContainer} from "react-toastify";

export default function App() {
    return (
        <>
            <CartProvider>
                <Navbar/>
                <main>
                    <Outlet/>
                </main>
                <Footer/>
                <ToastContainer
                    position="top-right" // Posição das notificações
                    autoClose={3000} // Tempo em ms para fechar automaticamente
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </CartProvider>
        </>
    )
}
