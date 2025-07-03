import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
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
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Passionate B.Tech student specializing in cutting-edge technologies and innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div 
              variants={itemVariants} 
              className="relative overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 rounded-xl"></div>
              <img
                src="/assets/images/MYPersonal.jpg"
                alt="Profile"
                className="w-full h-auto rounded-xl relative z-10 transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Who am I?</h3>
              <p className="text-gray-300 mb-6">
                I am a dedicated B.Tech student with a passion for technology and innovation. My academic journey has equipped me with strong technical skills and a problem-solving mindset.
              </p>
              <p className="text-gray-300 mb-6">
                With a focus on web development, software engineering, and cutting-edge technologies, I strive to create impactful digital solutions. I believe in continuous learning and staying updated with the latest industry trends.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-white font-medium mb-2">Name:</h4>
                  <p className="text-gray-400">Goutam Sharma</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Email:</h4>
                  <p className="text-gray-400">goutamsharm16@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">University:</h4>
                  <p className="text-gray-400"> IPS Academy- Institute of Engineering and Science, Indore</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Degree:</h4>
                  <p className="text-gray-400">B.Tech in Computer Science</p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300"
              >
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;