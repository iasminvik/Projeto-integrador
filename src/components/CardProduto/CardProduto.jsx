import React from 'react';
import './CardProduto.css';

const CardProduto = ({ produto }) => {
    return (
        <body>
        <div className="card">
            <div className='Produtoimg'>
            <img src={produto.imagem} className="card-img-top" alt={produto.titulo} />          
            </div>
            <div className="card-body">
                <p className="card-text">{produto.descricao}</p>
            </div>
            <div className='produtoAjuste'>
                <h5 className="card-title">{produto.titulo}</h5>
            </div>
        </div>
        </body>
    );
};

export default CardProduto;

