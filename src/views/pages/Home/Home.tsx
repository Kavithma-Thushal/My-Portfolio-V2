import './Home.css';

export function Home() {
    return (
        <div className="home-container flex items-center justify-center min-h-screen bg-darkBlue text-neonBlue">
            <div className="text-center space-y-6">
                <h1 className="text-6xl font-extrabold">Welcome to My Portfolio</h1>
                <p className="text-xl max-w-2xl mx-auto text-white">
                    Explore my work, learn more about my skills, and discover the projects I've been working on..
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="/about" className="home-button bg-neonBlue text-darkBlue px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-500 transition duration-300">About Me</a>
                    <a href="/projects" className="home-button bg-darkBlue text-neonBlue border border-neonBlue px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-800 transition duration-300">View Projects</a>
                </div>
            </div>
        </div>
    );
}