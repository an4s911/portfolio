import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
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
        </div>
    );
}

export default App;
