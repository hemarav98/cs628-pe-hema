import "./resume.css";

const config = {
  contactInfo: {
    name: "Hema Deepika Thanigai Arasu",
    address: "14310 NE 7th PL",
    location: "Bellevue, WA 98007",
  },
  objective:
    "To complete my Master and then take up a research position in the industry",
  workExperience: [
    {
      title: "Software Developer",
      company: "Nevocom Technologies",
      location: "Chennai, Tamil Nadu, India",
      date: "Sep 2019 – July 2021",
      bulletPoints: [
        "Supporting development, maintaining, and updating web portals as well as websites.",
        "Assisting in deployment and development of websites.",
        "Selecting techniques and methods for creating solutions using different tools of programming languages.",
        "Resolving complaints of customers and responding to their suggestions to improve the products.",
      ],
    },
  ],
  otherExperience: [
    {
      title: "Research Projects",
      bulletPoints: [
        "“Vehicle Tracking System” was a project to develop to find vehicle with in short of time among hundreds of vehicles. It has become critically important to have flexibility on monitoring and controlling physical properties and personal data, respectively. Although physical transportation systems have made it easier for the public to travel, it has turned to be hazard in several ways. Therefore, a real-time vehicle tracking and monitoring device has been proposed in this paper. Additionally, develop a system using Arduino Uno R3 is being developed by our team, global system for mobile (GSM) device, and global positioning system (GPS) to track the exact and accurate position of the vehicle at any location. The device is also equipped with display to show the information on the current location of the vehicle to the user. Furthermore, two software are utilized to display the data namely Thing Speak which is used to display the trend of the vehicle's motion by using longitude and latitude charts, and Freeboard which is utilized to display the same information in the form of a map that is accessible to all. Results show that users can easily track their vehicle location via their mobile phone through the internet. The entire system has been tested thoroughly in real time and it has proven to function successfully in helping users to locate their vehicles in the event of a theft.",
        "“Implementation of a Simple Hypertext Transfer Protocol”, implemented as a mini project. The implementation of the HTTP apart from implementing the simple protocol includes the features specifying its directory structure and also the different types of files which it can handle. The error related information is also implemented which is executed using various parameters. The server is created to establish a connection and hence help in transfer of data specified by the user.",
        "Implemented advanced data structures such as Red-Black Trees, skip lists and various graph theoretic algorithms.",
      ],
    },
    {
      title: "Programs Attended",
      bulletPoints: [
        "Lectures in Foundations to Computer Science",
        "Lectures in Compiler Design",
        "Lectures in Operating System",
        "Lectures in Computer Architecture",
      ],
    },
  ],
  certificate: [
    {
      title: "Merit Certificate",
      description:
        "Merit Certificate for “All India Top 0.1 %” in the All-India Secondary School Examination (AISSE) in Mathematics.",
    },
    {
      title: "Honors and Awards",
      description:
        "Developed a business intelligence dashboard, as a result, gave the front desk real-time visibility into inventory and procurement For distinguished service to the IEEE Computer Society, with impactful, innovative, and long-lasting contributions to the profession. In the next project we developed and implemented novel software tools. Increased automation and efficiency levels by 35% For seminal contributions to virtual memory, the Internet infrastructure, and computing education. Finally, we redesigned the company’s web-based application, providing information technology support throughout the tenure",
    },
  ],
  education: [
    {
      school: "City University of Seattle,Seattle USA",
      degree: "Masters of Science in Computer Science",
      date: "Apr ’22 – Present",
    },
    {
      school: "Anna University, Chennai, Tamil Nadu, India",
      degree: "Bachelor of Engineering in Computer Science",
      date: "May ‘19",
    },
  ],
  skills: [
    "Operating System: Unix/Linux, Windows, Mac OS and Sun Solaris",
    "Languages: C, C++ and Java",
    "Database Systems: ORACLE, SQL and PL/SQL",
    "Web: HTML5, CSS3, ASP, JavaScript, HTML, ASP, VBScript, Perl, XML and Flash",
    "Assembly Languages: X86, 8085",
    "Applications: MATLAB",
  ],
  others: [
    "Life Member Association of Mathematical Teachers of India, Chennai",
  ],
};

export default function Resume() {
  return (
    <div>
      <div className="contactinfo">
        <h1>{config.contactInfo.name}</h1>
        <h2>{config.contactInfo.title}</h2>
        <p>{config.contactInfo.address}</p>
        <p>{config.contactInfo.location}</p>
      </div>

      <div className="objective">
        <h2>Career Objective</h2>
        <hr className="border-solid border-1" />
        <p>{config.objective}</p>
      </div>

      <div className="workexperience">
        <h2>Work Experience</h2>
        <hr className="border-solid border-1" />
        <ul className="ml-2">
          {config.workExperience.map((workExperience, i) => (
            <li
              key={workExperience.company}
              className={i % 2 ? `mt-1` : `mt-half`}
            >
              <div className="text-center">
                <h4>{workExperience.title}</h4>
                <span className="ml-auto text-muted">
                  {workExperience.company}, {workExperience.location} |{" "}
                  {workExperience.date}{" "}
                </span>
              </div>
              <p>{workExperience.description}</p>
              <ul className="ml-3">
                {workExperience.bulletPoints.map((bulletPoint) => (
                  <li key={bulletPoint}>{bulletPoint}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="otherExperience">
        <h2>Expert Experience</h2>
        <hr className="border-solid border-1" />
        <ul className="ml-2">
          {config.otherExperience.map((otherExperience, i) => (
            <li
              key={otherExperience.company}
              className={i % 2 ? `mt-1` : `mt-half`}
            >
              <div className="text-center">
                <h4>{otherExperience.title}</h4>
              </div>
              <p>{otherExperience.description}</p>
              <ul className="ml-3">
                {otherExperience.bulletPoints.map((bulletPoint) => (
                  <li key={bulletPoint}>{bulletPoint}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="certificate">
        <h2>Certificate</h2>
        <hr className="border-solid border-1" />
        <ul className="ml-2">
          {config.certificate.map((certificate, i) => (
            <li
              key={certificate.company}
              className={i % 2 ? `mt-1` : `mt-half`}
            >
              <div className="text-center">
                <h3>
                  {certificate.title}, {certificate.company}
                </h3>
                <span className="ml-auto text-muted">
                  {certificate.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="education">
        <h2>Education</h2>
        <hr className="border-solid border-1" />
        <ul className="ml-2">
          {config.education.map((education, i) => (
            <li key={education.school} className={i % 2 ? `mt-1` : `mt-half`}>
              <div className="text-center">
                <h3>
                  {education.degree} {education.major}
                </h3>
              </div>
              <h4>
                {education.school} {education.location}
              </h4>
              <span className="ml-auto text-muted">{education.date}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="skills">
        <h2>Computer Skills</h2>
        <hr className="border-solid border-1" />
        {config.skills.map((skill) => (
          <p className="inline-block">
            <span className="mx-1">•</span>
            <span>{skill}</span>
          </p>
        ))}
      </div>
      <div className="others">
        <h2>Other Activities</h2>
        <hr className="border-solid border-1" />
        {config.others.map((other) => (
          <p className="inline-block">
            <span className="mx-1">•</span>
            <span>{other}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
