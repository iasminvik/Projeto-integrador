import React from 'react';
import CardProduto from '../CardProduto/CardProduto';
import './SecaoProdutos.css';
const SecaoProdutos = ({ produtos }) => {
    return (
        <div className="container2">
            <h2 className="my-4">Bolos Disponiveis</h2>
            <div className="row2">
                {produtos.map((produto, index) => (
                    <div key={index} className="col-md-8 mb-4">
                        <CardProduto produto={produto} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecaoProdutos;
