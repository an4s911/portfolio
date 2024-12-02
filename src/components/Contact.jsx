import axios from "axios";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";

function Contact() {
    const [formSubmissionError, setFormSubmissionError] = useState(false);
    const [formSubmissionSuccess, setFormSubmissionSuccess] = useState(false);

    return (
        <section id="contact">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <p className="mb-4">
                        I'm always open to new opportunities and collaborations.
                        Feel free to reach out!
                    </p>
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
            <div className="w-full md:w-1/2 lg:w-1/2">
                {formSubmissionError && (
                    <div className="text-white bg-red-500 p-4 mb-4">
                        There was an error submitting the form, please submit
                        again
                    </div>
                )}
                {formSubmissionSuccess && (
                    <div className="text-white bg-green-500 rounded-md p-4 mb-4">
                        Form submitted successfully
                    </div>
                )}
                <form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
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
                                setFormSubmissionError(false);
                                setFormSubmissionSuccess(true);
                                e.target.reset();
                            })
                            .catch((err) => {
                                setFormSubmissionError(true);
                                setFormSubmissionSuccess(false);
                                console.log(err);
                            });
                    }}
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
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="dt bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-max"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
