// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import mockoonLogo from "./assets/tech_logo/mockoonLogo.svg";
import linuxLogo from "./assets/tech_logo/linuxLogo.webp";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import minfyLogo from "./assets/company_logo/minfy.webp";
import dynpatLogo from "./assets/company_logo/dynaptLogo.jpeg";

// Education Section Logo's
import ismLogo from "./assets/education_logo/ismLogo.jpg";
import InterLogo from "./assets/education_logo/jagdamCollegeChapra.webp";

// Project Section Logo's
import blogPostImage from "./assets/work_logo/blogPostImage.png";
import SupermarketAutomationSystemImage from "./assets/work_logo/SupermarketAutomationSystemImage.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "React JS", logo: reactjsLogo },
      { name: "React Native", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "C++", logo: cppLogo },
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Linux", logo: linuxLogo },
      { name: "Mockoon", logo: mockoonLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: minfyLogo,
    role: "Software Engineer",
    company: "Minfy",
    date: "March 2025 - Present",
    desc: "Optimized the app performance by 5% and implemented the Google payment method using the Stripe SDK.",
    skills: ["React-native", "TypeScript", "JavaScript", "Stripe SDK", "Tailwind CSS", "Zustand", "CSS"],
  },
  {
    id: 1,
    img: minfyLogo,
    role: "Dev Intern",
    company: "Minfy",
    date: "December 2024 - March 2025",
    desc: "I built real-time expert-user matching with Firebase and Pub/Sub, cutting wait times by 40%, and integrated PayPal for secure payments with a 99.9% success rate. I also added infinite scroll for expert lists and secure authentication (login, signup, profile) in React Native, boosting scalability and ensuring 99% uptime.",
    skills: ["React-native", "TypeScript", "JavaScript", "Paypal REST APIs", "Tailwind CSS", "Zustand", "CSS"],
  },
  {
    id: 2,
    img: dynpatLogo,
    role: "Dev Intern",
    company: "Dynapt",
    date: "August 2024 - November 2022",
    desc: "I optimized backend performance with Node.js and Express for 100K records/sec data insertion, fixed key bugs, and cut latency by 35%, while also building an automated ETL pipeline with Node.js cron jobs, boosting workflow reliability to 99.8% and cutting manual work by 50%.",
    skills: ["ReactJS", "NodeJS", "Express", "MongoDB", "Javascript", "TailwindCSS", "HTML", "CSS"],
  },
];

export const education = [
  {
    id: 0,
    img: ismLogo,
    school: "IIT(ISM) Dhanbad",
    date: "Dec 2020 - May 2024",
    grade: "6.05 CGPA",
    desc: "I have completed my Bachelor of Technology in Computer Science and Engineering from the Indian Institute of Technology (Indian School of Mines), Dhanbad, Jharkhand. During my time at IIT (ISM) Dhanbad, I gained a strong foundation in programming, software development, and core computer science principles. I studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which further enhanced my skills and knowledge. I love solving algorithmic challenges and actively participate in competitive programming. I am a Specialist on Codeforces and hold a 4-star rating on CodeChef. My experience at IIT (ISM) Dhanbad has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - B.Tech",
  },
  {
    id: 2,
    img: InterLogo,
    school: "Jagdam College Chapra, Saran",
    date: "Apr 2017 - Apr 2019",
    grade: "76.4%",
    desc: "I completed my Intermediate (Class 12th) education in the Science stream from Jagdam College, Chapra, Saran, under the Bihar School Examination Board (BSEB). My subjects included Physics, Chemistry, Mathematics, English, and Hindi.",
    degree: "BSEB(XII) - Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Blog-Post",
    description:
      "I engineered a feature-rich blog platform using React.js, Appwrite, and Redux Toolkit that enables comprehensive content management with public/private categorization and role-based access control. The integration of TinyMCE rich-text editor and powerful search functionality significantly enhanced the user experience this is complete sentnese",
    image: blogPostImage,
    tags: ["ReactJS", "JavaScript", "Appwrite", "TinyMCE", "TailwindCSS", "HTML", "CSS"],
    github: "https://github.com/aws-coder77/blog-post",
    webapp: "https://blog-post-sable-omega.vercel.app/",
  },
  {
    id: 1,
    title: "SuperMarket Automation System",
    description:
      "Developed a Supermarket Automation System that streamlined item location, cart management, and checkout, improving efficiency by 30%, while enabling real-time inventory tracking and dynamic pricing to reduce restocking delays by 40%.",
    image: SupermarketAutomationSystemImage,
    tags: ["Node.js", "MongoDB", "Express", "EJS", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/aws-coder77/Supermarket-Automation-System",
    webapp: "https://github.com/aws-coder77/Supermarket-Automation-System",
  },
];
