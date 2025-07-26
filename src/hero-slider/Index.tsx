import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


type Props = { children: React.ReactNode; images: string[]; className?: string };

const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const HeroSlider = ({ children, images, className = "" }: Props) => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [isHovered]);

    return (
        <div
            className={`relative ${className} `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                <motion.div
                    key={images[index]}
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('${images[index]}')`, zIndex: 0 }}
                    variants={fadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 1.6,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 w-full h-full bg-contain bg-center bg-repeat sm:rounded-xl"
                />
            </AnimatePresence>
            {children}
        </div>
    );
};

export default HeroSlider;
