import extracurricularSvg from '../assets/extracurricular.svg';
import SectionTitle from './SectionTitle';

const Extracurriculars = () => {
    return(
        <section className='py-20' id='extracurricular'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <article>
                    <SectionTitle text='Atividades extracurriculares'/>
                    <h3 className='mt-8 text-2xl'>
                        Hackathons
                    </h3>
                    <p className='text-slate-600 leading-loose'>
                        Em maio de 2022 participei de um hackathon organizado pela CSDBR no qual o objetivo era desenvolver um site de reviews para jogos independentes; minha equipe ficou em segundo lugar. Em outubro de 2023 participei de um hackathon organizado pela Prodam no qual o objetivo era desenvolver um App que fomentasse o turismo em São Paulo; minha equipe ficou em primeiro lugar.
                    </p>
                    <h3 className='mt-6 text-2xl'>
                        Iniciação científica
                    </h3>
                    <p className='text-slate-600 leading-loose'>
                        Durante 2022 participei como voluntário em uma iniciação científica na qual foi desenvolvido um jogo sério que tinha o intuito de auxiliar pessoas a melhorar seu equilíbrio; era direcionado a idosos e pessoas que sofreram de doenças como AVC, pois este grupo de pessoas tende a perder o equilíbrio. O jogo consistia de uma pessoa descendo uma montanha de snowboard, e era papel do jogador mover o personagem para que este desviasse dos troncos caídos. Para controlar o personagem, a pessoa deveria se inclinar para frente e para trás em cima de uma prancha de skate.
                    </p>
                    <h3 className='mt-6 text-2xl'>
                        Cursos e certificações
                    </h3>
                    <p className='text-slate-600 leading-loose'>
                        Busco constantemente aprimorar meus conhecimentos e habilidades através de diversos cursos. Entre eles, o já citado <a href="https://www.cloudskillsboost.google/public_profiles/efcf9a36-c961-450a-a9ce-b254e93dbc19" target='_blank' className='text-blue-600 hover:underline'>Google Cloud Computing Foundations</a>, que ampliou minha compreensão sobre as tecnologias de computação em nuvem, além de inúmeros outros focados em desenvolvimento web.
                    </p>
                </article>
                <img src={extracurricularSvg} alt="Pessoas numa máquina de escrever" className='w-full h-64 hidden md:block'  />
            </div>
        </section>
    );
};

export default Extracurriculars;