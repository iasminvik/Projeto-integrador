import React from 'react';
import ItemCarousel from '../ItemCarousel/ItemCarousel';
import './Carousel.css';

const Carousel = ({ imagens }) => {
    return (
        <div id="carouselExampleFade" class="carousel slide" data-ride="carousel" data-interval="1000">
            <div class="carousel-inner">
            {imagens.map((imagem, index) => (
                    <ItemCarousel id={index} key={index} src={imagem.src} alt={imagem.alt} className={index == 0 ? 'carousel-item active' : 'carousel-item'} />
                ))}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>














    );
};

export default Carousel;