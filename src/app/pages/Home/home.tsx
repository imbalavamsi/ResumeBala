import { Card } from "primereact/card";
import Achievement from "./components/Achievement/Achievement";
import ProfessionalExp from "./components/ProfessionalExp/ProfessionalExp";
import "./home.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SkillsCard from "./components/Skills/Skills";

const Home = () => {
  return (
    <>
      <Card className='career-summary' title='Let’s Dive Into My Journey!!'>
        An accomplished Full-Stack Java Developer with over 4 years of specialized knowledge in Banking and Financial Services, Academic, and Retail/E-commerce domains. Expertise includes Agile and Waterfall software development life cycle methodologies, along with proficiency in Java, Spring Boot, AngularJS, and React.js frameworks, AWS, Azure DevOps, Jenkins, and Harness for deployments. I excel in designing scalable microservices architecture, backend and frontend development, database management, and deployment. Demonstrated ability to provide production support, drive enhancements, and resolve complex customer issues. Skilled in collaborating with engineering, product, and customer teams to deliver impactful solutions.
      </Card>
      <Achievement />
      <ProfessionalExp />
      <SkillsCard />
      <ContactForm />
    </>
  );
};

export default Home;
