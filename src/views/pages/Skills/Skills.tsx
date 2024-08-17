export function Skills() {
    return (
        <div className="skills-container flex flex-col items-center justify-center min-h-screen bg-darkBlue text-white p-8">
            <div className="max-w-4xl text-center space-y-8">
                <h1 className="text-5xl font-extrabold text-neonBlue">My Skills</h1>
                <p className="text-lg leading-relaxed">
                    Here are some of the technologies and tools I have experience with. I enjoy learning new things and continuously improving my skill set.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <i className="fab fa-react fa-3x hover:scale-105 transition-transform duration-300" title="React"></i> {/* React */}
                    <i className="fab fa-js-square fa-3x hover:scale-105 transition-transform duration-300" title="JavaScript"></i> {/* JavaScript */}
                    <i className="fab fa-css3-alt fa-3x hover:scale-105 transition-transform duration-300" title="CSS"></i> {/* CSS */}
                    <i className="fab fa-html5 fa-3x hover:scale-105 transition-transform duration-300" title="HTML"></i> {/* HTML */}
                    <i className="fab fa-git fa-3x hover:scale-105 transition-transform duration-300" title="Git"></i> {/* Git */}
                    <i className="fab fa-node fa-3x hover:scale-105 transition-transform duration-300" title="Node.js"></i> {/* Node.js */}
                    <i className="fab fa-figma fa-3x hover:scale-105 transition-transform duration-300" title="Figma"></i> {/* Figma */}
                    <i className="fab fa-python fa-3x hover:scale-105 transition-transform duration-300" title="Python"></i> {/* Python */}
                    <i className="fab fa-java fa-3x hover:scale-105 transition-transform duration-300" title="Java"></i> {/* Java */}
                    <i className="fab fa-docker fa-3x hover:scale-105 transition-transform duration-300" title="Docker"></i> {/* Docker */}
                    <i className="fab fa-aws fa-3x hover:scale-105 transition-transform duration-300" title="AWS"></i> {/* AWS */}
                    <i className="fab fa-sass fa-3x hover:scale-105 transition-transform duration-300" title="Sass"></i> {/* Sass */}
                    <i className="fab fa-mongodb fa-3x hover:scale-105 transition-transform duration-300" title="MongoDB"></i> {/* MongoDB */}
                </div>
            </div>
        </div>
    );
}