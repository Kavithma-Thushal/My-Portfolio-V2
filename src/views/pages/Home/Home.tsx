export function Home() {
    return (
        <div className="home-container flex items-center justify-center min-h-screen bg-darkBlue text-neonBlue">
            <div className="text-center space-y-8">
                <h1 className="text-6xl font-extrabold animate-fade-in">Welcome to My Portfolio</h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-200 animate-fade-in-delay">
                    Explore my work, learn more about my skills,<br /> and discover the projects I've been working on.
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="/My-Portfolio-V2/about" className="bg-neonBlue text-darkBlue px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition duration-300">About Me</a>
                    <a href="/My-Portfolio-V2/projects" className="bg-darkBlue text-neonBlue border border-neonBlue px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition duration-300">View Projects</a>
                </div>
            </div>
        </div>
    );
}