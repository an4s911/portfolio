import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";

function Contact() {
    const [formSubmissionError, setFormSubmissionError] = useState(false);
    const [formSubmissionSuccess, setFormSubmissionSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios
            .post(
                `${import.meta.env.VITE_API_URL}/api/send-email/`,
                new URLSearchParams(new FormData(e.target)),
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                },
            )
            .then((res) => {
                if (res.status === 200) {
                    setFormSubmissionError(false);
                    setFormSubmissionSuccess(true);
                    e.target.reset();
                } else {
                    throw new Error(res.statusText);
                }
            })
            .catch((err) => {
                setFormSubmissionError(true);
                setFormSubmissionSuccess(false);
                console.error(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section
            id="contact"
            className="flex flex-col md:flex-row items-center w-full gap-10 md:gap-12 lg:gap-20"
        >
            <div className="flex-1">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <p className="mb-4">
                    I'm always open to new opportunities and collaborations.
                    Feel free to reach out!
                </p>
                <div>
                    <ul className="flex flex-wrap gap-4">
                        {[
                            "https://www.linkedin.com/in/an4s911",
                            "https://github.com/an4s911",
                            "https://x.com/an4s911",
                            "https://www.instagram.com/an4s911",
                        ].map((url, index) => (
                            <SocialIcon
                                key={index}
                                url={url}
                                target="_blank"
                                className="dt shadow-md rounded-full dark:shadow-[#1f252f] hover:scale-110"
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <div
                className={`w-full md:w-1/2 lg:w-1/2 ${
                    formSubmissionSuccess
                        ? "flex justify-center items-center"
                        : ""
                } ${isLoading && "relative"}`}
            >
                {formSubmissionError && (
                    <div className="text-white bg-red-500 p-4 mb-4 rounded-md">
                        There was an error submitting the form, please submit
                        again
                    </div>
                )}
                {formSubmissionSuccess && (
                    <div className="text-white px-8 py-4 text-xl font-bold text-center bg-gray-600 rounded-md w-max sm:w-min mt-4 sm:text-nowrap">
                        Your message has been sent!
                        <br />
                        Thank you
                    </div>
                )}
                {isLoading && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <LoaderCircle className="animate-spin opacity-70 h-16 w-16" />
                        {/* <svg */}
                        {/*     className="animate-spin -ml-1 mr-3 h-10 w-10 text-white" */}
                        {/*     xmlns="http://www.w3.org/2000/svg" */}
                        {/*     fill="none" */}
                        {/*     viewBox="0 0 24 24" */}
                        {/* > */}
                        {/*     <circle */}
                        {/*         className="opacity-25" */}
                        {/*         cx="12" */}
                        {/*         cy="12" */}
                        {/*         r="10" */}
                        {/*         stroke="currentColor" */}
                        {/*         strokeWidth="4" */}
                        {/*     ></circle> */}
                        {/*     <path */}
                        {/*         className="opacity-75" */}
                        {/*         fill="currentColor" */}
                        {/*         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" */}
                        {/*     ></path> */}
                        {/* </svg> */}
                    </div>
                )}
                <form
                    className={`flex flex-col gap-4 ${(formSubmissionSuccess || isLoading) && "hidden"}`}
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label htmlFor="name" className="block">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border rounded"
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border rounded"
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full p-2 border rounded"
                            required
                            disabled={isLoading}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="dt bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-max disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
