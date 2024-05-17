import React from 'react';
import './Footer.css'

const Footer = (img) => {
    return (
        <footer className="footer bg-dark text-light py-4">
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
