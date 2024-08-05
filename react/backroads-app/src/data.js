import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

export const pageLinks = [
    {id:1, href:'#home', text: 'home'},
    {id:2, href:'#about', text: 'sobre'},
    {id:3, href:'#services', text: 'serviços'},
    {id:4, href:'#tours', text: 'tours'}
];

export const socialLinks = [
    {id:1, href:'https://www.instagram.com', icon:'fab fa-instagram'},
    {id:2, href:'https://www.x.com', icon:'fa-brands fa-x-twitter'},
    {id:3, href:'https://www.facebook.com', icon:'fab fa-facebook'}
];

export const services = [
    {id:1, icon:'fas fa-wallet fa-fw', title:'poupe dinheiro', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:2, icon:'fas fa-tree fa-fw', title:'encontre a natureza', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:3, icon:'fas fa-socks fa-fw', title:'comforto incrível', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
];

export const tours = [
    {
        id: 1,
        image:tour1,
        date:'22 de agosto, 2025',
        title: 'Aventuras no tibet',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location:'China',
        duaration:6,
        price:2100
    },
    {
        id: 2,
        image:tour2,
        date:'17 de outubro, 2025',
        title: 'O melhor de java',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location:'Indonesia',
        duaration:11,
        price:1400
    },
    {
        id: 3,
        image:tour3,
        date:'10 de novembro, 2025',
        title: 'Explore Hong Kong',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location:'Hong Kong',
        duaration:8,
        price:5000
    },
    {
        id: 4,
        image:tour4,
        date:'5 de janeiro, 2026',
        title: 'Melhor do Quênia',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location:'Quênia',
        duaration:20,
        price:3300
    },
    {
        id: 5,
        image:tour5,
        date:'11 de fevereiro, 2026',
        title: 'Safari em Madagascar',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location:'Madagascar',
        duaration:5,
        price:2250
    },
    {
        id: 6,
        image:tour6,
        date:'20 de março, 2026',
        title: 'Maravilhas da Índia',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location:'Índia',
        duaration:10,
        price:2350
    }
]
