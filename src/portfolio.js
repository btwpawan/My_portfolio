/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pawan Sanap",
  title: "Hi all, I'm Pawan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/btwpawan",
  linkedin: "https://www.linkedin.com/in/pawansanap",
  gmail: "pawansanap04@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop fully responsive and interactive Frontend UIs using React.js and modern CSS libraries like Tailwind & Bootstrap."
    ),
    emoji(
      "⚡ Build RESTful backend APIs using Java, Spring Boot and integrate them with MySQL for full stack web applications."
    ),
    emoji(
      "⚡ Deploy and manage full stack projects on platforms like Vercel, Render, and GitHub Pages; familiar with Firebase basics and Git for version control."
    )
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    {
      skillName: "springboot",
      imageSrc: require("./assets/images/springboot.png")
    },
    { skillName: "git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "github", fontAwesomeClassname: "fab fa-github" }
  ],
  display: true
};

// Projects Section
const Projects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/tesla.jpg"),
      projectName: "Tesla Clone (Electric Car Website UI)",
      projectDesc:
        "A modern, fully responsive clone of the Tesla homepage built using React and styled-components. Includes smooth animations, scroll effects, and UI sections showcasing Tesla's vehicle lineup and clean energy products.",
      footerLink: [
        { name: "Visit Website", url: "https://tesla-clone-drab-six.vercel.app/" }
      ]
    },
    {
      image: require("./assets/images/netflix.jpg"),
      projectName: "Netflix Full Stack Clone",
      projectDesc:
        "A fully responsive Netflix clone built using React.js and Firebase. Implements user authentication, dynamic movie listings using TMDB API, and smooth UI with hover effects and modals. Features include trending movies, categories, and a custom video player experience.",
      footerLink: [
        { name: "Visit Website", url: "https://netflix-full-stack-clone.vercel.app/login" }
      ]
    },
    {
      image: require("./assets/images/pass.jpg"),
      projectName: "Real-Time Chat Application",
      projectDesc:
        "A real-time chat app developed with Spring Boot (WebSocket, STOMP), Thymeleaf, and JavaScript. Supports multiple chat rooms, instant messaging with SockJS & STOMP.js, and a clean, responsive interface. Ensures seamless communication with live updates and message broadcasting.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://realtime-chat-app-springboot-production.up.railway.app/"
        }
      ]
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/sppulogo.jpg"),
      subHeader: "Bachelor of Computer Applications (BCA) | CGPA 8.27 (A+ Grade)",
      duration: "September 2022 - April 2025",
      descBullets: [
        "Completed add-on certifications in Full Stack Java Development",
        "Built major project: Car Rental System using Spring Boot & MySQL",
        "Participated in inter-college coding competitions",
        "Active member of college coding club; organized coding workshops and participated in hackathons"
      ]
    },
    {
      schoolName: "Balwantrao Kadam High School, Yelambghat",
      logo: require("./assets/images/HSC.png"),
      subHeader: "HSC Science | Percentage: 86% – Maharashtra State Board",
      duration: "September 2021 - April 2022",
      descBullets: [
        "Learned core concepts of algorithms, basic Java, and networking"
      ]
    },
    {
      schoolName: "D.B Ghumare School, Beed",
      logo: require("./assets/images/HSC.png"),
      subHeader: "SSC | Percentage: 84% – Maharashtra State Board",
      duration: "September 2019 - April 2020",
      descBullets: ["Secured A+ in Maths and Science"]
    }
  ]
};

// Tech Stack Section
const techStack = {
  viewSkillBars: false,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Programming", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

// Open Source Section
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "btwpawan",
  showGithubProfile: "true",
  display: true
};

// Achievements Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications and Some Cool Stuff that I have done!",
  achievementsCards: [
    {
      title: "Full Stack Java Developer – Teknowell Edutech",
      subtitle:
        "Completed hands-on training in Core Java, Advanced Java, JDBC, JSP, Servlets, Spring, Spring Boot, and React with real-time project development.",
      image: require("./assets/images/Teknowell logo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },
    {
      title: "Java Programming Masterclass - Udemy",
      subtitle:
        "Completed 80+ hours of Java training covering OOPs, Exception Handling, Collections, Multithreading, and File Handling.",
      image: require("./assets/images/Udemy.png"),
      footerLink: [{ name: "Certification", url: "#" }]
    },
    {
      title: "DSA with Java – Apna College",
      subtitle:
        "Completed structured DSA course with in-depth focus on Arrays, Strings, Recursion, Sorting, Binary Search, LinkedList, Trees, Graphs, and Dynamic Programming.",
      image: require("./assets/images/apnacollege.png"),
      footerLink: [{ name: "Certification", url: "" }]
    }
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8788493504",
  email_address: "pawansanap04@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: true
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  Projects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
