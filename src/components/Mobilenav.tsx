import {motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useAutoNavigate from "../hooks/useAutoNavigate";
import useClickOutSide from "../hooks/useClickOutSide";

type Props = {
    active: string;
    setActive: (value: string) => void;
    navList: {
        id: string;
        title: string;
        link: React.RefObject<HTMLElement | null>;
    }[]
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
        {dropDown && (
            <span
                key="mobile-nav"
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
                                        className="text-white text-base font-medium leading-normal cursor-pointer"
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
            </span>
        )}
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

/* 

<div class="relative flex size-full min-h-screen flex-col bg-[#151a1e] dark group/design-root overflow-x-hidden" style='font-family: "Space Grotesk", "Noto Sans", sans-serif;'>
      <div class="layout-container flex h-full grow flex-col">
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div class="pb-3">
              <div class="flex border-b border-[#3f4d5a] px-4 gap-8">
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-[#bcd1e5] text-white pb-[13px] pt-4" href="#">
                  <p class="text-white text-sm font-bold leading-normal tracking-[0.015em]">Home</p>
                </a>
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9faebc] pb-[13px] pt-4" href="#">
                  <p class="text-[#9faebc] text-sm font-bold leading-normal tracking-[0.015em]">About Me</p>
                </a>
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9faebc] pb-[13px] pt-4" href="#">
                  <p class="text-[#9faebc] text-sm font-bold leading-normal tracking-[0.015em]">Skills</p>
                </a>
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9faebc] pb-[13px] pt-4" href="#">
                  <p class="text-[#9faebc] text-sm font-bold leading-normal tracking-[0.015em]">Projects</p>
                </a>
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9faebc] pb-[13px] pt-4" href="#">
                  <p class="text-[#9faebc] text-sm font-bold leading-normal tracking-[0.015em]">Resume</p>
                </a>
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9faebc] pb-[13px] pt-4" href="#">
                  <p class="text-[#9faebc] text-sm font-bold leading-normal tracking-[0.015em]">Contact</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


*/