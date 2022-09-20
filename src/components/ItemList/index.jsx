import React from 'react'
import { useState } from 'react'
import Item from '../Item'
import Modal from '../Modal'

const ItemList = ({products}) => {

  const [modalShow, setModalShow] = useState(true);

  return (
    <div>
        {products.map(product => {
            return <Item key={product.id} product={product}/>
        })}
        { modalShow ? <Modal handleClose={setModalShow}/> : null}
    </div>
  )
}

export default ItemList