import {useCartContext} from "../../contexts/useCartContext.jsx";
import styles from "./page.module.css";
import {LuCircleMinus} from "react-icons/lu";
import {useState, useMemo} from "react";
import ConfirmOrderPopup from "../../components/confirmOrderPopup/confirmOrderPopup.jsx";
import orderServices from "../../services/order.jsx";
import {Link, useNavigate} from "react-router-dom";

export default function Cart() {

    const {cartItems, updateCartItems, removeFromCart, clearCart} = useCartContext()
    const [confirmPopupOpen, setConfirmPopupOpen] = useState(false)
    const {sendOrder} = orderServices()
    const navigate = useNavigate();

    // 1. Calcular o total geral do carrinho
    const cartTotal = useMemo(() => {
        // Usa reduce para somar o (preço do item * quantidade do item) de cada item no carrinho
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [cartItems]); // O total é recalculado toda vez que 'cartItems' muda

    const handleChangeItemQty = (mode, itemId) => {
        const updatedCartItem = cartItems.map((item) => {
            if (item._id === itemId) {
                if (mode === 'less' && item.quantity > 1) {
                    item.quantity -= 1
                } else if (mode === 'more') {
                    item.quantity += 1
                }
            }
            return item;
        })
        updateCartItems(updatedCartItem)
    }

    const handleOpenPopup = (e) => {
        e.preventDefault();
        setConfirmPopupOpen(!confirmPopupOpen)
    }

    const handleConfirmOrder = (orderData) => {
        orderData.items = cartItems.map((item) => {
            return {plateId: item._id, quantity: item.quantity}
        })
        sendOrder(orderData)
        setConfirmPopupOpen(!confirmPopupOpen)
        clearCart()
        return navigate('/profile')
    }

    if (!cartItems.length) {
        return (
            <div className={styles.cartContainer}>
                <h1> Your cart is empty...!</h1>
                <Link to={'/plates'}>
                    <button>See our plates!</button>
                </Link>
            </div>
        )

    }
    return (
        <>
            <div className={styles.pageContainer}>
                <h1>Your items: </h1>
                <section>
                    <div className={styles.itemListContainer}>
                        {cartItems.map((item) => (
                            <div className={styles.itemContainer} key={item._id}>
                                <img src={item.imgUrl} alt=""/>
                                <div className={styles.itemContent}>
                                    <h2>{item.name}</h2>
                                    <p>[{String(item.ingredients)}]</p>
                                    <p>{item.description}</p>
                                    <div className={styles.portionsContainer}>
                                        <p>Portions:</p>
                                        <p>{item.quantity}</p>
                                        <div className={styles.portionsBtns}>
                                            <button onClick={() => {
                                                handleChangeItemQty('less', item._id)
                                            }}>-
                                            </button>
                                            <button onClick={() => {
                                                handleChangeItemQty('more', item._id)
                                            }}>+
                                            </button>
                                        </div>
                                    </div>
                                    <p>$ {(item.price * item.quantity).toFixed(2)}</p>
                                    <button className={styles.removeBtn} onClick={() => {
                                        removeFromCart(item._id)
                                    }}><LuCircleMinus/> Remove item
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* 2. Exibindo o total do pedido */}
                <div className={styles.cartSummary}>
                    <h2>Total do Pedido: $ {cartTotal.toFixed(2)}</h2> {/* <--- Aqui o total é exibido */}
                    <button className={styles.confirmeBtn} onClick={handleOpenPopup}>Confirm your order!</button>
                </div>
            </div>
            <ConfirmOrderPopup open={confirmPopupOpen} onClose={handleOpenPopup} onConfirm={handleConfirmOrder}/>
        </>
    );
}