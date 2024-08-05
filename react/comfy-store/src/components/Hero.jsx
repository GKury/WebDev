import { useState } from 'react';
import { Link } from "react-router-dom";

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [
    {
        id: 0,
        img: hero1
    },
    {
        id: 1,
        img: hero2
    },
    {
        id: 2,
        img: hero3
    },
    {
        id: 3,
        img: hero4
    },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % carouselImages.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((currentIndex + carouselImages.length - 1) % carouselImages.length);
    };

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight">Estamos mudando a forma de fazer compras</h1>
                <p className="mt-8 max-w-xl text-lg leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum, expedita ipsa alias eum enim iusto aspernatur sunt culpa ab assumenda! Ut id nam pariatur non quis facere reprehenderit rem!</p>
                <div className="mt-10">
                    <Link to='/products' className="btn btn-primary">Nossos Produtos</Link>
                </div>
            </div>
            <div className="hidden h-[28rem] lg:carousel w-full carousel-center p-4 space-x-4 bg-neutral rounded-box">
                <div className="carousel-item relative w-full transition-opacity duration-500 ease-in-out">
                    <img src={carouselImages[currentIndex].img} alt="Produto" className="rounded-box h-full w-96 mx-auto object-cover" />
                    
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={handlePrevious} className="btn btn-circle">❮</button>
                        <button onClick={handleNext} className="btn btn-circle">❯</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
