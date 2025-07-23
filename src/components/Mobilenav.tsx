import { useEffect, useRef, useState } from "react";
import useAutoNavigate from "../hooks/useAutoNavigate";
import useClickOutSide from "../hooks/useClickOutSide";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    active: string;
    setActive: (value: string) => void;
    navList: {
        id: string;
        title: string;
        link: React.RefObject<HTMLElement | null>;
    }[]
};

const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: "0%" },
    exit: { opacity: 0, y: "-100%" },
};

const Mobilenav = ({ active, setActive, navList }: Props) => {
    const dropDownRef = useRef<HTMLElement>(null);
    const [dropDown, setDropDown] = useState(false);
    const autoNavigate = useAutoNavigate();
    useClickOutSide(dropDownRef, () => setDropDown(false));

    useEffect(() => {
        if (dropDown) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [dropDown]);

    return <span
        ref={dropDownRef}
        className="relative justify-end items-center flex md:hidden"
    >
        <AnimatePresence>
            {/* Menu Overlay */}
            {dropDown && (
                <motion.span
                    key="mobile-nav"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex fixed top-0 bottom-0 right-0 left-0 h-screen w-screen max-w-screen max-h-screen overflow-y-auto scrollbar-hide z-50"
                >
                    <span

                        className="relative flex justify-center items-center flex-1 bg-[#151a1e]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="inline-block absolute top-6 right-9">
                            <button
                                onClick={() => setDropDown(false)}
                                className="flex justify-center items-center text-red-400 hover:text-red-800 text-2xl size-6 bg-red-800/20 rounded-full cursor-pointer"
                            >
                                <span className='inline-block'>&times;</span>
                            </button>
                        </span>
                        <ul className="flex-1 flex flex-col grow items-center gap-10 max-w-[280px] p-10">
                            {
                                navList.map(li =>
                                    <motion.li
                                        key={li.title}
                                        onClick={() => setActive(li.title)}
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-block relative"
                                    >
                                        <a
                                            onClick={() => {
                                                setDropDown(false);
                                                const clear = setTimeout(() => {
                                                    clearTimeout(clear);
                                                    autoNavigate(li.link.current);
                                                }, 500);
                                            }}
                                            className="text-white text-xl font-medium leading-normal cursor-pointer"
                                        >
                                            {li.title}
                                        </a>
                                        {active === li.title && (
                                            <motion.span
                                                layoutId="underline"
                                                className="inline-block absolute left-0 right-0 h-[3px] bg-[#1572cf] rounded-full -bottom-1"
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                    </motion.li>
                                )
                            }
                        </ul>
                    </span>
                </motion.span>
            )}
        </AnimatePresence>
        {/* Hamburger button */}
        <motion.span
            key="decktop-nav"
            variants={{
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="inline-block"
        >
            <button
                onClick={() => setDropDown(!dropDown)}
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#243647] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 origin-center"
            >
                <div className="text-white" data-icon="List" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
                        ></path>
                    </svg>
                </div>
            </button>
        </motion.span>
    </span>;
};

export default Mobilenav;
