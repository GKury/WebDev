import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
    return(
        <section className="bg-white py-20" id="skills" >
            <div className="align-element">
                <SectionTitle text='Habilidades web'/>
                <div className=" py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill)=> {
                        return <SkillsCard key={skill.id} {...skill}/>
                    })}
                </div>
            </div>

        </section>
    );
};

export default Skills;
