export function Services() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-darkBlue text-white p-4 sm:p-8 lg:pt-24 lg:pb-24 pt-16">
            <div className="max-w-4xl text-center space-y-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neonBlue mb-4">My Services</h1>
                <p className="text-base sm:text-lg leading-relaxed mb-6">I offer a range of services to help bring your ideas to life.
                    Whether you need a website, app, or design software development, I'm here to help.</p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 mt-6 sm:mt-8">
                    <div className="service-item p-4 sm:p-6 rounded-lg shadow-lg border border-neonBlue hover:scale-105 transition-transform 
                    duration-300">
                        <h2 className="text-xl sm:text-2xl font-bold">Web Development</h2>
                        <p className="mt-2 text-sm sm:text-base">Building responsive and dynamic websites using modern technologies like React,
                            Tailwind CSS, and more.</p>
                    </div>
                    <div className="service-item p-4 sm:p-6 rounded-lg shadow-lg border border-neonBlue hover:scale-105 transition-transform 
                    duration-300">
                        <h2 className="text-xl sm:text-2xl font-bold">App Development</h2>
                        <p className="mt-2 text-sm sm:text-base">Building innovative and intuitive mobile applications using React Native
                            and Flutter.</p>
                    </div>
                    <div className="service-item p-4 sm:p-6 rounded-lg shadow-lg border border-neonBlue hover:scale-105 transition-transform 
                    duration-300">
                        <h2 className="text-xl sm:text-2xl font-bold">Consulting</h2>
                        <p className="mt-2 text-sm sm:text-base">Offering expert advice and insights on web development, project planning, and
                            best practices.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}