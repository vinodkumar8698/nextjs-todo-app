"use client"
import Link from "next/link"
import { useSelector } from "react-redux"
import { CartState } from "../types"

const Cart = () => {
    const cartItemsLength = useSelector((state: CartState) => state.cart.cartItems)
    return (
        <>
            <Link href="/cart">
                <div className="right-section">

                    <div className="cart">
                        🛒
                        <span className="cart-count">{cartItemsLength.length ? cartItemsLength.length : 0}</span>
                    </div>

                </div>
            </Link>
        </>
    )
}

export default Cart