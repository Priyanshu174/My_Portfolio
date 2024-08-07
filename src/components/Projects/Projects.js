import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Social_Media from "../../Assets/Projects/Social_Media.png";
import Book_Heaven from "../../Assets/Projects/Book_Heaven.jpg";
import Chat_App from "../../Assets/Projects/Chat_App.jpg";
import Ecommerce_react from "../../Assets/Projects/Ecommerce_react.png";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";
import Quiz_Java from "../../Assets/Projects/Quiz_Java.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Social_Media}
              isBlog={false}
              title="Social-Media"
              description="Developed a full-stack social media application using React.js, Node.js, Express, and MongoDB. Implemented JWT authentication, bcrypt password encryption, and CRUD operations for posts, likes, and friend management. Utilized React hooks for state management and multer for file uploads. Deployed on Vercel and render."
              ghLink="https://github.com/Priyanshu174/MERN-SocialMediaApp"
              demoLink="https://mern-social-media-e02ndypf6-priyanshus-projects-f4f4f618.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Book_Heaven}
              isBlog={false}
              title="Book-Heaven"
              description="Developed a book store application with a full-stack setup using React.js, Node.js, Express, and MongoDB. Implemented role-based access control for admin features, including adding, removing, and editing books, managing orders, and viewing user activities. Enabled users to explore books, add them to cart and favorites, and complete purchases with a redirect to a successful order page. Integrated JWT authentication, bcrypt for password encryption, and state management with Redux."
              ghLink="https://github.com/Priyanshu174/My-BookStore-frontend"
              demoLink="https://my-book-store-frontend-7gmr7ld0a-priyanshus-projects-f4f4f618.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat_App}
              isBlog={false}
              title="Chat-App"
              description="Developed a full-stack chat application using React.js, Node.js, Express, and MongoDB. Implemented JWT authentication, bcrypt for password encryption, and real-time communication with Socket.IO. Integrated file uploads with Multer, emoji picker functionality, and profile management. Deployed on Vercel and Render."
              ghLink="https://github.com/Priyanshu174/Mern_Chat_App_Frontend"
              demoLink="https://mern-chat-app-frontend-leut7u4z0-priyanshus-projects-f4f4f618.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce_react}
              isBlog={false}
              title="E-commerce"
              description="Created a front-end e-commerce website with React.js, featuring sections like home, contact, login, signup, discount, and flash deals. Developed a dynamic cart that updates in real-time as users add items. Enhanced performance and user interaction using React hooks. Deployed on GitHub Pages."
              ghLink="https://github.com/Priyanshu174/Ecommerce-react"
              demoLink="https://priyanshu174.github.io/Ecommerce-react/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-Fashion"
              description="Created a front-end e-commerce website with React.js, featuring sections like home, contact, login, signup, discount, and flash deals. Developed a dynamic cart that updates in real-time as users add items. Enhanced performance and user interaction using React hooks. Deployed on GitHub Pages."
              ghLink="https://github.com/Priyanshu174/E_Commerce_Website"
              demoLink="https://priyanshu174.github.io/E_Commerce_Website/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quiz_Java}
              isBlog={false}
              title="Quiz_Java"
              description="Built an interactive Java quiz application with a Swing-based GUI, featuring user login, rule display, multiple-choice questions, lifelines, and a countdown timer. Implemented a scoring system that calculates scores and provides personalized scorecards."
              ghLink="https://github.com/Priyanshu174/Quiz_Application_Java"
              
            />
          </Col>

          <Col md={4} className="project-card">
            
          </Col>

          <Col md={4} className="project-card">
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
