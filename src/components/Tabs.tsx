import { useState, type ReactElement } from "react";
import { motion } from "framer-motion";

type Props = {
    className: string
    tabs: {
        id: string,
        tabNav: string,
        onClickOnTabNav?: () => void,
        tabContent: ReactElement | string
    }[]
};


const Tabs = ({ className, tabs }: Props) => {
    const [displayTab, setDisplayTab] = useState(0);

    return <>
        <div className="pb-3">
            <div className="flex border-b border-[#334d66] px-4 overflow-x-auto scroll-smooth snap-x snap-mandatory">
                <div className="flex items-center gap-8 w-max">
                    {
                        tabs.map((tab, index) =>
                            <motion.button
                                key={index}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                variants={{
                                    hidden: { opacity: 0, y: -10 },
                                    visible: { opacity: 1, y: 0 },
                                    exit: { opacity: 0, y: -10 },
                                }}
                                className="relative flex items-center justify-center text-white pb-[13px] pt-4 cursor-pointer"
                                onClick={() => {
                                    if (tab.onClickOnTabNav !== undefined) tab.onClickOnTabNav()
                                    setDisplayTab(index);
                                }}
                            >
                                <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">{tab.tabNav}</p>
                                {displayTab === index && (
                                    <motion.span
                                        layoutId="underline"
                                        className="inline-block absolute left-0 right-0 h-[3px] bg-[#1572cf] rounded-full bottom-1"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        )
                    }

                </div>
            </div>
        </div>
        <div className={className}>
            {tabs[displayTab].tabContent}
        </div>
    </>
}

export default Tabs