import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const filters = [
    { name: 'All-Projects', value: 'all' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Doctor-Dashboard',
      description: 'A responsive ReactJS-based web application designed for doctors to manage patient appointments efficiently...',
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%23242A38'/%3E%3Cpath d='M110 100 H290 V200 H110 Z' fill='%230097A7'/%3E%3Ctext x='125' y='160' fill='white' font-size='24' font-family='Arial'%3EDoctor 🩺 Dashboard%3C/text%3E%3C/svg%3E",
      category: 'mern',
      technologies: ['React JS', 'Tailwind CSS', 'IoT', 'Socket.io'],
      link: 'https://doctor-dashboard-bay-zeta.vercel.app/',
      github: 'https://github.com/Goutam16-Withcode/doctor-dashboard',
    },
    {
      id: 2,
      title: 'Imagify',
      description: 'This is an app where you can write a prompt in text format and generate an image using AI.',
      image: 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300" fill="none"%3e%3crect width="400" height="300" fill="%23282C34"/%3e%3cpath d="M120 100H280V200H120V100Z" fill="%2334A853"/%3e%3ctext x="140" y="160" fill="white" font-size="24" font-family="Arial">A → 🖼️</text%3e%3c/svg%3e',
      category: 'mern',
      technologies: ['React JS', 'Tailwind CSS', 'JavaScript', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      link: 'https://imagify-urua.vercel.app/',
      github: 'https://github.com/Goutam16-Withcode/imagify',
    },
    {
      id: 3,
      title: 'Chat-App',
      description: 'A real-time IoT-integrated chat app built with React Native and Firebase...',
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%23282C34'/%3E%3Cpath d='M100 90 H300 V190 H150 L120 220 V190 H100 Z' fill='%2300BFFF'/%3E%3Ctext x='140' y='160' fill='white' font-size='24' font-family='Arial'%3EChat 💬%3C/text%3E%3C/svg%3E",
      category: 'mern',
      technologies: ['React Native', 'Firebase', 'MQTT', 'Expo', 'JavaScript'],
      link: '#',
      github: 'https://github.com/Goutam16-Withcode/Chat-App',
    },
    {
      id: 4,
      title: 'Cafe-Frontend',
      description: 'Design of the Cafe Frontend webpage.',
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%233E2723'/%3E%3Cpath d='M120 100 H280 V200 H120 Z' fill='%23A1887F'/%3E%3Ctext x='135' y='160' fill='white' font-size='24' font-family='Arial'%3ECafé ☕ Frontend%3C/text%3E%3C/svg%3E",
      category: 'frontend',
      technologies: ['TailWind CSS', 'HTML', 'CSS', 'JavaScript'],
      link: 'https://cafe-design-jet.vercel.app/',
      github: 'https://github.com/Goutam16-Withcode/Intern',
    },
    {
      id: 5,
      title: 'Sitting-Chart and Attendence Generator',
      description: 'A Python-Tkinter desktop application designed to manage exam room seating arrangements efficiently...',
      image: 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300" fill="none"%3e%3crect width="400" height="300" fill="%23f0f4f8"/%3e%3ctext x="200" y="40" text-anchor="middle" font-size="20" fill="%23333"%3eSitting Chart%3c/text%3e%3crect x="60" y="60" width="80" height="50" fill="%234CAF50" rx="8"/%3e%3crect x="160" y="60" width="80" height="50" fill="%23FF9800" rx="8"/%3e%3crect x="260" y="60" width="80" height="50" fill="%234CAF50" rx="8"/%3e%3crect x="60" y="130" width="80" height="50" fill="%23FF9800" rx="8"/%3e%3crect x="160" y="130" width="80" height="50" fill="%234CAF50" rx="8"/%3e%3crect x="260" y="130" width="80" height="50" fill="%23FF9800" rx="8"/%3e%3ctext x="200" y="220" text-anchor="middle" font-size="16" fill="%23555"%3eAttendance System%3c/text%3e%3c/svg%3e',
      category: 'ai-ml',
      technologies: ['Python', 'Tkinter', 'openpyxl', 'OS ', 'CustomTkinter'],
      link: '#',
      github: 'https://github.com/Goutam16-Withcode/Arrangement_Chart',
    },
    {
      id: 6,
      title: 'Image-Captioning',
      description: 'Generate image descriptions using deep learning.',
      image: 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3e%3crect width="400" height="300" fill="%23282C34"/%3e%3crect x="80" y="60" width="240" height="160" rx="10" fill="%2300BFFF"/%3e%3ccircle cx="140" cy="100" r="20" fill="white"/%3e%3cpolygon points="160,160 200,100 240,160" fill="white"/%3e%3ctext x="200" y="250" fill="white" font-size="20" text-anchor="middle" font-family="Arial"%3eImage Captioning%3c/text%3e%3c/svg%3e',
      category: 'ai-ml',
      technologies: ['TensorFlow', 'Python', 'Deep Learning'],
      link: '#',
      github: 'https://github.com/Goutam16-Withcode/Image_Captioning_project',
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category.toLowerCase() === activeFilter.toLowerCase();
  });

  const groupedProjects = filteredProjects.reduce((acc, project) => {
    const category = project.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(project);
    return acc;
  }, {});

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                My Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              A collection of applications I’ve built using modern web and mobile technologies.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((filter) => (
              <motion.button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={activeFilter === filter.value}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${activeFilter === filter.value
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Grouped Project Grid */}
          <motion.div
            className="space-y-16"
            variants={containerVariants}
          >
            {Object.entries(groupedProjects).map(([category, projects]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold text-white mb-6 capitalize">
                  {category.replace('-', ' ')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {projects.map((project) => (
                    <motion.article
                      key={project.id}
                      variants={itemVariants}
                      whileHover={{ y: -8 }}
                      className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-md shadow-md hover:shadow-blue-500/30 transition-all duration-500 group"
                    >
                      <div className="h-48 overflow-hidden rounded-xl mb-4">
                        <img
                          src={project.image}
                          alt={project.title || 'Project image'}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm max-h-20 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-blue-500">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 my-4">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-blue-900/40 text-blue-300 text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-blue-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center mt-4 space-x-3">
                        <a
                          href={project.link !== '#' ? project.link : null}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 text-center py-2 px-4 rounded-lg text-sm transition ${project.link === '#'
                            ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                        >
                          {project.link === '#' ? 'Demo Unavailable' : 'View Demo'}
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition font-medium"
                        >
                          <FaGithub className="w-5 h-5" />
                          <span>View on GitHub</span>
                        </a>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            ))}
            {filteredProjects.length === 0 && (
              <div className="text-center text-gray-400">No projects found in this category.</div>
            )}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="text-center mt-14">
            <motion.a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;