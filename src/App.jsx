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
        { label: 'QUEM SOU?', href: '#quemSou' },
        { label: 'PRODUTOS', href: '#produtos'},
        { label: 'CONTATO', href: 'https://api.whatsapp.com/send/?phone=5517991635046&text&type=phone_number&app_absent=0' },
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
            descricao: "Chocolate com Brigadeiro, Choconinho, Cenoura com Brigadeiro, Coco com creme de coco ",
            link: "https://api.whatsapp.com/send/?phone=5517991635046&text&type=phone_number&app_absent=0"
        },
        {
            imagem: "/img/BoloPiscina1.png",
            titulo: "Bolo Gelado",
            descricao: "Limão, Coco, Chocolate com cobertura de ninho com Nutella, Chocolate com Brigadeiro",
            link: "https://api.whatsapp.com/send/?phone=5517991635046&text&type=phone_number&app_absent=0"
        },
        {
            imagem: "/img/BoloPiscina3.png",
            titulo: "Bolo com Cobertura",
            descricao: "Com brigadeiro: Cenoura, Chocolate, Formigueiro, Com mousse de ninho(branco ou rosa): Chocolate, Formigueiro, Branco, Com choconinho: Chocolate, Formigueiro, Com calda: Laranja, Banana, Com mousse de limão: Limão",
            link: "https://api.whatsapp.com/send/?phone=5517991635046&text&type=phone_number&app_absent=0"
        },
        {
            imagem: "/img/BoloPiscina4.png",
            titulo: "Bolo Vulcão",
            descricao: "Cenoura com brigadeiro, Chocolate com brigadeiro, Chocolate com choconinho",
            link: "https://api.whatsapp.com/send/?phone=5517991635046&text&type=phone_number&app_absent=0"
        },
        {
            imagem: "/img/BoloPiscina5.png",
            titulo: "Biscoitos Amanteigados",
            descricao: "coroa, flor, meias de natal, bonecos de natal, planta, flocos de neve, espiga de milho, feliz dia das mães, coracão, circulo: ",
            link: "https://api.whatsapp.com/send/?phone=5517991635046&text&type=phone_number&app_absent=0"
        },
        {
            imagem: "/img/BoloPiscina6.png",
            titulo: "Mini Bolos",
            descricao: "Com brigadeiro: Cenoura, Formigueiro, Com mousse de ninho: Cenoura, Formigueiro",
            link: "https://api.whatsapp.com/send/?phone=5517991635046&text&type=phone_number&app_absent=0"
        },
        {
            imagem: "/img/BoloPiscina2.png",
            titulo: "Bolo Caseiro",
            descricao: "Chocolate, Fubá, Fubá com erva doce, Formigueiro, Cenoura, Milho, Bolo branco",
            link: "https://api.whatsapp.com/send/?phone=5517991635046&text&type=phone_number&app_absent=0"
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
                <div id='quemSou' className='container-fluid'>
                    <div className='col-12'>
                        <SecaoLi/>
                    </div>

                </div>
                <div id='produtos'className="row">
                    <div className="col-lg-12">
                        <SecaoProdutos produtos={produtos} />
                    </div>
                </div>
            </div>
            <Footer id='contato'/>
        </div>
    );
}

export default App;
