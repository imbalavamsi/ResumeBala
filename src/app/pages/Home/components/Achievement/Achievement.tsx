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
            <strong>Boosted ERM System Performance:</strong> Improved application efficiency by 60% using Redis Cache, ehcache, and DB indexing—delivering a seamless experience for 1,000+ concurrent users.
          </li>
          <li>
            <strong>Achieved 99.9% Uptime with Microservices:</strong> Led deployment of containerized apps on OpenShift using Docker, Kubernetes, and Harness CI/CD workflows.
          </li>
          <li>
            <strong>Automated 70+ Business Workflows:</strong> Streamlined user lifecycle processes, improving speed, accuracy, and reducing manual overhead across business operations.
          </li>
          <li>
            <strong>Performance & Code Quality Assurance:</strong> Integrated JMeter for load testing and enforced 90%+ code coverage via SonarQube to ensure release stability and maintainable code.
          </li>
          <li>
            <strong>Published AI Research in JARDCS:</strong> Co-authored a peer-reviewed paper,
            <a
              href="https://www.jardcs.org/abstract.php?id=4326"
              target="_blank"
              rel="noopener noreferrer"
            >
              “Image Caption to Voice Generation Using Deep Learning”
            </a>, focused on accessibility using VGG16, LSTM, and gTTS for the visually impaired.
          </li>
          <li>
            <strong>Graduate Research Assistant at Dakota State University:</strong> Earned a competitive RA position and built a cloud-based MERN stack app that reduced system downtime by 90% and supported campus-wide IT innovation.
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
