import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; {new Date().getFullYear()} Transformando Momentos em doces e lembranças</p>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-end">
                            <p>Entre em contato:</p>
                            <p>Telefone: (17) 991635046</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <a href="#" className="btn btn-outline-light me-2"><i className="bi bi-twitter"></i></a>
                <a href="#" className="btn btn-outline-light me-2"><i className="bi bi-linkedin"></i></a>
                <a href="#" className="btn btn-outline-light me-2"><i className="bi bi-instagram"></i></a>
            </div>
        </footer>
    );
};

export default Footer;
