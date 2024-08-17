import './About.css';

export function About() {
    return (
        <div className="about-container flex flex-col items-center justify-center min-h-screen bg-darkBlue text-white p-8">
            <div className="max-w-4xl text-center space-y-6">
                <h1 className="text-5xl font-extrabold text-neonBlue">About Me</h1>
                <p className="text-lg leading-relaxed">
                    I'm a passionate developer with experience in creating modern web applications. My journey started with a curiosity for technology, and it has led me to work on various exciting projects. I specialize in using React, TypeScript, and Tailwind CSS to build responsive and interactive user interfaces.
                </p>
                <p className="text-lg leading-relaxed">
                    My approach to development is driven by a desire to solve problems creatively and efficiently. I love collaborating with others, learning new technologies, and continuously improving my skills. Whether it's front-end development, UI/UX design, or exploring new frameworks, I'm always eager to take on new challenges.
                </p>
                <a href="/projects" className="about-button inline-block bg-neonBlue text-darkBlue px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-500 transition duration-300">
                    View My Projects
                </a>
            </div>
        </div>
    );
}