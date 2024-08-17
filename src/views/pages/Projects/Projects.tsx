import { useState } from 'react';
import PopUpImage from './PopUpImage';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const shoeShopImages = [
  // 'src/assets/images/projects/Shoe-Shop/Theme.png',
  'src/assets/images/projects/Shoe-Shop/Home.png',
  'src/assets/images/projects/Shoe-Shop/SignUp.png',
  'src/assets/images/projects/Shoe-Shop/SignIn.png',
  'src/assets/images/projects/Shoe-Shop/Admin-Dashboard.png',
  'src/assets/images/projects/Shoe-Shop/Customer.png',
  'src/assets/images/projects/Shoe-Shop/Employee.png',
  'src/assets/images/projects/Shoe-Shop/Supplier.png',
  'src/assets/images/projects/Shoe-Shop/Inventory.png',
  'src/assets/images/projects/Shoe-Shop/Sales.png',
  'src/assets/images/projects/Shoe-Shop/Admin.png',
  'src/assets/images/projects/Shoe-Shop/User.png',
  'src/assets/images/projects/Shoe-Shop/Codes.png',
];

const computerShopImages = [
  // 'src/assets/images/projects/Computer-Shop/Theme.png',
  'src/assets/images/projects/Computer-Shop/Login.png',
  'src/assets/images/projects/Computer-Shop/Admin-Dashboard.png',
  'src/assets/images/projects/Computer-Shop/Customer.png',
  'src/assets/images/projects/Computer-Shop/Supplier.png',
  'src/assets/images/projects/Computer-Shop/Store.png',
  'src/assets/images/projects/Computer-Shop/Salary.png',
  'src/assets/images/projects/Computer-Shop/Orders.png',
  'src/assets/images/projects/Computer-Shop/Reports.png',
  'src/assets/images/projects/Computer-Shop/Customer-Report.png',
  'src/assets/images/projects/Computer-Shop/Codes.png',
];

const hostelManagementImages = [
  // 'src/assets/images/projects/Hostel-Management/Theme.png',
  'src/assets/images/projects/Hostel-Management/Home.png',
  'src/assets/images/projects/Hostel-Management/Admin-Dashboard.png',
  'src/assets/images/projects/Hostel-Management/Students.png',
  'src/assets/images/projects/Hostel-Management/Rooms.png',
  'src/assets/images/projects/Hostel-Management/Reservation.png',
  'src/assets/images/projects/Hostel-Management/Key-Money.png',
  'src/assets/images/projects/Hostel-Management/User.png',
  'src/assets/images/projects/Hostel-Management/Reports.png',
  'src/assets/images/projects/Hostel-Management/Codes.png',
];

const chatApplicationImages = [
  // 'src/assets/images/projects/Chat-Application/Theme.png',
  'src/assets/images/projects/Chat-Application/Chat-Room-1.png',
  'src/assets/images/projects/Chat-Application/Chat-Room-2.png',
  'src/assets/images/projects/Chat-Application/Codes.png',
  'src/assets/images/projects/Chat-Application/Live-Chat-Room.gif',
];

const shoeShopLandingImages = [
  // 'src/assets/images/projects/Shoe-Shop-Landing/Theme.png',
  'src/assets/images/projects/Shoe-Shop-Landing/Home.png',
  'src/assets/images/projects/Shoe-Shop-Landing/About.png',
  'src/assets/images/projects/Shoe-Shop-Landing/Shoe-Collection-1.png',
  'src/assets/images/projects/Shoe-Shop-Landing/Shoe-Collection-2.png',
  'src/assets/images/projects/Shoe-Shop-Landing/CTA.png',
  'src/assets/images/projects/Shoe-Shop-Landing/Reviews.png',
  'src/assets/images/projects/Shoe-Shop-Landing/Discount.png',
  'src/assets/images/projects/Shoe-Shop-Landing/Contacts.png',
  'src/assets/images/projects/Shoe-Shop-Landing/Codes.png',
];

const portfolioImages = [
  // 'src/assets/images/projects/My-Portfolio/Theme.png',
  'src/assets/images/projects/My-Portfolio/Home.png',
  'src/assets/images/projects/My-Portfolio/About.png',
  'src/assets/images/projects/My-Portfolio/Skills.png',
  'src/assets/images/projects/My-Portfolio/Services.png',
  'src/assets/images/projects/My-Portfolio/Projects.png',
  'src/assets/images/projects/My-Portfolio/Assignments.png',
  'src/assets/images/projects/My-Portfolio/Applications.png',
  'src/assets/images/projects/My-Portfolio/Gallery.png',
  'src/assets/images/projects/My-Portfolio/Contact.png',
  'src/assets/images/projects/My-Portfolio/Contact2.png',
  'src/assets/images/projects/My-Portfolio/Codes.png',
];

const linkedInCloneImages = [
  // 'src/assets/images/projects/LinkedIn-Clone/Theme.png',
  'src/assets/images/projects/LinkedIn-Clone/Home.png',
  'src/assets/images/projects/LinkedIn-Clone/Network.png',
  'src/assets/images/projects/LinkedIn-Clone/Post.png',
  'src/assets/images/projects/LinkedIn-Clone/Notification.png',
  'src/assets/images/projects/LinkedIn-Clone/Jobs.png',
  'src/assets/images/projects/LinkedIn-Clone/Profile.png',
  'src/assets/images/projects/LinkedIn-Clone/Codes.png',
];

const mernPOSImages = [
  'src/assets/images/projects/MERN-POS/Theme.png',
  'src/assets/images/projects/MERN-POS/Customer.png',
  'src/assets/images/projects/MERN-POS/Item.png',
  'src/assets/images/projects/MERN-POS/Codes.png',
];

const connect4Images = [
  'src/assets/images/projects/Connect-4-Game/Theme.png',
  'src/assets/images/projects/Connect-4-Game/User-Name.png',
  'src/assets/images/projects/Connect-4-Game/Game-Play.png',
  'src/assets/images/projects/Connect-4-Game/Codes.png',
];

export function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState('');
  const [currentShoeShopImage, setCurrentShoeShopImage] = useState(0);
  const [currentComputerShopImage, setCurrentComputerShopImage] = useState(0);
  const [currentHostelManagementImage, setCurrentHostelManagementImage] = useState(0);
  const [currentChatApplicationImage, setCurrentChatApplicationImage] = useState(0);
  const [currentShoeShopLandingImage, setCurrentShoeShopLandingImage] = useState(0);
  const [currentPortfolioImage, setCurrentPortfolioImage] = useState(0);
  const [currentLinkedinImage, setCurrentLinkedinImage] = useState(0);
  const [currentMernPOSImage, setCurrentMernPOSImage] = useState(0);
  const [currentConnect4Image, setCurrentConnect4Image] = useState(0);

  const openModal = (projectType) => {
    setIsModalOpen(true);
    setCurrentProject(projectType);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkBlue pt-20 pb-5">
      <h1 className="text-4xl font-bold text-center text-neonBlue mb-10 fixed top-0 left-0 right-0 z-10 mt-20 bg-darkBlue pb-5">My Projects</h1>

      <div className="max-w-7xl px-6 space-y-32 fade-in mt-20">

        <ProjectCard projectName="Shoe Shop Management System"
          description="Hello Shoes (PVT) LTD. offers a comprehensive Shoe Shop Management System with a modern frontend and a Spring Boot
                backend. It provides an intuitive interface for managing customers, employees, suppliers, inventory, and sales,
                supported by robust RESTful APIs for role-based authentication and efficient system management."
          technologies={["HTML", "CSS", "JavaScript", "AJAX", "JQuery", "Bootstrap", "Spring Boot", "Spring Data JPA", "Spring Validation",
            "MySQL", "Spring Security", "JSON Web Token (JWT)"]}
          githubLink="https://github.com/Kavithma-Thushal/Hello-Shoes-2nd-Sem-Final"
          images={shoeShopImages}
          currentImageIndex={currentShoeShopImage}
          onNextImage={() => setCurrentShoeShopImage((prev) => (prev + 1) % shoeShopImages.length)}
          onPreviousImage={() => setCurrentShoeShopImage((prev) => (prev - 1 + shoeShopImages.length) % shoeShopImages.length)}
          onClickImage={() => openModal('shoeShop')} />

        <ProjectCard projectName="Computer Shop Management System"
          description="The Computer Shop Management System is a comprehensive standalone application built using JavaFX. It offers an 
          intuitive interface for managing customers, employees, suppliers, inventory, and orders. The system also integrates Jasper 
          Reports for generating detailed reports, providing an efficient solution for managing various aspects of a computer shop's operations."
          technologies={["Java", "JavaFX", "Maven", "MySQL", "Jasper Report"]}
          githubLink="https://github.com/Kavithma-Thushal/Computershop-Management-System-1st-Sem-Final"
          images={computerShopImages}
          currentImageIndex={currentComputerShopImage}
          onNextImage={() => setCurrentComputerShopImage((prev) => (prev + 1) % computerShopImages.length)}
          onPreviousImage={() => setCurrentComputerShopImage((prev) => (prev - 1 + computerShopImages.length) % computerShopImages.length)}
          onClickImage={() => openModal('computerShop')} />

        <ProjectCard projectName="Hostel Management System"
          description="The Hostel Management System, built with JavaFX, provides an intuitive interface for managing students, room allocations,
                reservations, and user logins. Students can secure rooms by paying key money, streamlining hostel operations and record-keeping."
          technologies={["Java", "JavaFX", "Maven", "MySQL", "Hibernate"]}
          githubLink="https://github.com/Kavithma-Thushal/Hostel-Management-System"
          images={hostelManagementImages}
          currentImageIndex={currentHostelManagementImage}
          onNextImage={() => setCurrentHostelManagementImage((prev) => (prev + 1) % hostelManagementImages.length)}
          onPreviousImage={() => setCurrentHostelManagementImage((prev) => (prev - 1 + hostelManagementImages.length) % hostelManagementImages.length)}
          onClickImage={() => openModal('hostelManagement')} />

        <ProjectCard projectName="Chat Application"
          description="Introducing our innovative Multi-Threaded Chat Application, built in Java with a client-server architecture for real-time communication. Utilizing socket programming and multi-threading in Java, this application enables fast and secure messaging, file sharing, and multimedia exchange across both local and distributed networks."
          technologies={["Java", "JavaFX", "Java Threads", "Java Sockets"]}
          githubLink="https://github.com/Kavithma-Thushal/ChatApplication"
          images={chatApplicationImages}
          currentImageIndex={currentChatApplicationImage}
          onNextImage={() => setCurrentChatApplicationImage((prev) => (prev + 1) % chatApplicationImages.length)}
          onPreviousImage={() => setCurrentChatApplicationImage((prev) => (prev - 1 + chatApplicationImages.length) % chatApplicationImages.length)}
          onClickImage={() => openModal('chatApplication')} />

        <ProjectCard projectName="Shoe Shop Landing Page"
          description="This Shoe Shop Landing Page houses the code for our sleek and user-friendly site, crafted to highlight our brand and product offerings. Designed with a modern and responsive layout, this page ensures a seamless user experience across all devices."
          technologies={["HTML", "CSS", "JavaScript"]}
          githubLink="https://github.com/Kavithma-Thushal/Shoe-Shop-Landing-Page"
          images={shoeShopLandingImages}
          currentImageIndex={currentShoeShopLandingImage}
          onNextImage={() => setCurrentShoeShopLandingImage((prev) => (prev + 1) % shoeShopLandingImages.length)}
          onPreviousImage={() => setCurrentShoeShopLandingImage((prev) => (prev - 1 + shoeShopLandingImages.length) % shoeShopLandingImages.length)}
          onClickImage={() => openModal('shoeShopLanding')} />

        <ProjectCard projectName="My Portfolio"
          description="My Portfolio highlights my top projects and skills, showcasing my creativity, dedication, and growth. It reflects my approach to problem-solving and continuous learning, offering insights into my innovative solutions and commitment to excellence."
          technologies={["HTML", "CSS", "JavaScript", "Figma"]}
          githubLink="https://github.com/Kavithma-Thushal/MyPortfolio"
          images={portfolioImages}
          currentImageIndex={currentPortfolioImage}
          onNextImage={() => setCurrentPortfolioImage((prev) => (prev + 1) % portfolioImages.length)}
          onPreviousImage={() => setCurrentPortfolioImage((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)}
          onClickImage={() => openModal('portfolio')} />

        <ProjectCard projectName="LinkedIn Clone - Mobile Application"
          description="This is my First Mobile Application: LinkedIn Clone App, developed using React Native. I focused on replicating the core functionalities and UI of LinkedIn to ensure a user-friendly experience. An Android Emulator was used for testing and debugging, which was essential in fine-tuning the app's performance and usability."
          technologies={["React Native", "Android Studio", "VS Code"]}
          githubLink="https://github.com/Kavithma-Thushal/LinkedIn-Clone-App"
          images={linkedInCloneImages}
          currentImageIndex={currentMernPOSImage}
          onNextImage={() => setCurrentLinkedinImage((prev) => (prev + 1) % linkedInCloneImages.length)}
          onPreviousImage={() => setCurrentLinkedinImage((prev) => (prev - 1 + linkedInCloneImages.length) % linkedInCloneImages.length)}
          onClickImage={() => openModal('linkedinClone')} />

        <ProjectCard projectName="Simple MERN POS"
          description="This is my First MERN Application .A straightforward Point of Sale system developed using the MERN stack. This application includes essential features like customer management, item management, and order placement, offering a comprehensive solution for basic sales operations."
          technologies={["React.js", "Axios", "Node.js", "Express.js", "MongoDB"]}
          githubLink="https://github.com/Kavithma-Thushal/MERN-POS"
          images={mernPOSImages}
          currentImageIndex={currentMernPOSImage}
          onNextImage={() => setCurrentMernPOSImage((prev) => (prev + 1) % mernPOSImages.length)}
          onPreviousImage={() => setCurrentMernPOSImage((prev) => (prev - 1 + mernPOSImages.length) % mernPOSImages.length)}
          onClickImage={() => openModal('mernPOS')} />

        <ProjectCard projectName="Connect 4 Game"
          description="I created this Connect 4 game as a way to deepen my understanding of Object-Oriented Programming (OOP) in Java. Through this project, I explored the principles of encapsulation, inheritance, polymorphism and abstraction, all while bringing a classic game to life."
          technologies={["Java", "JavaFX", "OOP"]}
          githubLink="https://github.com/Kavithma-Thushal/connect-four-assignment"
          images={connect4Images}
          currentImageIndex={currentConnect4Image}
          onNextImage={() => setCurrentConnect4Image((prev) => (prev + 1) % connect4Images.length)}
          onPreviousImage={() => setCurrentConnect4Image((prev) => (prev - 1 + connect4Images.length) % connect4Images.length)}
          onClickImage={() => openModal('connect4')} />

      </div>

      <PopUpImage isOpen={isModalOpen} onClose={closeModal}
        imageSrc={currentProject === 'shoeShop' ? shoeShopImages[currentShoeShopImage] :
          currentProject === 'computerShop' ? computerShopImages[currentComputerShopImage] :
            currentProject === 'hostelManagement' ? hostelManagementImages[currentHostelManagementImage] :
              currentProject === 'chatApplication' ? chatApplicationImages[currentChatApplicationImage] :
                currentProject === 'shoeShopLanding' ? shoeShopLandingImages[currentShoeShopLandingImage] :
                  currentProject === 'portfolio' ? portfolioImages[currentPortfolioImage] :
                    currentProject === 'linkedinClone' ? linkedInCloneImages[currentLinkedinImage] :
                      currentProject === 'mernPOS' ? mernPOSImages[currentMernPOSImage] :
                        currentProject === 'connect4' ? connect4Images[currentConnect4Image] : ''}

        onNext={currentProject === 'shoeShop' ? () => setCurrentShoeShopImage((prev) => (prev + 1) % shoeShopImages.length) :
          currentProject === 'computerShop' ? () => setCurrentComputerShopImage((prev) => (prev + 1) % computerShopImages.length) :
            currentProject === 'hostelManagement' ? () => setCurrentHostelManagementImage((prev) => (prev + 1) % hostelManagementImages.length) :
              currentProject === 'chatApplication' ? () => setCurrentChatApplicationImage((prev) => (prev + 1) % chatApplicationImages.length) :
                currentProject === 'shoeShopLanding' ? () => setCurrentShoeShopLandingImage((prev) => (prev + 1) % shoeShopLandingImages.length) :
                  currentProject === 'portfolio' ? () => setCurrentPortfolioImage((prev) => (prev + 1) % portfolioImages.length) :
                    currentProject === 'linkedinClone' ? () => setCurrentLinkedinImage((prev) => (prev + 1) % linkedInCloneImages.length) :
                      currentProject === 'mernPOS' ? () => setCurrentMernPOSImage((prev) => (prev + 1) % mernPOSImages.length) :
                        currentProject === 'connect4' ? () => setCurrentConnect4Image((prev) => (prev + 1) % connect4Images.length) : () => { }}

        onPrevious={currentProject === 'shoeShop' ? () => setCurrentShoeShopImage((prev) => (prev - 1 + shoeShopImages.length) % shoeShopImages.length) :
          currentProject === 'computerShop' ? () => setCurrentComputerShopImage((prev) => (prev - 1 + computerShopImages.length) % computerShopImages.length) :
            currentProject === 'hostelManagement' ? () => setCurrentHostelManagementImage((prev) => (prev - 1 + hostelManagementImages.length) % hostelManagementImages.length) :
              currentProject === 'chatApplication' ? () => setCurrentChatApplicationImage((prev) => (prev - 1 + chatApplicationImages.length) % chatApplicationImages.length) :
                currentProject === 'shoeShopLanding' ? () => setCurrentShoeShopLandingImage((prev) => (prev - 1 + shoeShopLandingImages.length) % shoeShopLandingImages.length) :
                  currentProject === 'portfolio' ? () => setCurrentPortfolioImage((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length) :
                    currentProject === 'linkedinClone' ? () => setCurrentLinkedinImage((prev) => (prev - 1 + linkedInCloneImages.length) % linkedInCloneImages.length) :
                      currentProject === 'mernPOS' ? () => setCurrentMernPOSImage((prev) => (prev - 1 + mernPOSImages.length) % mernPOSImages.length) :
                        currentProject === 'connect4' ? () => setCurrentConnect4Image((prev) => (prev - 1 + connect4Images.length) % connect4Images.length) : () => { }} />

    </div>
  );
}