"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            message: ""
        }
    );

    const [status, setStatus] = useState("");

    function handleChange(e) {
        setFormData({...formData ,[e.target.name]:e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");

        emailjs.send("service_2prbekp" , "template_p6a33yq" , formData,
            "kErfTdqjMnt1scxuA")
            .then(() => {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                // setStatus("error");
                 console.log("EmailJS error:", error);
                 setStatus("error");
            })
    }

    return (
        <main className="min-h-screen px-6 py-20 bg-white dark:bg-gray-950">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-10 text-center">Get in Touch</h1>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-5">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32 resize-none"
                />

                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-purple-600 text-white font-medium py-3 rounded-lg transition hover:bg-purple-700 hover:scale-[1.02] disabled:opacity-50"
                    >
                    {status === "sending" ? "Sending..." : "Send Message"}
               </button>
            </form>

            {status === "success" && <p className="text-green-600 dark:text-green-400 text-center font-medium">Message sent successfully! 🎉</p>}
            {status === "error" && <p className="text-red-600 dark:text-red-400 text-center font-medium">Something went wrong. Please try again.</p>}
        </main>
    );
}