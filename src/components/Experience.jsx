const ExperienceItem = ({ role, company, period, description }) => (
    <div className="mb-8">
        <h3 className="text-xl font-semibold">{role}</h3>
        <p className="dt dark:text-gray-400 mb-2">
            {company} | {period}
        </p>
        <ul className="list-disc list-inside">
            {description.map((item, index) => (
                <li key={index} className="mb-1">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

function Experience() {
    const experiences = [
        {
            role: "Web Design Internship",
            company: "Acugence Doha - Qatar",
            period: "July 2024 - Sept 2024",
            description: [
                "Assisted in developing a waste management software solution by creating wireframes and user flows using tools like Figma and Flowmapp.",
                "Utilized AI tools (like ChatGPT) to enhance design processes and collaborated with interdisciplinary teams to align project goals and requirements.",
            ],
        },
    ];

    return (
        <section id="experience" className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            {experiences.map((exp, index) => (
                <ExperienceItem key={index} {...exp} />
            ))}
        </section>
    );
}

export default Experience;
