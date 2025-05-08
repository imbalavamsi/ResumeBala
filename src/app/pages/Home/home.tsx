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
        An AWS Certified Full-Stack Java Developer with over 5 years of experience delivering scalable enterprise applications across Pharma, Banking & Financial Services, Academic, and Retail/E-commerce domains. Proven expertise in backend development using Java 17, Spring Boot, and Hibernate; frontend development using ReactJS, AngularJS, and TypeScript; and microservices design using Docker, Kubernetes, and Kafka. Proficient in building and deploying containerized applications on AWS and Azure, integrating CI/CD pipelines via Jenkins, Harness, and Lightspeed. Demonstrated success in migrating monoliths to microservices, enhancing application performance with Redis Cache, and implementing real-time analytics using Apache Druid. Skilled in REST API development, DevOps practices, and cross-functional collaboration to drive production stability, security, and business value.
      </Card>
      <Achievement />
      <ProfessionalExp />
      <SkillsCard />
      <ContactForm />
    </>
  );
};

export default Home;
