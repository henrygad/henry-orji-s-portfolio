import { motion } from 'framer-motion';
import Modal from './Modal';
import Button from './Button';
import useModal from '../hooks/useModal';
import type { projectType } from '../types/project.type';

type Props = {
    project: projectType
};

const Project = ({ project }: Props) => {
    const { modalIsOpen, handleModal } = useModal();
  
    return <>
        <motion.div
            layoutId={project.id}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
                duration: 0.4, type: "spring", stiffness: 100
            }}
            key={project.id}
            className="w-full  flex flex-col items-center gap-3 pb-3 cursor-pointer"
            onClick={() => handleModal(true)}
        >
            <div
                className="size-fix bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-2xl shadow-lg"                
            >
                <img src={project.display_image_one} alt="Project Screenshot" className="w-fit h-[280px] mx-auto object-cover rounded-xl shadow-2xl" />
            </div>           
            <div className='size-full'>
                <p className="text-white text-base font-medium leading-normal text-nowrap whitespace-pre truncate max-w-full">
                    {project.title}
                </p>
                <p className="text-[#92adc8] text-sm font-normal leading-normal line-clamp-3 max-w-full">
                    {project.description}
                </p>
            </div>
        </motion.div>
        <Modal
            isOpen={modalIsOpen}
            layoutId={project.id}
            className='pt-18 bg-[#111a22]'
            onClose={() =>
                handleModal(false)
            }
        >
            <header className="@container flex justify-center px-8">
                <nav className='flex-1 flex max-w-[960px] items-end'>
                    <div className='flex-1 flex justify-end'>
                        <button
                            onClick={() => handleModal(false)}
                            className="flex justify-center items-center text-red-400 hover:text-red-800 text-2xl size-6 bg-red-800/20 rounded-full cursor-pointer"
                        >
                            <span className='inline-block'> &times;</span>
                        </button>
                    </div>
                </nav>
            </header>
            <main className="px-40 flex flex-1 justify-center py-5">
                <div className="flex flex-col max-w-[960px] flex-1">
                    <section></section>
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                            Project: {project.title}
                        </p>
                    </div>
                    <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
                        {project.description}
                    </p>
                    <div className="flex w-full grow @container p-4">
                        <div className="w-full gap-1 overflow-hidden @[480px]:gap-2 aspect-[3/2] rounded-xl grid grid-cols-[2fr_1fr_1fr]">
                            <div
                                className="w-full bg-center bg-no-repeat bg-contain aspect-auto rounded-none row-span-2"
                                style={{ backgroundImage: `linear-gradient(rgba(17,26,34, 1) 0%, rgba(38, 82, 125, 0.4) 100%), url('${project.display_image_one}')` }}
                            ></div >
                            <div
                                className="w-full bg-center bg-no-repeat bg-contain aspect-auto rounded-none col-span-2 row-span-2"
                                style={{ backgroundImage: `linear-gradient(rgba(17,26,34, 1) 0%, rgba(38, 82, 125, 0.4) 100%), url('${project.display_image_two}')` }}
                            ></div>
                        </div >
                    </div >
                    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Technologies Used</h3>
                    <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
                        {project.technologies}
                    </p>
                    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Challenges and Solutions</h3>
                    <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
                        {project.challenges_and_solution}
                    </p>
                    <div className="flex justify-stretch">
                        <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                            {project.demo_link?.trim() &&
                                <Button
                                    title='Live Demo'
                                    onClick={() => window.open(project.demo_link, "_blank")}
                                />}
                            {project.github_link?.trim() &&
                                <Button
                                    title='Code Repository'
                                    className='bg-[#243647]'
                                    onClick={() => window.open(project.github_link, "_blank")}
                                />
                            }
                            {project.npm_link?.trim() &&
                                <Button
                                    title='NPM'
                                    className='bg-transparent'
                                    onClick={() => window.open(project.npm_link, "_blank")}
                                />
                            }
                        </div>
                    </div>
                    <div className="flex px-4 py-3 justify-start">
                        <button
                            className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-transparent text-white text-sm font-bold leading-normal tracking-[0.015em]"
                            onClick={() => handleModal(false)}
                        >
                            <span className="truncate">Back to Projects</span>
                        </button>
                    </div>
                </div >
            </main >
        </Modal>
    </>;
};


export default Project;

