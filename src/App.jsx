import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from './components/Menu/Menu';
import Carousel from './components/Carousel/Carousel';
import SecaoProdutos from './components/SecaoProdutos/SecaoProdutos';
import Footer from './components/Footer/Footer';
import SecaoLi from './components/SecaoLi/SecaoLi';
import "./App.css"

const App = () => {
    const itensMenu = [
        { label: 'QUEM SOU?', onClick: () => console.log('Clicou no Item 1') },
        { label: 'PRODUTOS', onClick: () => console.log('Clicou no Item 2') },
        { label: 'CONTATO', onClick: () => console.log('Clicou no Item 3') },
    ];

    const imagensCarousel = [
        { src: "/img/banner1.png", alt: "Slide 1" },
        { src: "/img/banner2.png", alt: "Slide 2" },
        { src: "/img/banner3.png", alt: "Slide 3" }
        
    ];


    const produtos = [
        {
            imagem: "/img/BoloPiscina.png",
            titulo: "Bolo Piscina",
            descricao: "Descrição do Produto 1",
            link: "https://exemplo.com/produto1"
        },
        {
            imagem: "/img/BoloPiscina1.png",
            titulo: "Bolo Gelado",
            descricao: "Descrição do Produto 2",
            link: "https://exemplo.com/produto2"
        },
        {
            imagem: "/img/BoloPiscina3.png",
            titulo: "Bolo com Cobertura",
            descricao: "Descrição do Produto 3",
            link: "https://exemplo.com/produto3"
        },
        {
            imagem: "/img/BoloPiscina4.png",
            titulo: "Bolo Vulcão",
            descricao: "Descrição do Produto 4",
            link: "https://exemplo.com/produto4"
        },
        {
            imagem: "/img/BoloPiscina5.png",
            titulo: "Biscoitos Amanteigados",
            descricao: "Descrição do Produto 5",
            link: "https://exemplo.com/produto5"
        },
        {
            imagem: "/img/BoloPiscina6.png",
            titulo: "Mini Bolos",
            descricao: "Descrição do Produto 6",
            link: "https://exemplo.com/produto2"
        },
        {
            imagem: "/img/BoloPiscina2.png",
            titulo: "Mini Bolos",
            descricao: "Descrição do Produto 6",
            link: "https://exemplo.com/produto2"
        },
    ];

    return (
        <div className='container-5'>
            <Menu className='col-12' itensMenu={itensMenu} />
            <div >
                <div className="row">
                    <div className="col-12">
                        <Carousel imagens={imagensCarousel} />
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='col-12'>
                        <SecaoLi/>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <SecaoProdutos produtos={produtos} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
