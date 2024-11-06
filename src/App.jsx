import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
    return (
        <div
            className="text-gray-800 dark:text-white dt"
            id="app"
        >
            <Header />
            <About />
            <Skills />
        </div>
    );
}

export default App;
