import React from 'react';

function Modal({ isOpen, closeModal, conteudo }) {
  return (
    <div className={`modal ${isOpen ? 'is-open' : ''}`}>
        <div className='modal-header div-flex space-between'>
        <b>Mensagem</b>
        <div className='my-auto'>
        <button className='btn-modal-close' onClick={closeModal}>X</button>
        </div>
        </div>
        <div className='modal-content'>
            <p>{conteudo}</p>
        </div>
    </div>
  );
}

export default Modal;