import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-4">
            <div className='ajusteimg2'>
                <img src="./img/face2.png" alt="imagemli" />
                <img src="./img/insta2.png" alt="imagemli" />
             </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; {new Date().getFullYear()} Lih Bolos Artesanais</p>
                        <p>Sabor e Qualidade em cada Fatia!</p>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-end">
                            <p>Entre em contato:</p>
                            <p>Telefone: (17) 991635046</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
