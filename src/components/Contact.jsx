import { SocialIcon } from "react-social-icons";

function Contact() {
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
                <div>
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            e.target.reset();
                        }}
                    >
                        {/* For now the form is disabled */}
                        {/* TODO: I will enable it after adding a backend mechanism to make it work */}
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
                                disabled
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
                                disabled
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
                                disabled
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
            </div>
        </section>
    );
}

export default Contact;
