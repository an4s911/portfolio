import { useState } from "react";
import { Collapse, Button } from "@material-tailwind/react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import DotfilesImg from "../assets/images/projects/dotfiles.png";
import CaffeineCornerImg from "../assets/images/projects/caffeine-corner.png";
import OdinCalculatorImg from "../assets/images/projects/odin-calculator.png";
import CS50FinalImg from "../assets/images/projects/cs50-final.png";
import DicegameImg from "../assets/images/projects/dicegame.png";
import BritsImg from "../assets/images/projects/brits.jpg";

const ProjectCard = ({ project }) => (
    <div className="transition-[background] duration-300 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden project-card flex flex-col">
        <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover object-top"
        />
        <div className="p-6 h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="dt text-gray-600 dark:text-gray-300 mb-4 flex-1">
                {project.description}
            </p>
            <div className="mb-4">
                <h4 className="dt font-semibold mb-2 text-gray-700 dark:text-gray-200">
                    Technologies Used:
                </h4>
                <div className="flex flex-wrap">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="dt bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-500 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex space-x-4">
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dt text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-600"
                    >
                        Live Demo
                    </a>
                )}
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dt text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-600"
                >
                    GitHub Repo
                </a>
            </div>
        </div>
    </div>
);

function ListProjects({ projects }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}

function MoreProjects({ projects }) {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen((cur) => !cur);

    return (
        <div className="flex flex-col items-center">
            <Button
                onClick={toggleOpen}
                className="text-inherit flex items-center gap-1 underline shadow-none p-0 text-sm md:text-base my-5"
            >
                <span className="whitespace-nowrap">View More</span>
                <ArrowDownIcon
                    className={`w-4 ${open && "-rotate-180"} transition-transform duration-700`}
                />
            </Button>
            <Collapse open={open}>
                <ListProjects projects={projects} />
            </Collapse>
        </div>
    );
}

function Projects() {
    const projects = [
        {
            title: "Caffeine Corner",
            description:
                "An online coffee shop that offers a range of high-quality coffee drinks and baked goods.",
            image: CaffeineCornerImg,
            technologies: ["React", "Tailwind CSS"],
            demo: "https://caffeine-corner.netlify.app/",
            github: "https://github.com/an4s911/caffeine-corner",
        },
        {
            title: "Odin Calculator",
            description:
                "A simple calculator that allows users to perform basic arithmetic operations.",
            image: OdinCalculatorImg,
            technologies: ["JavaScript", "CSS"],
            demo: "https://an4s911.github.io/odin-calculator/",
            github: "https://github.com/an4s911/odin-calculator",
        },
        {
            title: "Linux Dotfiles",
            description:
                "A collection of dotfiles and configuration files for Linux systems.",
            image: DotfilesImg,
            technologies: ["Bash", "Git", "Nvim", "Tmux"],
            demo: "",
            github: "https://github.com/an4s911/dotfiles",
        },
        {
            title: "Simple Flask Blog",
            description:
                "A simple blog application built with Flask and PostgreSQL.",
            image: CS50FinalImg,
            technologies: ["HTML", "CSS", "JavaScript", "Flask", "PostgreSQL"],
            demo: "https://cs50-final-an4s911.vercel.app/",
            github: "https://github.com/an4s911/cs50-final-project",
        },
        {
            title: "Dicegame",
            description:
                "A simple dice game that allows users to roll dice and play against the computer.",
            image: DicegameImg,
            technologies: ["HTML", "CSS", "JavaScript"],
            demo: "https://an4s911.github.io/dicegame",
            github: "https://github.com/an4s911/dicegame",
        },
        {
            title: "Brits - Brightness Control",
            description:
                "Simple brightness control tool for Linux that accurately adjusts the screen brightness.",
            image: BritsImg,
            technologies: ["Python", "Linux"],
            demo: "",
            github: "https://github.com/an4s911/brits",
        },
    ];

    return (
        <section id="projects" className="">
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <ListProjects projects={projects.slice(0, 3)} />
            <MoreProjects projects={projects.slice(3)} />
        </section>
    );
}

export default Projects;
