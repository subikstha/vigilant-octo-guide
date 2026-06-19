import { getProductById } from "./Menu.js";

export async function addToCart(id) {
    const product = await getProductById(id)

    const results = app.store.cart.filter(
        prodInCart => prodInCart.product.id == id
    )

    if(results.length == 1) {
        // Product is already in the cart
        app.store.cart = app.store.cart.map(
            p => p.product.id == id 
            ? {...p, quantity: p.quantity + 1} 
            : p
        )
    } else {
        // We should not push the contents to the array, since that will not change the cart property and the eventt will not be dispatched
        app.store.cart = [...app.store.cart, {product, quantity: 1}]
    }
}

export function removeFromCart(id) {
    app.store.cart = app.store.cart.filter(p => p.product.id != id)
}