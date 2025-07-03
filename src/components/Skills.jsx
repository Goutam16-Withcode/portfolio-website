import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
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
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const categorizedSkills = {
    Languages: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    ],
    Frameworks: [
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    ],
    Databases: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
    MachineLearning: [
      { name: 'OpenCV', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg' },
      { name: 'Transformers', icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
      { name: 'Deep Learning', icon: 'https://cdn-icons-png.flaticon.com/512/3003/3003605.png' },
      { name: 'NLP', icon: 'https://cdn-icons-png.flaticon.com/512/4249/4249904.png' },
      { name: 'Computer Vision', icon: 'https://cdn-icons-png.flaticon.com/512/4384/4384590.png' },
    ],
    Tools: [
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Google Colab', icon: 'https://colab.research.google.com/img/colab_favicon_256px.png' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    ],
    CoreCS: [
      { name: 'DSA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'OOP', icon: 'https://cdn-icons-png.flaticon.com/512/206/206036.png' },
      { name: 'System Design', icon: 'https://cdn-icons-png.flaticon.com/512/2799/2799698.png' },
    ],
  };

  const renderSkillGrid = (title, skillArray) => (
    <motion.div variants={itemVariants} className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {skillArray.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 w-40"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-2 object-contain" />
            <p className="text-gray-300 text-sm text-center mb-2">{skill.name}</p>
            {skill.percentage !== undefined && (
              <div className="w-full">
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                  ></motion.div>
                </div>
                <div className="text-xs text-gray-400 text-right">{skill.percentage}%</div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );


  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                My Skills
              </span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A comprehensive overview of my technical abilities and expertise gained through academic projects and self-learning.
            </p>
          </motion.div>

          {/* Render each categorized skill grid */}
          {Object.entries(categorizedSkills).map(([category, skills]) =>
            renderSkillGrid(category, skills)
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
