import './Skills.css';

export function Skills() {
    return (
        <div className="skills-container flex flex-col items-center justify-center min-h-screen bg-darkBlue text-white p-8">
            <div className="max-w-4xl text-center space-y-8">
                <h1 className="text-5xl font-extrabold text-neonBlue">My Skills</h1>
                <p className="text-lg leading-relaxed">
                    Here are some of the technologies and tools I have experience with. I enjoy learning new things and continuously improving my skill set.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                    <div className="skill-item bg-neonBlue text-darkBlue p-4 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
                        <h2 className="text-xl font-bold">React</h2>
                    </div>
                    <div className="skill-item bg-neonBlue text-darkBlue p-4 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
                        <h2 className="text-xl font-bold">TypeScript</h2>
                    </div>
                    <div className="skill-item bg-neonBlue text-darkBlue p-4 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
                        <h2 className="text-xl font-bold">Tailwind CSS</h2>
                    </div>
                    <div className="skill-item bg-neonBlue text-darkBlue p-4 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
                        <h2 className="text-xl font-bold">JavaScript</h2>
                    </div>
                    <div className="skill-item bg-neonBlue text-darkBlue p-4 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
                        <h2 className="text-xl font-bold">Git</h2>
                    </div>
                    <div className="skill-item bg-neonBlue text-darkBlue p-4 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
                        <h2 className="text-xl font-bold">HTML & CSS</h2>
                    </div>
                    <div className="skill-item bg-neonBlue text-darkBlue p-4 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
                        <h2 className="text-xl font-bold">Node.js</h2>
                    </div>
                    <div className="skill-item bg-neonBlue text-darkBlue p-4 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
                        <h2 className="text-xl font-bold">UI/UX Design</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}