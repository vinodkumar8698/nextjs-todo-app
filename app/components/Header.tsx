import Link from 'next/link'
import React from 'react'
import Cart from './Cart'

const Header = () => {

    return (
        <header>

            <nav>
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Products</Link>
            </nav>

            <Cart />

        </header>
    )
}

export default Header