import skillsets from "../data/skillsList";

const SkillCategory = ({ title, skills }) => {
    return (
        <div className="transition-[border,box-shadow] duration-300 shadow dark:shadow-gray-700 border-[1px] border-gray-200 dark:border-gray-800 px-6 py-4 rounded-md flex flex-col gap-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="grid grid-cols-2">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <span className="bg-gray-200 flex gap-1 items-center rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {
                                <skill.icon
                                    color={skill.color}
                                    className={`w-4 h-4 rounded-sm ${skill.bg ? "bg-gray-700" : ""}`}
                                />
                            }
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="flex flex-col gap-8">
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
