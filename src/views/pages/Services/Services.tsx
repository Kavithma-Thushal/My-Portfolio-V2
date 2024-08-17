import './Services.css';

export function Services() {
    return (
        <div className="services-container flex flex-col items-center justify-center min-h-screen bg-darkBlue text-white p-8">
            <div className="max-w-4xl text-center space-y-8">
                <h1 className="text-5xl font-extrabold text-neonBlue">My Services</h1>
                <p className="text-lg leading-relaxed">
                    I offer a range of services to help you bring your ideas to life. Whether you need a website, app, or design consultation, I'm here to help.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <div className="service-item bg-neonBlue text-darkBlue p-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
                        <h2 className="text-2xl font-bold">Web Development</h2>
                        <p className="mt-2">
                            Building responsive and dynamic websites using modern technologies like React, Tailwind CSS, and more.
                        </p>
                    </div>
                    <div className="service-item bg-neonBlue text-darkBlue p-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
                        <h2 className="text-2xl font-bold">UI/UX Design</h2>
                        <p className="mt-2">
                            Crafting user-friendly interfaces and engaging user experiences with a focus on usability and aesthetics.
                        </p>
                    </div>
                    <div className="service-item bg-neonBlue text-darkBlue p-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
                        <h2 className="text-2xl font-bold">Consulting</h2>
                        <p className="mt-2">
                            Offering expert advice and insights on web development, project planning, and best practices.
                        </p>
                    </div>
                    {/* Add more service items as needed */}
                </div>
            </div>
        </div>
    );
}