import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {
    const [productDetail, setProductsDetail] = useState({})
    const navigate = useNavigate();
    const {productId} = useParams();

    useEffect(()=> {
        
        const idOut = () => {
            navigate('*');
        }
        
        const getProducts = async () => {
            try {
                
                const docRef = doc(db, "products", productId);
                const docSnap = await getDoc(docRef);
                
                
                if (docSnap.exists()) {
                    setProductsDetail({id: docSnap.id, ...docSnap.data()});
            } else {
                idOut();
            }

            } catch (error) {
                console.log(error);
            }
        }
        getProducts();

    }, [productId, navigate])

    return (
        <ItemDetail product={productDetail}/>
    )
}

export default ItemDetailContainer