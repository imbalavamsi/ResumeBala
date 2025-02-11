import "./Skills.css";
import { Card } from "primereact/card";
import { Chip } from "primereact/chip";

const SkillsCard = () => {
  const skills = [
    "Certified AWS Solution Architect Associate",
    "Java Developer",
    "Problem Solving with Java",
    "SAP Hybris Developer",
    "Object-Oriented Programming",
    "Python",
    "Java 8",
    "Java 17",
    "Flask",
    "Spring Boot",
    "Spring Data JPA",
    "Hibernate",
    "Servlets",
    "Junit5",
    "Mockito",
    "AngularJS",
    "React.js",
    "Node.js",
    "HTML5",
    "CSS3",
    "Bootstrap 5",
    "JavaScript (ES6)",
    "Apache Kafka",
    "MySQL",
    "SQLite",
    "PostgreSQL",
    "Git",
    "Docker",
    "Jenkins",
    "Kubernetes",
    "Postman",
    "Kibana",
    "Microsoft Azure",
    "Azure DevOps",
    "AWS EC2",
    "Amazon CloudWatch",
    "AWS CloudTrail",
    "Design Patterns",
    "Data Analysis",
    "Risk Analysis",
    "Brainstorming",
    "Strong Communication Skills",
    "Jira",
    "Confluence",
    "Adaptability to Emerging Technologies",
  ];

  // Function to generate slow random duration between 12s and 18s
  const getRandomDuration = () => (Math.random() * (18 - 12) + 12).toFixed(2);

  // Function to generate slight staggered animation delays
  const getRandomDelay = () => (Math.random() * (3 - 0) + 0).toFixed(2);

  return (
    <div className="card-container skills">
      <Card title="Skills" className="p-mb-3">
        <div className="skills-chips">
          {skills.map((skill, index) => {
            const randomDuration = getRandomDuration(); // Slow duration between 12s-18s
            const randomDelay = getRandomDelay(); // Subtle delay variation between 0-3s

            return (
              <Chip
                key={index}
                label={skill}
                className="p-mb-2 p-mr-2 p-chip"
                style={{
                  animationDuration: `${randomDuration}s`, // Unique speed for each chip
                  animationDelay: `${randomDelay}s`, // Ensures staggered movement
                }}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default SkillsCard;
