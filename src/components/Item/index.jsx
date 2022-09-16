import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({product}) => {
    return (
        <>
        <div className='container'>
            <Card style={{ width: '18rem' }}>
            <Card.Img src={product.img}/>
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary">Detalle</Button>
            </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default Item