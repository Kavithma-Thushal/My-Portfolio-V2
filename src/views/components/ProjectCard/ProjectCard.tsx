const ProjectCard = ({
    projectName,
    description,
    technologies,
    githubLink,
    images,
    currentImageIndex,
    onPreviousImage,
    onNextImage,
    onClickImage,
}) => {
    return (
        <div className="bg-white p-8 rounded-lg flex flex-col md:flex-row md:items-center">
            <div className="flex flex-col items-center md:w-1/2">

                <img src={images[currentImageIndex]} alt={`${projectName} Screenshot`} onClick={onClickImage}
                    className="w-full h-auto rounded-lg object-contain border-2 border-gray-200 shadow-md cursor-pointer" />

                <div className="flex justify-center gap-2 mt-4">

                    <button onClick={onPreviousImage}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white shadow-md 
                        transition-colors hover:bg-gray-800">
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <button onClick={onNextImage}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white shadow-md 
                        transition-colors hover:bg-gray-800">
                        <i className="fas fa-chevron-right"></i>
                    </button>

                </div>
            </div>

            <div className="md:ml-8 md:mt-0 md:flex md:items-center md:justify-center md:w-1/2 text-center md:text-left">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">{projectName}</h2>
                    <p className="mt-5 text-gray-800 leading-relaxed">{description}</p>
                    <p className="mt-3 text-gray-700">
                        <span className="font-bold">Tools & Technologies</span>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            {technologies.map((technologies, index) => (
                                <li key={index} className="bg-blue-400 text-white inline-block px-3 py-1 rounded mr-2">{technologies}</li>
                            ))}
                        </ul>
                    </p>

                    <a href={githubLink} target="_blank" rel="noopener noreferrer"
                        className="ml-5 block mt-8 font-bold text-center inline-flex items-center px-3 py-1 rounded bg-black 
                        text-white hover:scale-105 transition duration-300">
                        <i className="fab fa-github mr-2"></i> View on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;