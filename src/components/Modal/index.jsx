import React from 'react'
import './styles.css'
import { useEffect } from 'react';

const Modal = ({handleClose}) => {

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                handleClose(false);
            }

            if (event.keyCode === 13) {
                handleSubmit();
            }

        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };

    }, [handleClose]);

    const handleSubmit = (event) => {
        event?.preventDefault();
    };

    const onClose = () => {
        handleClose(false);
    };

    return (
        <div className='background'>
            <form className='modal-container' onSubmit={handleSubmit}>
                <h2 className='title'>¡Atención!</h2>
                <p className='text'>Consultar stock antes de realizar su compra</p>
                <div className='buttons-container'>
                    <button className='rounded-button-cancel' type='button' onClick={onClose}>Cerrar</button>
                    <button className='rounded-button-send' type='submit'>Ok!</button>
                </div>
                </form>    
        </div>
    )
}

export default Modal