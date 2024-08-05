import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return(
        <section className='bg-white py-20' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutSvg} alt="Pessoas numa máquina de escrever" className='w-full h-64 hidden md:block'  />
                <article>
                    <SectionTitle text='Quem sou eu'/>
                    <p className='text-slate-600 mt-8 leading-loose'>
                        Sou um estudante de Ciência da Computação na Universidade Presbiteriana Mackenzie (período noturno, previsão de formação para dezembro de 2025) e estou procurando uma oportunidade de estágio como desenvolvedor (São Paulo ou home office).
                    </p>
                    <p className="className='text-slate-600 mt-3 leading-loose'">

                    </p>
                    <p className='text-slate-600 mt-3 leading-loose'>
                        Tenho focado em desenvolvimento web, principalmente em ferramentas de <span style={{whiteSpace:'nowrap'}}>Front-end,</span> como React, Bootstrap, e Tailwind CSS, além de já ter utilizado Headless CMS (Contentful). Além disso, também possuo conhecimento de <span style={{whiteSpace:'nowrap'}}>Back-end,</span> ja tendo realizado projetos com Express.js, e utilizado banco de dados noSQL (MongoDB) e SQL (MariaDB). Além da área da tecnologia, também falo inglês avançado.  
                    </p>
                    <p className='text-slate-600 mt-3 leading-loose'>
                        Outras ferramentas e tecnologias que já estudei incluem: Google Cloud (<a href='https://www.cloudskillsboost.google/public_profiles/efcf9a36-c961-450a-a9ce-b254e93dbc19' target='_blank' className='text-blue-600 hover:underline'>Meu perfil do GC Skills Boost</a>), Python para análise de dados e computação visual, além de ter familiaridade com C e C++.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default About;