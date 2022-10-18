import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const algoritmoGuardadoAutomatico = async () => {

    try {

        const response = await fetch('/data/products.json');
        const productosAGuardar = await response.json();

        productosAGuardar.forEach(async (producto)=> {
            const docRef = await addDoc(collection(db, "products"), {
                name: producto.name,
                description: producto.description,
                price: producto.price,
                category: producto.category,
                stock: producto.stock,
                img: producto.img,
            });
            console.log("Document written with ID: ", docRef.id);
        })     
        
    } catch (error) {
        console.log(error);
    }
}

export default algoritmoGuardadoAutomatico;