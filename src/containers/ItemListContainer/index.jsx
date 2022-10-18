import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../../components/ItemList';
// import { products } from '../../data/products';
import './styles.scss';
import { db } from '../../firebase/config';
import { collection, query, getDocs, where } from "firebase/firestore";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

  console.log(db);

  const [productos, setProductos] = useState([])

  const {categoryId} = useParams();

  //IIFE
  useEffect(()=> {
    (async () => {
  
        // const obtenerProductos = new Promise ((accept, reject)=> {
        //   setTimeout(() => {
        //     accept(products)
        //   }, 500);
        // })
  
      try {
        // const productos = await obtenerProductos;
        // setProductos(productos);

          const q = categoryId ?
            query(collection(db, "products"), where("category", "==", categoryId))
            :
            query(collection(db, "products"));

            const querySnapshot = await getDocs(q);

          const productosFirebase = [];
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            productosFirebase.push({id: doc.id, ...doc.data()})
          });

          setProductos(productosFirebase);

      } catch (error) {
        console.log(error);
      }
    })()
  }, [categoryId])

  return (
    <div className='item-list-container'>
    <h2>{greeting}</h2>
    <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer;