import { motion } from "framer-motion";
import type { JSX } from "react";

type Props = { id?: string, title?: string, html?: string| JSX.Element,  onClick?: () => void, className?: string, disabled?: boolean }

const Button = ({ id, title, html, onClick = () => null, className, disabled }: Props) => {

    return <motion.button
        id={id || ""}
        onClick={onClick}
        whileHover={{
            scale: 1.05,
            boxShadow: "0 0 12px rgb(9, 51, 93)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
        className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#1572cf] text-white text-sm font-bold leading-normal tracking-[0.015em] border border-slate-100 overflow-hidden cursor-pointer ${className}`}
        disabled={disabled}
    >{
            html ? html : <span className='inline-block'>{title || "Default Title"}</span>
    }
    </motion.button>
};

export default Button;
