import About from "./components/About";
import Education from "./components/Education";
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
        </div>
    );
}

export default App;
