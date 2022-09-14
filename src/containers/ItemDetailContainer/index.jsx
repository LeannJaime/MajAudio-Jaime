import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail'
import { products } from '../../data/products'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    useEffect(()=> {

        const getProducts = async () => {
            try {
                const productos = await products[1];
                console.log(productos);
                setProductDetail(productos);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();

    }, [])

    return (
        <ItemDetail product={productDetail}/>
    )
}

export default ItemDetailContainer