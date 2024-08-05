import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

import backroadsimg from './assets/img/backroads.png';
import comfystoreimg from './assets/img/comfystore.png';
import mixmasterimg from './assets/img/mixmaster.png';

export const links = [
  { id: nanoid(), href: '#about', text: 'sobre' },
  { id: nanoid(), href: '#extracurricular', text: 'Extracurriculares' },
  { id: nanoid(), href: '#skills', text: 'habilidades' },
  { id: nanoid(), href: '#projects', text: 'projetos' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Possuo conhecimento para construir páginas com excelência semântica no lado do HTML, ao mesmo tempo em que construo visuais agradáveis e intuitivos com CSS. No lado do CSS tenho experiência com Tailwind CSS e Bootstrap',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Tenho bastante experiência com JavaScript, sendo capaz de fazer toda a lógica por trás do site',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Domino React e várias de suas bibliotecas. Construo aplicações com arquitetura baseada em componentes, usando ferramentas como React Router, TanStack Query, Axios, e React Redux',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <BiLogoTypescript className='h-16 w-16 text-emerald-500'/>,
    text: 'Sou capacitado em TypeScript, tendo total controle de linguagens tipadas, e de conceitos tradicionais de programação orientada a objetos',
  },
  {
    id: nanoid(),
    title: 'Node.js e Express.js',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500'/>,
    text: 'Possuo experiência com tais tecnologias para <span style="white-space: nowrap;">Back-end,</span> já tendo criado CRUDs para base de dados SQL (MariaDB) e noSQL (MongoDB)',
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <SiNextdotjs className='h-16 w-16 text-emerald-500'/>,
    text: 'Além de ter experiência com Vite, tenho estudado também Next.js por sua flexibilidade e sua capacidade de Server Side Rendering',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: comfystoreimg,
    url: 'https://comfy-store-gkf.netlify.app/',
    github: 'https://github.com/GKury/WebDev',
    title: 'comfy store',
    text: 'Meu principal projeto até o momento; simula um e-commerce de mobília. Principais Tecnologias: React, React Router, TanStack Query, Axios, React Redux, Tailwind CSS, e DaisyUI. Não escrevi o <span style="white-space: nowrap;">Back-end</span>',
  },
  {
    id: nanoid(),
    img: mixmasterimg,
    url: 'https://mixmaster-gkf.netlify.app/',
    github: 'https://github.com/GKury/WebDev',
    title: 'MixMaster',
    text: 'Um pequeno site para encontrar bebidas divertidas encontradas na Cocktails DB API. Principais tecnologias: React, TanStack Query, e Axios',
  },
  {
    id: nanoid(),
    img: backroadsimg,
    url: 'https://backroads-gkf.netlify.app/',
    github: 'https://github.com/GKury/WebDev',
    title: 'Backroads',
    text: 'Uma landing page para uma empresa de viagens. Feito basicamente com React',
  },
];
