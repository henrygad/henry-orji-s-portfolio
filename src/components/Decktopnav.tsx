import { motion } from "framer-motion";
import useAutoNavigate from "../hooks/useAutoNavigate";

type Props = {
    active: string;
    setActive: (value: string) => void;
    navList: {
        id: string;
        title: string;
        link: React.RefObject<HTMLElement | null>;
    }[]
};

const Decktopnav = ({ navList, active, setActive }: Props) => {
    const autoNavigate = useAutoNavigate();

    return <ul className="items-center gap-9 hidden md:flex">
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
                            autoNavigate(li.link.current);
                        }}
                        className="text-white text-sm font-medium leading-normal cursor-pointer"
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
};

export default Decktopnav