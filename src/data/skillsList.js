import {
    SiPython,
    SiPythonHex,
    SiJavascript,
    SiJavascriptHex,
    SiTypescript,
    SiTypescriptHex,
    SiC,
    SiCHex,
    SiHtml5,
    SiHtml5Hex,
    SiCss3,
    SiCss3Hex,
    SiReact,
    SiReactHex,
    SiDjango,
    SiDjangoHex,
    SiFlask,
    SiFlaskHex,
    SiPostgresql,
    SiPostgresqlHex,
    SiTailwindcss,
    SiTailwindcssHex,
    SiVite,
    SiViteHex,
    SiGit,
    SiGitHex,
    SiGithub,
    SiGithubHex,
    SiDocker,
    SiDockerHex,
    SiVim,
    SiVimHex,
    SiLinux,
    SiVirtualbox,
    SiVirtualboxHex,
    SiNetlify,
    SiNetlifyHex,
    SiVercel,
    SiVercelHex,
} from "@icons-pack/react-simple-icons";
import { Coffee } from "lucide-react";

const languages = [
    {
        name: "Python",
        icon: SiPython,
        color: SiPythonHex,
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: SiTypescriptHex,
    },
    {
        name: "C",
        icon: SiC,
        color: SiCHex,
    },
    {
        name: "Javascript",
        icon: SiJavascript,
        color: SiJavascriptHex,
        bg: true,
    },
    {
        name: "HTML",
        icon: SiHtml5,
        color: SiHtml5Hex,
    },
    {
        name: "CSS",
        icon: SiCss3,
        color: SiCss3Hex,
    },
    {
        name: "Java",
        icon: Coffee,
        color: "#0D8AC7",
    },
];

const tools = [
    {
        name: "Django",
        icon: SiDjango,
        color: SiDjangoHex,
    },
    {
        name: "Flask",
        icon: SiFlask,
        color: SiFlaskHex,
    },
    {
        name: "React",
        icon: SiReact,
        color: SiReactHex,
        bg: true,
    },
    {
        name: "Vite",
        icon: SiVite,
        color: SiViteHex,
    },
    {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: SiTailwindcssHex,
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: SiPostgresqlHex,
    },
    {
        name: "Git",
        icon: SiGit,
        color: SiGitHex,
    },
    {
        name: "Docker",
        icon: SiDocker,
        color: SiDockerHex,
    },
];

const misc = [
    {
        name: "Linux",
        icon: SiLinux,
    },
    {
        name: "Vim",
        icon: SiVim,
        color: SiVimHex,
    },
    {
        name: "GitHub",
        icon: SiGithub,
        color: SiGithubHex,
    },
    {
        name: "Virtualbox",
        icon: SiVirtualbox,
        color: SiVirtualboxHex,
    },
    {
        name: "Netlify",
        icon: SiNetlify,
        color: SiNetlifyHex,
    },
    {
        name: "Vercel",
        icon: SiVercel,
        color: SiVercelHex,
    },
];

const skills = [
    { title: "Languages", skills: languages },
    { title: "Tools", skills: tools },
    { title: "Misc", skills: misc },
];

export default skills;
