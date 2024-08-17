export function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-darkBlue text-neonBlue">
            <div className="text-center space-y-6 sm:space-y-8 px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">Welcome to My Portfolio</h1>
                <p className="text-lg sm:text-xl max-w-xl sm:max-w-2xl mx-auto text-gray-200">Explore my work,
                    learn more about my skills,<br className="hidden sm:block" />and discover the projects I've been working on.</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a href="/My-Portfolio-V2/about" className="bg-neonBlue text-darkBlue px-6 py-3 rounded-lg font-semibold shadow-lg 
                    hover:scale-105 transition duration-300">About Me</a>
                    <a href="src/assets/pdf/Kavithma-Thushal-Resume.pdf" download="Kavithma-Thushal-Resume.pdf" className="bg-darkBlue text-neonBlue border 
                    border-neonBlue px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition duration-300">Download CV</a>
                </div>
            </div>
        </div>
    );
}