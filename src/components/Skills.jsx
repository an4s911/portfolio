const SkillCategory = ({ title, skills }) => (
    <div className="dt shadow dark:shadow-gray-700 border-[1px] border-gray-200 dark:border-gray-800 px-6 py-4 rounded-md flex flex-col gap-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex flex-wrap">
            {skills.map((skill, index) => (
                <span
                    key={index}
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const skillsets = [
        {
            title: "Front-End",
            skills: [
                "React",
                "Tailwind CSS",
                "Vite",
                "Webpack",
                "Eslint/Prettier",
            ],
        },
        {
            title: "Back-End",
            skills: ["Django", "Flask", "Gunicorn"],
        },
        {
            title: "Databases",
            skills: ["PostgreSQL", "MySQL", "SQLite"],
        },
        {
            title: "DevOps",
            skills: ["Docker", "Nginx", "Git", "GitHub", "GitLab"],
        },
        {
            title: "Hosting & Cloud",
            skills: ["Vercel", "Netlify", "DNS Management"],
        },
        {
            title: "Design",
            skills: ["Figma", "Canva", "Inkscape", "Gimp"],
        },
        {
            title: "APIs & Protocols",
            skills: ["RESTful API", "JSON"],
        },
        {
            title: "Authentication",
            skills: ["JWT"],
        },
        {
            title: "Virtualization",
            skills: ["VirtualBox", "QEMU/KVM/LibVirt"],
        },
        {
            title: "Operating Systems & Tools",
            skills: [
                "Linux",
                "Arch Linux",
                "Debian",
                "Fedora",
                "Bash scripting",
                "Pacman",
                "Apt",
                "Flatpak",
                "AUR",
                "Disk Partitioning",
                "Timeshift",
                "Htop",
                "Gparted",
            ],
        },
        {
            title: "Miscellaneous",
            skills: [
                "Java",
                "C",
                "Assembly",
                "NPM/Yarn",
                "Neovim/Vim",
                "Alacritty",
                "i3 WM",
                "Polybar",
                "Tmux",
                "Dotfiles",
                "FileZilla",
            ],
        },
    ];

    return (
        <section id="skills" className="dt flex flex-col gap-8">
            <h2 className="text-3xl font-bold">Skills &amp; Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillsets.map((category, index) => (
                    <SkillCategory
                        key={index}
                        title={category.title}
                        skills={category.skills}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
