import React from 'react';
import './CardProduto.css';

const CardProduto = ({ produto }) => {
    return (
        <div className='card'>
            <img src={produto.imagem} className='card-img-top' alt={produto.titulo} />
            <div className="card-body">
                <h5 className="card-title">{produto.titulo}</h5>
                <p className="card-text">{produto.descricao}</p>
                
            </div>
            <div className='card-footer w-100 d-flex justify-content-center'>
            <a href={produto.link} className="btn btn-primary">Entrar em Contato!</a>
            </div>
        </div>
    );
};

export default CardProduto;

