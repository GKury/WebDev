import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
    return(
        <section className='py-10 align-element' id='projects'>
            <SectionTitle text='Meus Projetos' />
            <p className='text-slate-400'>Nota* Em alguns projetos é possível encontrar a mescla de inglês e português. Isso acontece, pois utilizei APIs com dados em inglês em certos projetos </p>
            <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {projects.map((project) => {
                    return <ProjectsCard key={project.id} {...project} />
                })}
            </div>
        </section>
    );
};

export default Projects;
