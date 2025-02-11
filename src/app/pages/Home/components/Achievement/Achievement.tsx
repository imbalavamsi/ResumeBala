import { Card } from "primereact/card";
import "./Achievement.css";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Achievement = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/contact"); // Navigate to the ContactForm component
  };

  return (
    <div className='achievements-container'>
      <Card className='achievements' title='Shining Moments 🏆'>
        <ul>
          <li>
            <strong>Optimized Application Performance:</strong> Enhanced the ERM
            application’s performance by 60% using Redis Cache, ehcache, and
            database indexing, which supported 1,000+ concurrent users with
            reduced latency.
          </li>
          <li>
            <strong>Successful Deployment and Uptime Improvement:</strong>{" "}
            Spearheaded the deployment of containerized applications on
            OpenShift using Docker, Kubernetes, Jenkins, and Lightspeed Harness,
            achieving 99.9% uptime.
          </li>
          <li>
            <strong>
              Significant Efficiency Gains in User Lifecycle Processes:
            </strong>{" "}
            Automated over 70 user lifecycle processes, improving accuracy and
            speed in business operations.
          </li>
          <li>
            <strong>Load Testing and Code Quality Assurance:</strong> Integrated
            JMeter for load testing and SonarQube to maintain 90% code coverage,
            enforcing coding standards for reliable system deployment.
          </li>
        </ul>
        <div className='flex justify-content-center'>
          <Button
            label="Let's join together to add more to this journey!"
            className='center'
            outlined
            icon='pi pi-plus'
            onClick={handleButtonClick}
          >
            <div className='arrow-container'>
              <i className='pi pi-chevron-down icon-animate'></i>
            </div>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Achievement;
