import { motion } from 'framer-motion';

const education = {
  university: "IPS Academy - Institute of Engineering and Science, Indore",
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
  ]
};

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">Education</h2>

          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-blue-300">{education.university}</h3>
            <p className="text-lg text-gray-300">{education.degree}, <span className="italic">{education.major}</span></p>
            <p className="text-gray-400 mb-4">{education.duration}</p>

            <div className="mt-4">
              <h4 className="text-xl font-semibold text-purple-400 mb-2">Relevant Courses:</h4>
              <ul className="list-disc list-inside text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                {education.courses.map((course, index) => (
                  <li key={index} className="mb-1">{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
