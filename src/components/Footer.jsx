const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black dark:bg-[#111] text-white px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Anas Bashir</h3>
                        <p className="mb-4">
                            Full-Stack Web Developer passionate about creating
                            innovative and user-friendly web applications.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { name: "About", href: "#" },
                                { name: "Skills", href: "#skills" },
                                { name: "Projects", href: "#projects" },
                                { name: "Education", href: "#education" },
                                { name: "Experience", href: "#experience" },
                                { name: "Contact", href: "#contact" },
                            ].map(({ name, href }) => (
                                <li key={name.toLowerCase()}>
                                    <a
                                        href={href}
                                        className="hover:text-indigo-300 transition duration-300"
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Connect</h4>
                        <ul className="space-y-2">
                            {[
                                {
                                    name: "LinkedIn",
                                    href: "https://linkedin.com/in/an4s911",
                                },
                                {
                                    name: "GitHub",
                                    href: "https://github.com/an4s911",
                                },
                                { name: "X", href: "https://x.com/an4s911" },
                                {
                                    name: "Instagram",
                                    href: "https://instagram.com/an4s911",
                                },
                            ].map(({ name, href }) => (
                                <li key={name.toLowerCase()}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-400 transition duration-300"
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-center">
                        <span>&copy; {currentYear}</span>{" "}
                        <span className="italic">Anas Bashir.</span>{" "}
                        <span className="whitespace-nowrap">
                            All rights reserved.
                        </span>
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="dt hover:text-gray-400">
                            Privacy Policy
                        </a>
                        <a href="#" className="dt hover:text-gray-400">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
