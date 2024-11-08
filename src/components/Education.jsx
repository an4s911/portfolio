const EducationItem = ({ edu }) => (
    <div className="mb-4">
        <h3 className="text-xl font-semibold">{edu.degree}</h3>
        <p className="dt dark:text-gray-400 italic">
            {`${edu.year > new Date().getFullYear() ? "Expected Graduation" : "Graduated"}: ${edu.year}`}
        </p>
        <p className="dt dark:text-gray-400">
            {edu.institution} - {edu.address}
        </p>
    </div>
);

const CertificationItem = ({ cert }) => (
    <div className="mb-4">
        <h3 className="text-lg font-semibold">{cert.name}</h3>
        <p className="dark:text-gray-400 italic">
            {cert.year}
        </p>
        <p className="dark:text-gray-400">
            {cert.issuer}
        </p>
    </div>
);

function Education() {
    const educations = [
        {
            degree: "Bachelor of Computer Engineering",
            institution: "Ankara Medipol University",
            address: "Ankara, Türkiye",
            year: 2026,
        },
        {
            degree: "High School (Major in Computer Science)",
            institution: "MES Indian School",
            address: "Doha, Qatar",
            year: 2021,
        },
    ];

    const certifications = [
        {
            name: "CS50 Introduction to Computer Science",
            issuer: "Harvard University",
            year: "2021",
        },
    ];

    return (
        <section id="education">
            <h2 className="text-3xl font-bold mb-8">
                Education &amp; Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Education</h3>
                    {educations.map((edu, index) => (
                        <EducationItem key={index} edu={edu} />
                    ))}
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">
                        Certifications
                    </h3>
                    {certifications.map((cert, index) => (
                        <CertificationItem key={index} cert={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
