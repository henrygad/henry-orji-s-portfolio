import { useEffect, useState } from "react";
import Decktopnav from "./Decktopnav";
import Mobilenav from "./Mobilenav";
import useSectionOnView from "../hooks/useSectionOnView";

type Props = {
    navList: {
        id: string;
        title: string;
        link: React.RefObject<HTMLElement | null>;
    }[]
    className?: string;
};

const Responsivenav = ({ navList, className }: Props) => { 
    const [active, setActive] = useState("Home");
    const sectionOnView = useSectionOnView();

    const handleScroll = () => {
        navList.forEach((item) => {
            const section = item.link.current;
            if (sectionOnView(section)) {
                setActive(item.title);
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <span className={`flex ${className}`}>
        {/* deck top navs */}
        <Decktopnav
            active={active}
            setActive={setActive}
            navList={navList}
        />

        {/* Mobile nav */}
        <Mobilenav
            active={active}
            setActive={setActive}
            navList={navList}
        />             
    </span>
}

export default Responsivenav;