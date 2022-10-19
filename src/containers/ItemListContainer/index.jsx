import React from 'react';
import ItemList from '../../components/ItemList';
import './styles.scss';
import { useParams } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const ItemListContainer = () => {

  const {categoryId} = useParams();
  const [loading, productos, error] = useFirebase(categoryId);

  return (
    <>
    {loading ?
    <h2 className='loading'>Cargando...</h2>
    :
    <div className='item-list-container'>
    <ItemList products={productos}/>
    </div>}
    {error && <h2>{error}</h2>}
    </>
  )
}

export default ItemListContainer;