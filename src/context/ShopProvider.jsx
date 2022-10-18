import React, { useState, createContext } from 'react'

export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const prodcutoRepetido = isInCart(item.id);
        console.log(prodcutoRepetido);
        if (prodcutoRepetido) {
            const cartModified = cart.map(product => {
                if (product.id === item.id){
                    product.quantity += item.quantity
                    return product
                }
                return product
            })
            setCart(cartModified);
            console.log(cartModified);
            console.log(cart);
        } else {
            const cartModificado = [...cart, item]
            setCart(cartModificado)
        }
    }

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    const clearCart = () => setCart([]);

    const isInCart = (id) =>{
        return cart.some(product => product.id === id)
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoAcual) => acumulador + productoAcual.quantity, 0);

    // const [mensaje, setMensaje] = useState("Hola");

    return (
        <Shop.Provider value={{cart, addItem, clearCart, removeItem, totalPrice, totalProducts}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;