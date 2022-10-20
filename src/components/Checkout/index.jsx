import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useContext } from 'react';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import ordenGenerada from '../../services/generarOrden';
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import './styles.css'
import { Shop } from '../../context/ShopProvider';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {

    const [validated, setValidated] = useState(false);
    const { cart, totalPrice, clearCart } = useContext(Shop);


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleBuy = async () => {
        const importeTotal = totalPrice();
        const orden = ordenGenerada( "nombre", "apellido", "email", "telefono", cart, importeTotal);
        const docRef = await addDoc(collection(db, "orders"), orden);
        alert(`Orden generada, Id: ${docRef.id}`);


        //ACTUALIZAMOS STOCK DE FIREBASE
        cart.forEach(async (productoEnCarrito) => {

            const productRef = doc(db, "products", productoEnCarrito.id);
            const productSnap = await getDoc(productRef);

            await updateDoc(productRef, {
                stock: productSnap.data().stock - productoEnCarrito.quantity
            });

        });

    }

    const navigate = useNavigate();

    const sendAndClear = () => {
        handleBuy();
        clearCart();
        navigate('/');
    }

    return (
        <div className='container fluid'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3 justify-content-center">
                    <Form.Group id="nombre" as={Col} md="5" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nombre"
                        />
                        <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group id="apellido" as={Col} md="5" controlId="validationCustom02">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Apellido"
                        />
                        <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3 justify-content-center">
                    <Form.Group id="email" as={Col} md="5" controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="text"
                                placeholder="e-mail"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingrese un email.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group id="telefono" as={Col} md="5" controlId="validationCustom03">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="Número telefónico" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingrese un número.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <div className="formcheckout">
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Aceptar terminos y condiciones de compra"
                            feedback="Debe tildar la casilla"
                            feedbackType="invalid"
                        />
                    </Form.Group>
                </div>
                <div className='text-center'>
                    <Button type="submit" onClick={sendAndClear}>Confirmar compra</Button>
                </div>
            </Form>

        </div>
    );
}

export default Checkout