import { motion } from "framer-motion";
import Skill from "./Skill";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const SkillsSection = ({ title, skills }: {title: string, skills: { name: string, icon: string }[] }) => {
    return (
        <>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4">
                {title}
            </h3>

            <motion.div
                className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 px-4"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                {skills.map((skill, index) => (
                    <Skill name={skill.name} icon={skill.icon} index={index} key={index} />
                ))}
            </motion.div>
        </>
    );
};

export default SkillsSection;

