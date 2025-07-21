import { motion } from "framer-motion";

const item = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring' as const,
            stiffness: 100,
            damping: 15,
        },
    },
};

const Skill = ({ skill, index }: { skill: string, index: number }) => {
    return <motion.div
        key={index}
        variants={item}
        whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 12px rgba(255, 105, 180, 0.4)",
        }}
        className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full transition-all bg-[#243647] pl-4 pr-4"
    >
        <p className="text-white text-sm font-medium leading-normal">{skill}</p>
    </motion.div>
};

export default Skill;