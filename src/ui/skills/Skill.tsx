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

const Skill = ({ name, icon, index }: { name: string, icon: string, index: number }) => {
    return <motion.div
        key={index}
        variants={item}
        whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 12px rgba(255, 105, 180, 0.4)",
        }}
        className="text-white flex flex-1 gap-3 rounded-lg border border-[#344d65] bg-[#1a2632] p-4 items-center"
    >
        <div className="flex justify-start">
            <img src={icon} alt={name}/>
        </div>
        <h2 className="text-base font-bold leading-tight">{name}</h2>
    </motion.div>
};

export default Skill;