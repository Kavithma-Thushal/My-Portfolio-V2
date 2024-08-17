import React from 'react';
import './Contacts.css';

export function Contacts() {
    return (
        <div className="contacts-container flex flex-col items-center justify-center min-h-screen bg-darkBlue text-white p-8">
            <div className="max-w-4xl text-center space-y-8">
                <h1 className="text-5xl font-extrabold text-neonBlue">Contact Me</h1>
                <p className="text-lg leading-relaxed">
                    I'm always open to new opportunities and collaborations. Feel free to reach out to me using the contact form below, or connect with me through social media.
                </p>
                <form className="bg-darkBlue p-6 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                        <textarea id="message" name="message" rows={4} className="w-full p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="mt-4 bg-neonBlue text-darkBlue px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-500 transition duration-300">
                        Send Message
                    </button>
                </form>
                <div className="mt-8">
                    <p className="text-lg">Or connect with me on social media:</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neonBlue hover:text-blue-300 transition duration-300">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neonBlue hover:text-blue-300 transition duration-300">LinkedIn</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neonBlue hover:text-blue-300 transition duration-300">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}