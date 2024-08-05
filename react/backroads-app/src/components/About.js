import aboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => {
    return(
        <section className="section" id="about">
            <Title title='Sobre' ndTitle='nós' />
    
            <div className="section-center about-center">
            <div className="about-img">
                <img
                src={aboutImg}
                className="about-photo"
                alt="Praia paradisíaca"
                />
            </div>
            <article className="about-info">
                <h3>explore a diferença</h3>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                unde dolor?
                </p>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                unde dolor?
                </p>
                <a href="#about" className="btn">Leia mais</a>
                {/*A href acima não deveria levar a lugar algum, mas isso causa warning*/}  
            </article>
            </div>
        </section>
    )
};

export default About;
