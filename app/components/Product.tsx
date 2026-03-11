import { useDispatch, useSelector } from "react-redux"
import Image from "next/image";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { CartState, Product } from "../types";


const ProductCard = ({ product }: { product: Product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: CartState) => state.cart.cartItems)

    return (
        <div style={styles.card}>
            <Image src={product.image} alt={product.title} style={styles.image} width={120} height={160} />

            <h3>{product.title}</h3>
            <p style={styles.price}>₹{product.price}</p>
            <div className="flex flex-row gap-2 justify-center">

                {/* <button
                    style={styles.button}
                    onClick={() => dispatch(removeFromCart())}
                >
                    -
                </button> */}
                <button
                    style={styles.button}
                    onClick={() => cartItems.find((item: Product) => item.id === product.id) ? dispatch(removeFromCart(product)) : dispatch(addToCart(product))}
                // disabled={cartItems.find((item: Product) => item.id === product.id)}
                >
                    {cartItems.find((item: Product) => item.id === product.id) ? "Remove from cart" : "Add to Cart"}
                </button>

            </div>
        </div >
    );
};

const styles = {
    card: {
        width: "220px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center" as const,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    } as const,
    image: {
        width: "100%",
        height: "150px",
        objectFit: "cover" as const,
        borderRadius: "8px",
    } as const,
    price: {
        color: "#2c7",
        fontWeight: "bold",
        margin: "10px 0",
    },
    button: {
        background: "#007bff",
        color: "white",
        border: "none",
        padding: "10px",
        borderRadius: "6px",
        cursor: "pointer",
    },
};

export default ProductCard;