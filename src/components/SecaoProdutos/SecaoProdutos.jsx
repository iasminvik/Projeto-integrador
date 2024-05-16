import React from 'react';
import CardProduto from '../CardProduto/CardProduto';
import './SecaoProdutos.css';
const SecaoProdutos = ({ produtos }) => {
    return (
        <div className="container">
            <h2 className="my-2">PRODUTOS</h2>
            <div className="row">
                {produtos.map((produto, index) => (
                    <div key={index} className="col-sm-12 col-md-4 py-1 my-1">
                        <CardProduto produto={produto} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecaoProdutos;
