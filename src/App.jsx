import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

function App() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="text-gray-800 dark:text-white dt" id="app">
            <Header />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Experience />
            <Contact />
            <Footer />

            {showScrollToTop && (
                <button
                    onClick={scrollToTop}
                    className="dt fixed bottom-8 right-8 md:bottom-10 md:right-10 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 ease-in-out"
                    aria-label="Scroll to top"
                >
                    <ChevronUpIcon className="w-6 h-6" />
                </button>
            )}
        </div>
    );
}

export default App;
