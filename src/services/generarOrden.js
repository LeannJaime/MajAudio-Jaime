const ordenGenerada = (nombre, email, telefono, cart, total) => {
    return{
        buyer: {
            nombre: nombre,
            email: email,
            telefono: telefono
        },
        items: cart,
        total: total,
        createAt: new Date().toLocaleString()
    }
}

export default ordenGenerada;