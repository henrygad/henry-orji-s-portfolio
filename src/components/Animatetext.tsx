import { motion, } from "framer-motion";
import { type ReactElement } from "react";


type Props = {
    linesOfText: (string | ReactElement)[]
    className: string,
}

const Animatetext = ({ linesOfText, className }: Props) => {

    return (
        <motion.span            
            className={className}
            initial="hidden"
            animate={"visible"}
            exit="hidden"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.4
                    }
                }
            }}
        >
            {linesOfText.map((text, i) => (
                <motion.span
                    key={i}
                    variants={
                        {
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
                        }
                    }
                    className="block"
                >
                    {text}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default Animatetext;
