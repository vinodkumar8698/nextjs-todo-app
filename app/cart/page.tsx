"use client";
import { CSSProperties, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartState, Product } from "../types";
import { removeFromCart, updateCart } from "../redux/cartSlice";
import type { AppDispatch } from "../redux/store";
import Image from "next/image";
import Input from "../components/Input";
import Button from "../components/Button";


const Cart = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cartItems = useSelector((state: CartState) => state.cart.cartItems);
    if (cartItems.length === 0) {
        return <h3>Your cart is empty 🛒</h3>;
    }

    const handleChange = (id: number, value: number) => {

        dispatch(updateCart({ id, value }))
        console.log("🚀 ~~ calculateTotal ~~ calculateTotal:", calculateTotal(), cartItems)

    }

    const calculateTotal = () => {
        try {
            return cartItems.reduce((acc, item) =>
                acc + item.price, 0
            )
        } catch (e) {
            console.log("error during calculate total fun")
        }
    }


    return (
        <div style={styles.container}>
            <h2>Total Cart Items: {cartItems.length}</h2>

            {cartItems.map((item: Product) => (
                <div key={item.id} style={styles.item}>
                    <Image src={item.image} alt={item.title} style={styles.image} width={50} height={70} />

                    <div style={styles.details}>
                        <h4>{item.title}</h4>
                        <p>₹{item?.quantity ? item.quantity * item.price : item.price}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span>Quantity:</span>
                        <Input
                            type="number"
                            min={1}
                            max={99}
                            defaultValue={item?.quantity ? item.quantity : 1}
                            placeholder="enter quantity"
                            style={styles.input}
                            onChange={(e) => handleChange(item.id, Number(e.target.value))}
                        />
                    </div>

                    {/* <button
                        style={styles.removeBtn}
                        onClick={() => dispatch(removeFromCart(item))}
                    >
                        Remove
                    </button> */}
                    <Button style={styles.removeBtn} onClick={() => dispatch(removeFromCart(item))} >
                        Remove
                    </Button>
                </div>
            ))}

            <h3 style={styles.total}>Total: ₹{calculateTotal()}</h3>
        </div>
    );
};


const styles: { [key: string]: CSSProperties } = {
    container: {
        width: "100%",
        marginTop: "20px",
    } as CSSProperties,
    item: {
        display: "flex",
        alignItems: "center",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "10px",
        justifyContent: "space-between",
    } as CSSProperties,
    image: {
        width: "60px",
        height: "60px",
        objectFit: "cover",
        borderRadius: "6px",
    } as CSSProperties,
    details: {
        flex: 1,
        marginLeft: "10px",
    },
    input: {
        width: "60px",
        padding: "4px",
        marginTop: "5px",
    },
    removeBtn: {
        background: "crimson",
        color: "white",
        border: "none",
        padding: "6px 10px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    total: {
        color: "green",
        marginTop: "20px",
    },
};

export default Cart;
