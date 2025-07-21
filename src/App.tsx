
import Logo from "./ui/Logo";
import Responsivenav from "./components/Responsivenav";
import { useRef } from "react";
import Button from "./components/Button";
import SkillsSection from "./ui/skills/Index";
import Project from "./components/Project";
import Tabs from "./components/Tabs";
import Resume from "./components/Resume";
import Contactform from "./components/Contactform";
import Socialmedialink from "./components/Socialmedialink";
import useAutoNavigate from "./hooks/useAutoNavigate";
import HeroSlider from "./hero-slider/Index";
import Skills from "./assets/data/skills.json";
import SocialMediaLinks from "./assets/data/socialMediaLinks.json";
import profileImage from "./assets/images/portfolio-profile.jpg"
import Projects from "./assets/data/projects.json";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";


const App = () => {
  const homeSectionRef = useRef<HTMLElement>(null);
  const aboutMeSectionRef = useRef<HTMLElement>(null);
  const skillsSectionRef = useRef<HTMLElement>(null);
  const projectsSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);
  const resumeSectionRef = useRef<HTMLElement>(null);
  const autoNavigate = useAutoNavigate();


  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);


  const navList = [
    { id: "1", title: "Home", link: homeSectionRef },
    { id: "2", title: "About Me", link: aboutMeSectionRef },
    { id: "3", title: "Skills", link: skillsSectionRef },
    { id: "4", title: "Projects", link: projectsSectionRef },
    { id: "5", title: "Contact", link: contactSectionRef }
  ];

  // Drop in animation on mount
  useEffect(() => {
    controls.start({ y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } });
  }, [controls]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        controls.start({ y: -80, opacity: 0, transition: { duration: 0.3 } });
      } else {
        // Scrolling up
        controls.start({ y: 0, opacity: 1, transition: { duration: 0.3 } });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  return < div className="font-main relative size-full bg-[rgb(17,26,34)] dark">
    <header className="@container size-full min-h-16 whitespace-nowrap">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={controls}
        className="fixed top-0 left-0 right-0 flex-1 flex items-center justify-between gap-x-2 p-3 sm:px-5 md:px-10 py-3 border-b border-solid border-b-[#243647] shadow-md backdrop-blur-md z-50"
      >
        <Logo />
        <span
          className="flex flex-1 justify-end items-center gap-x-2 md:flex-row-reverse"
        >
          <Button
            title="Resume"
            onClick={() => autoNavigate(resumeSectionRef.current)}
            className="max-w-48 truncate"
          />
          <Responsivenav navList={navList} className="flex md:flex-1 justify-end md:justify-center items-center" />
        </span>
      </motion.nav>
    </header>
    <main className="size-full flex justify-center py-5">
      <div className="flex flex-col max-w-[960px] flex-1">
        {/* Hero section */}
        <section
          ref={homeSectionRef}
          className="@container"
        >
          <div className="sm:p-4">
            <HeroSlider
              className="flex min-h-[480px] flex-col gap-10 sm:gap-8 items-start justify-end px-4 pb-10 sm:px-10"
              images={Projects.map(project => (project.display_image_one, project.display_image_two))}
            >
              <div className="size-full absolute top-0 right-0 left-0 bottom-0 bg-black/15 z-10" />
              <div className="flex flex-col jus gap-2 text-left z-10">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
                  Henry Orji
                </h1>
                <h2 className="text-slate-50 text-sm font-normal leading-normal sm:text-base sm:font-normal sm:leading-normal">
                  Software Developer specializing in web and mobile development. Passionate about creating innovative solutions and delivering high-quality code.
                </h2>
              </div>
              <Button
                title="View Projects"
                onClick={() => autoNavigate(projectsSectionRef.current)}
                className="max-w-48 truncate z-10"
              />
            </HeroSlider>
          </div>
        </section>
        {/* About me section */}
        <section
          ref={aboutMeSectionRef}
          className="@container size-auto min-h-[320px] flex flex-col gap-y-10 justify-center py-10"
        >
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            About Me
          </h2>
          <div className="flex flex-col gap-2 px-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-20"
              style={{ backgroundImage: `url(${profileImage})` }}
            />
            <div className="flex-1 text-white text-base font-normal pb-3 pt-1">
              <p className="mb-6 leading-relaxed">
                Hi, I’m <span className="font-semibold">Henry Emeka Orji</span> — a
                passionate <span className="font-semibold">Web and Mobile Software Developer</span>{" "}
                with over <span className="font-semibold">2 years of hands-on expnerience</span> building
                scalable, user-focused applications.
              </p>
              <p className="mb-10 leading-relaxed">
                I specialize in full-stack development using <span
                  className="text-blue-400 font-medium underline cursor-pointer"
                  onClick={() => autoNavigate(skillsSectionRef.current)}
                >modern technologies.</span> I take pride in writing <span className="font-semibold">clean, maintainable code</span>,
                implementing <span className="font-semibold">user-centered design</span>, and building systems that
                are <span className="font-semibold">optimized, scalable</span>, and continuously integrated. I'm
                always learning and improving across software architecture, accessibility, and performance.
              </p>

              <h3 className="text-xl font-semibold mb-4">🚀 Projects I’m Proud Of</h3>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-400">
                  🔸 Makzon – <span className="italic font-medium">A Social Blogging Web App</span>
                </h4>
                <p className="mt-2">
                  My very first full-stack project, where I built both the backend and frontend
                  from scratch. Makzon allows bloggers and content creators to publish posts with{" "}
                  <span className="font-medium">text, images, links, and videos</span>. It’s built
                  for usability and creativity.
                </p>
              </div>

              <div className="mb-10">
                <h4 className="text-xl font-bold text-gray-400">
                  🔸 Makzon Text Editor – <span className="italic font-medium">Custom Rich Text Editor</span>
                </h4>
                <p className="mt-2">
                  A powerful text editor built with <span className="font-medium">React TypeScript</span> and the{" "}
                  <span className="font-medium">Window Selection API</span>. It supports rich content editing and is
                  open-sourced on <span className="underline">npm</span> and <span className="underline">GitHub</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Skills section */}
        <section
          ref={skillsSectionRef}
          className="@container size-auto min-h-[320px] flex flex-col gap-y-10 justify-center py-10"
        >
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
          <SkillsSection
            skills={Skills}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6"
          />
        </section>
        {/* Projects section */}
        <section
          ref={projectsSectionRef}
          className="@container size-auto min-h-[320px] flex flex-col gap-y-10 justify-center py-10"
        >
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Projects</h2>
          <div className="space-y-4">
            <Tabs
              className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"
              tabs={[
                {
                  id: "1",
                  tabNav: "Web",
                  tabContent: <>
                    {
                      Projects.filter(project => project.category === "web")
                        .map((project) =>
                          <Project
                            key={project.id}
                            project={project}
                          />
                        )
                    }
                  </>
                },
                {
                  id: "2",
                  tabNav: "Mobile",
                  tabContent: <>
                  </>
                },
                {
                  id: "3",
                  tabNav: "Library",
                  tabContent: <>
                    {
                      Projects.filter(project => project.category === "library")
                        .map((project) =>
                          <Project
                            key={project.id}
                            project={project}
                          />
                        )
                    }
                  </>
                },
                {
                  id: "4",
                  tabNav: "Tools",
                  tabContent: <>
                    {
                      Projects.filter(project => project.category === "tool")
                        .map((project) =>
                          <Project
                            key={project.id}
                            project={project}
                          />
                        )
                    }
                  </>
                },
              ]}
            />
          </div>
        </section>
        {/* Download Resume section */}
        <section
          ref={resumeSectionRef}
          className="@container size-auto min-h-[240px] flex flex-col gap-y-10 justify-center py-8"
        >
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Resume</h2>
          <div className="flex flex-col justify-start items-start gap-8 px-4 py-3">
            <div className="text-white font-normal leading-normal">
              <h3 className="text-xl font-semibold mb-4">
                🤝 Let’s Build Something Together
              </h3>
              <span className="inline-block text-base">
                I’m open to:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>✅ Freelance opportunities</li>
                  <li>✅ Full-time roles</li>
                  <li>✅ Open-source collaborations</li>
                </ul>
              </span>
            </div>
            <Resume />
          </div>
        </section>
        {/* Contact section */}
        <section
          ref={contactSectionRef}
          className="@container size-auto min-h-[240px] flex flex-col gap-y-10 justify-center py-8"
        >
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Contact Me
          </h2>
          <div className="flex flex-wrap items-end gap-4 px-4 py-3">
            <Contactform />
          </div>
        </section>
      </div>
    </main>
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <section className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div className="flex flex-wrap justify-center gap-4">
            {
              SocialMediaLinks.map((social) =>
                <Socialmedialink key={social.id} social={social.icon} link={social.url} />
              )
            }
          </div>
          <p className="text-[#92aec8] text-base font-normal leading-normal">Henry Orji © 2025 | All rights reserved.</p>
        </section>
      </div>
    </footer>
  </ div>;
};

export default App;

