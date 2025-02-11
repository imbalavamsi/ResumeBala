import { useRef } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import "./ProfessionalExp.css";
import { Card } from "primereact/card";

export default function ProfessionalExp() {
  const stepperRef = useRef<any>(null);

  return (
    <Card
      className='professionalexp p-card p-component'
      title='Work Experience'
    >
      <div className='w-full'>
        <Stepper
          ref={stepperRef}
        >
          <StepperPanel header='Java Full-Stack Developer'>
            <div className='flex flex-column'>
              <div className='surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium'>
                <ul>
                  <li>
                    Spearheaded the deployment of containerized applications on
                    the OpenShift platform by leveraging Docker, Kubernetes, and
                    CI/CD pipelines with Jenkins and Lightspeed Harness.
                    Achieved 99.9% uptime by implementing DevOps-driven
                    workflows.
                  </li>
                  <li>
                    Integrated JMeter for load testing and SonarQube to maintain
                    90% code coverage and enforce coding standards.
                  </li>
                  <li>
                    Developed 10+ RESTful APIs to handle CRUD operations using
                    Java 17, Spring Boot, ORM tools (Hibernate) with SQL
                    Databases.
                  </li>
                  <li>
                    Collaborated with UI/UX to support Angular and database
                    teams to automate 70+ user lifecycle processes with
                    synchronized jobs.
                  </li>
                  <li>
                    Leveraged Apache Kafka for event payloads, data
                    communication between microservices, email notifications,
                    and system logs.
                  </li>
                  <li>
                    Enhanced the ERM application performance by 60% utilizing
                    Redis Cache, ehcache and DB indexes handling 1k+ concurrent
                    users.
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex pt-4 justify-content-end'>
              <Button
                label='Next'
                icon='pi pi-arrow-right'
                iconPos='right'
                onClick={() => stepperRef.current.nextCallback()}
              />
            </div>
          </StepperPanel>
          <StepperPanel header='Graduate Research Assistant'>
            <div className='flex flex-column'>
              <div className='surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium'>
                <ul>
                  <li>
                    Developed a MERN stack (MongoDB, Express.js, ReactJS,
                    Node.js) web app with AWS Code Pipeline and deployed it on
                    AWS EC2 with 90% downtime reduction. Implemented monitoring
                    using Amazon CloudWatch and AWS CloudTrail.
                  </li>
                  <li>
                    Employed HTML5, UTF-8 encoding, CSS (external, embedded,
                    inline), JavaScript, and TypeScript for enhanced
                    functionality.
                  </li>
                  <li>
                    Utilized Amazon S3, Amazon Document DB, AWS CloudFront for
                    optimized content delivery performance.
                  </li>
                  <li>
                    Designed a Flask-based blog application with user
                    authentication using Python v3, leveraging SQLite v3 and
                    distributed storage for efficient CRUD operations and
                    seamless REST API integration.
                  </li>
                  <li>
                    Applied strong computer science principles to integrate
                    front-end web pages with HTML5, CSS3, XML, and JavaScript
                    (ES6) to provide a seamless user experience, rigorously
                    ensuring robustness and reliability through unit testing
                    with JUnit5 and Mockito.
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex pt-4 justify-content-between'>
              <Button
                label='Back'
                severity='secondary'
                icon='pi pi-arrow-left'
                onClick={() => stepperRef.current.prevCallback()}
              />
              <Button
                label='Next'
                icon='pi pi-arrow-right'
                iconPos='right'
                onClick={() => stepperRef.current.nextCallback()}
              />
            </div>
          </StepperPanel>
          <StepperPanel header='Software Engineer'>
            <div className='flex flex-column'>
              <div className='surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium'>
                <ul>
                  <li>
                    Employed e-commerce platform by harnessing SAP Hybris
                    Commerce Accelerator for B2C business models using J2EE
                    technologies (SAP Hybris, Spring Data JPA, Spring MVC,
                    Hibernate, JDBC, JTA, JavaBeans) for backend development.
                  </li>
                  <li>
                    Customized Hybris functionalities to develop 30+ REST APIs
                    with Core Java SE 11 features such as Multithreading,
                    Parallel Streams, Streams API, Functional Interfaces, and
                    Lambda Expressions by leveraging computer science concepts
                    for smoother user experience.
                  </li>
                  <li>
                    Engineered relational databases like HSQL DB, MySQL, Oracle,
                    SQL Server, and HANA. Created tables, triggers, stored
                    procedures, SQL queries, JOINS, constraints, and views in
                    Oracle databases integrated with CCv2.
                  </li>
                  <li>
                    Proficient in containerization technologies like Docker and
                    Kubernetes, with a strong understanding of DevOps principles
                    and direct experience implementing CI/CD pipelines using
                    Jenkins and Lightspeed Harness to ensure efficient
                    deployment.
                  </li>
                  <li>
                    Leveraged Log4j and SLF4J for logging, Swagger, Postman,
                    Kibana logs, Dynatrace, and browser consoles for root cause
                    analysis.
                  </li>
                  <li>
                    Proficient in IntelliJ IDEA, achieving 90%+ code coverage
                    with JUnit5 and Mockito. Produced 200+ pull requests using
                    GitHub, Git command line, and SourceTree. Experienced with
                    Jira for Agile/Scrum and Confluence for project management
                    and documentation.
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex pt-4 justify-content-between'>
              <Button
                label='Back'
                severity='secondary'
                icon='pi pi-arrow-left'
                onClick={() => stepperRef.current.prevCallback()}
              />
              <Button
                label='Next'
                icon='pi pi-arrow-right'
                iconPos='right'
                onClick={() => stepperRef.current.nextCallback()}
              />
            </div>
          </StepperPanel>
          <StepperPanel header='Engineer Trainee'>
            <div className='flex flex-column'>
              <div className='surface-border border-round surface-ground flex-auto flex font-medium'>
                <ul>
                  <li>
                    Designed a multi-tiered system with hybrid B2B and B2C
                    prototypes for an e-commerce application.
                  </li>
                  <li>
                    Applied data structures, algorithms, and advanced
                    programming techniques to solve complex problems in
                    distributed computing.
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex pt-4 justify-content-start'>
              <Button
                label='Back'
                severity='secondary'
                icon='pi pi-arrow-left'
                onClick={() => stepperRef.current.prevCallback()}
              />
            </div>
          </StepperPanel>
        </Stepper>
      </div>
    </Card>
  );
}
