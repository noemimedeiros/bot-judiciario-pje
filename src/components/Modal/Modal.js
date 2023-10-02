import React from 'react';

function Modal({ isOpen, closeModal, conteudo }) {
  return (
    <div className={`modal-default ${isOpen ? 'is-open' : ''}`}>
        <div className='modal-default-header d-flex space-between'>
        <b>Mensagem</b>
        <div className='my-auto'>
        <button className='btn-modal-default-close' onClick={closeModal}>X</button>
        </div>
        </div>
        <div className='modal-default-content'>
            <p>{conteudo}</p>
        </div>
    </div>
  );
}

export default Modal;