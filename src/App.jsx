import About from "./components/About";
import Header from "./components/Header";

function App() {
    return (
        <div
            className="text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-600 dt"
            id="app"
        >
            <Header />
            <About />
        </div>
    );
}

export default App;
