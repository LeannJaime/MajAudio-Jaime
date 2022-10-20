import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/detail/${product.id}`)
    }
    return (
        <>
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img src={product.img} />
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary" onClick={handleNavigate}>Detalle</Button>
            </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default Item