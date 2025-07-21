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

const SkillsSection = ({className, skills}: {className: string, skills: string[]}) => {
    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
        >
            {skills.map((skill, index) => (
                <Skill skill={skill} index={index} key={index} />
            ))}
        </motion.div>
    );
};

export default SkillsSection;

