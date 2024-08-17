import { Link } from "react-router-dom";
// import logo from "../../../assets/images/logo.png";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="bg-darkBlue text-white p-2 pr-7 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <a href="https://github.com/Kavithma-Thushal/My-Portfolio-V2" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center">
            {/* <img src={logo} className="Nav-logo ml-5 mr-5 mt-2" alt="Nav-logo" /> */}
            <div className="text-2xl font-bold">P O R T F O <span className="text-neonBlue">L I O</span></div>
          </div>
        </a>
        <div className="space-x-10 mr-8 text-1xl font-semibold">
          <Link to="/My-Portfolio-V2/home" className="hover:text-neonBlue transition-colors duration-300">HOME</Link>
          <Link to="/My-Portfolio-V2/about" className="hover:text-neonBlue transition-colors duration-300">ABOUT</Link>
          <Link to="/My-Portfolio-V2/skills" className="hover:text-neonBlue transition-colors duration-300">SKILLS</Link>
          <Link to="/My-Portfolio-V2/projects" className="hover:text-neonBlue transition-colors duration-300">PROJECTS</Link>
          <Link to="/My-Portfolio-V2/services" className="hover:text-neonBlue transition-colors duration-300">SERVICES</Link>
          <Link to="/My-Portfolio-V2/contacts" className="hover:text-neonBlue transition-colors duration-300">CONTACTS</Link>
        </div>
      </div>
    </nav>
  );
}