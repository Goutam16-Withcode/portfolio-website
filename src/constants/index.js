// Portfolio data and constants

export const navLinks = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Skills", id: "skills" },
  { title: "Projects", id: "projects" },
  { title: "Contact", id: "contact" },
];

// skillsData.js

export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", percentage: 85 },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", percentage: 88 },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", percentage: 75 },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", percentage: 70 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", percentage: 60 },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", percentage: 65 },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", percentage: 85 },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", percentage: 80 },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", percentage: 78 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", percentage: 70 },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", percentage: 75 },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "OpenCV", icon: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg", percentage: 70 },
      { name: "Transformers", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", percentage: 65 },
      { name: "Deep Learning", icon: "https://cdn-icons-png.flaticon.com/512/3003/3003605.png", percentage: 70 },
      { name: "NLP", icon: "https://cdn-icons-png.flaticon.com/512/4249/4249904.png", percentage: 60 },
      { name: "Computer Vision", icon: "https://cdn-icons-png.flaticon.com/512/4384/4384590.png", percentage: 65 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", percentage: 90 },
      { name: "Google Colab", icon: "https://colab.research.google.com/img/colab_favicon_256px.png", percentage: 80 },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", percentage: 85 },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", percentage: 85 },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", percentage: 75 },
    ],
  },
  {
    title: "Core CS Concepts",
    skills: [
      { name: "DSA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", percentage: 80 },
      { name: "OOP", icon: "https://cdn-icons-png.flaticon.com/512/206/206036.png", percentage: 75 },
      { name: "System Design", icon: "https://cdn-icons-png.flaticon.com/512/2799/2799698.png", percentage: 65 },
    ],
  },
];


export const projects = [
  {
    name: "Doctor-Dashboard",
    description: "A responsive ReactJS-based web application designed for doctors to manage patient appointments efficiently. The dashboard includes features like appointment filtering by status, marking appointments as completed or rescheduling them, and a clean UI built using Tailwind CSS with local state management (Redux Toolkit or Context API)..",
    tags: ["React JS", "Tailwind CSS", "Socket.io"],
    image: "/assets/images/projects/doctor_dashBoard.png",
    source_code_link: "https://github.com/Goutam16-Withcode/doctor-dashboard",
    demo_link: "https://doctor-dashboard-bay-zeta.vercel.app/",
    category: "frontend"
  },
  {
    name: "Imagify",
    description: "This is an App where you can write a prompt in text fromate and image is generated",
    tags: ["React JS", "Tailwind CSS" , "JavaScript" , "Redux", "Node.js", "Express", "MongoDB"],
    image: "/assets/images/projects/imagify.jpg",
    source_code_link: "https://github.com/Goutam16-Withcode/imagify",
    demo_link: "https://imagify-urua.vercel.app/",
    category: "mern"
  },
  {
    name: 'Chat-App',
    description: "A real-time IoT-integrated chat application built with React Native and Firebase, enabling instant messaging and MQTT-based smart device control.",
    tags: ['React Native', 'Firebase', 'MQTT', 'Expo', 'JavaScript'],
    image: "/assets/images/projects/chat-app.jpg",
    source_code_link: "https://github.com/Goutam16-Withcode/Chat-App",
    demo_link: "#",
    category: "mern"
  },
  {
    name: 'Cafe-Frontend',
    description: 'Design of the Cafe Frontend webpage.',
    tags: ['TailWind CSS', 'HTML', 'CSS', 'JavaScript'],
    image: "/assets/images/projects/cafe-frontend.jpg",
    source_code_link: "https://github.com/Goutam16-Withcode/Intern",
    demo_link: "https://cafe-design-jet.vercel.app/",
    category: "frontend"
  },
  {
    name: "Sitting-Chart and Attendence Generator",
    description: "IoT-based system that collects and analyzes environmental data like air quality, temperature, and humidity. Sends alerts when parameters exceed thresholds.",
    tags: ["IoT", "ESP32", "Python", "Data Analytics", "Dashboard"],
    image: "/assets/images/projects/sitting-Chart.jpg",
    source_code_link: "https://github.com/Goutam16-Withcode/Arrangement_Chart",
    demo_link: "#",
    category: "ai-ml"
  },
  {
      name: 'Image-Captioning',
      description: 'IoT wearable for real-time health tracking with mobile app.',
      tags: ['Raspberry Pi', 'Flutter', 'Python', 'Google Fit API'],
      image: '/assets/images/image-captioning.png',
      source_code_link: 'https://github.com/Goutam16-Withcode/Image_Captioning_project',
      category: 'ai-ml',
    },
];

export const education = {
  university: "IPS Academy- Institute of Engineering and Science, Indore",
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science and Engineering",
  duration: "2023 - 2027",
  courses: [
    "Data Structures and Algorithms",
    "Computer Networks",
    "Operating Systems",
    "Database Management Systems",
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Mobile Application Development"
  ]
};

export const personalInfo = {
  name: "Goutam Sharma",
  title: "B.Tech Student & Software Developer",
  bio: "I'm a passionate B.Tech student specializing in Computer Science and Engineering. With a keen interest in software development and emerging technologies, I'm on a mission to build innovative solutions that make a difference.",
  location: "Indore, India",
  email: "goutamsharm16@gmail.com",
  phone: "+91 7898564247",
  profileImage: "/assets/images/MYPersonal.jpg",
  socialLinks: {
    github: "https://github.com/Goutam16-Withcode",
    linkedin: "https://www.linkedin.com/in/goutam-sharma-3179262a4/",
    twitter: "https://x.com/Goutam_Sharma7?t=Bn3htkDqlYxHrFAMcnt_bQ&s=09",
    instagram: "https://www.instagram.com/thegautamm.sharmaaa?igsh=MThpcHJhaXExeGwzcA=="
  }
};