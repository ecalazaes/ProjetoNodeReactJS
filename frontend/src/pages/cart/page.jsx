import {useCartContext} from "../../contexts/useCartContext.jsx";

export default function Cart(){

    const {cartItems} = useCartContext()

    console.log(cartItems)

    return (
        <h1>Cart</h1>
    )
}