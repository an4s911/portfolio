import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Fav from "../assets/images/Fav";

function About() {
    return (
        <section
            id="about"
            className="dt flex items-center justify-center bg-gradient-to-t dark:bg-gradient-to-bl from-gray-300 to-white dark:from-gray-900 dark:to-gray-700 md:py-20 mt-16 lg:mt-20"
        >
            <div className="relative z-10 px-6 py-8 md:px-14 lg:px-24 text-center md:flex gap-10 md:text-left">
                <div className="logo flex items-center justify-center w-full">
                    <Fav className="w-48 md:w-56 fill-[#1a1a1a] dark:fill-gray-200" />
                </div>
                <div className="flex flex-col items-center gap-8 md:items-stretch">
                    <h1 className="text-4xl font-bold leading-tight">
                        Hi I&apos;m{" "}
                        <span className="text-orange-400 underline whitespace-nowrap">
                            Anas Bashir
                        </span>
                    </h1>
                    <h2 className="text-2xl font-bold leading-tight w-full">
                        Full-Stack Developer
                    </h2>
                    <p className="text-lg mb-4">
                        I create robust, scalable web applications that deliver
                        exceptional user experiences. With expertise in both
                        front-end and back-end technologies, I bring ideas to
                        life through code.
                    </p>
                    <div className="flex justify-center items-center md:justify-start space-x-4">
                        <a
                            href="#contact"
                            className="dt bg-white text-gray-800 px-6 py-3
                                            rounded-full font-semibold hover:bg-gray-100
                                            transition duration-300 shadow-md border dark:border-white 
                                             hover:text-gray-800 hover:scale-105 border-gray-800 dark:shadow-gray-700"
                        >
                            Get in touch
                        </a>
                        <a
                            href="#projects"
                            className="dt px-6 py-3 bg-gray-800
                                            rounded-full font-semibold 
                                            transition duration-300 shadow-md dark:shadow-gray-700 border border-white text-white
                                            hover:bg-white hover:text-gray-800 hover:scale-105"
                        >
                            <div className="flex items-center gap-2">
                                <span>See What I&apos;ve Built</span>
                                <ArrowDownIcon className="w-4 h-4" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
