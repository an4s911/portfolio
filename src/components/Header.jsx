import { useState, useEffect } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import {
    SunIcon,
    MoonIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

function NavItem({ href, name }) {
    return (
        <a
            href={href}
            className="flex items-center px-1 py-2 hover:text-blue-500 hover:bg-gray-200 dark:hover:bg-gray-700 md:hover:bg-inherit dark:md:hover:bg-inherit"
        >
            <Typography
                as="li"
                variant="small"
                className="text-base font-medium"
            >
                {name}
            </Typography>
        </a>
    );
}

function NavList() {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "dark",
    );

    const applyTheme = (theme) => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else if (theme === "light") {
            document.documentElement.classList.remove("dark");
        } else {
            return;
        }
        localStorage.setItem("theme", theme);
        setTheme(theme);
    };

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";

        // Apply the new theme
        applyTheme(newTheme);
    };

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return (
        <ul className="my-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-4 lg:gap-6">
            {[
                { name: "About", href: "#" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Education", href: "#education" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" },
            ].map(({ name, href }) => (
                <NavItem key={name} href={href} name={name} />
            ))}

            <IconButton
                id="theme-toggle-btn"
                onClick={toggleTheme}
                ripple={false}
                className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 dt w-10 h-10 rounded-full focus:outline-none flex justify-center items-center relative"
                aria-label="Toggle Theme"
            >
                <SunIcon
                    className={`h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                        theme === "light" ? "opacity-100" : "opacity-0"
                    }`}
                />
                <MoonIcon
                    className={`h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                        theme === "dark" ? "opacity-100" : "opacity-0"
                    }`}
                />
            </IconButton>
        </ul>
    );
}

export default function Header() {
    const [openNav, setOpenNav] = useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <header className="sticky top-0 z-20">
            <Navbar className="mx-auto px-6 py-3 md:px-14 lg:px-24 lg:py-5 border-b border-t-0 border-r-0 border-l-0 border-black dark:border-gray-500  bg-gray-50 dt dark:bg-gray-900 text-gray-800 dark:text-white">
                <div className="flex items-center justify-between">
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="cursor-pointer py-1.5 font-bold text-xl capitalize whitespace-nowrap"
                    >
                        Anas Bashir
                    </Typography>
                    <div className="hidden md:block">
                        <NavList />
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden text-inherit"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <div className="md:hidden overflow-hidden">
                        <NavList />
                    </div>
                </Collapse>
            </Navbar>
        </header>
    );
}
