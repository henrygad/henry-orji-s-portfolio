import { motion, AnimatePresence } from "framer-motion";
import {useRef, type ReactNode } from "react";
import useClickOutSide from "../hooks/useClickOutSide";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    layoutId: string;
    className?: string
};

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
};

const modal = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            damping: 25,
            stiffness: 300
        }
    },
    exit: {
        y: "-100vh",
        opacity: 0,
        transition: { duration: 0.4 }
    }
};

const Modal = ({ isOpen, onClose, children, layoutId, className = "" }: Props) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useClickOutSide(modalRef, onClose);    
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={modalRef}
                    className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    <motion.div
                        className={`relative size-full max-w-full shadow-lg overflow-x-auto scrollbar-hide ${className}`}                        
                        layoutId={layoutId}
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >                        
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
