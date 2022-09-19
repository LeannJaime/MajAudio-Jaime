import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail'
import { products } from '../../data/products'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();

    useEffect(()=> {

        const getProducts = async () => {
            try {
                const productos = await products[`${productId}`-1];
                console.log(productos);
                setProductDetail(productos);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();

    }, [productId])

    return (
        <ItemDetail product={productDetail}/>
    )
}

export default ItemDetailContainer