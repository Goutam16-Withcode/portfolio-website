import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
        staggerChildren: 0.2,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('service_ylokjid', 'template_6ldiffs', e.target, 'LdPQlraPLB9wHz7ap')
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  const contactInfo = [
    {
      title: 'Location',
      content: 'Indore, India',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Email',
      content: 'goutamsharm16@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
    },
    {
      title: 'Phone',
      content: '+91 7898564247',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Goutam16-Withcode',
      icon: <i className="fab fa-github text-xl"></i>,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/goutam-sharma-3179262a4/',
      icon: <i className="fab fa-linkedin text-xl"></i>,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Goutam_Sharma7?t=Bn3htkDqlYxHrFAMcnt_bQ&s=09',
      icon: <i className="fab fa-twitter text-xl"></i>,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/thegautamm.sharmaaa?igsh=MThpcHJhaXExeGwzcA==',
      icon: <i className="fab fa-instagram text-xl"></i>,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
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
                Get In Touch
              </span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Feel free to contact me for any project inquiries or just to say hello.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-800 rounded-xl p-8 h-full">
                <h3 className="text-2xl font-semibold text-blue-400 mb-6">Contact Information</h3>
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-blue-500">{info.icon}</div>
                      <div>
                        <h4 className="font-medium mb-1">{info.title}</h4>
                        <p className="text-gray-400">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <h4 className="font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition duration-300"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white" required />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white" required />
                  </div>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full mb-6 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white" required />
                  <textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full mb-6 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white resize-none" required></textarea>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-3 bg-green-900/30 text-green-400 rounded-lg">
                      Your message has been sent successfully. I'll get back to you soon!
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-3 bg-red-900/30 text-red-400 rounded-lg">
                      Something went wrong. Please try again later.
                    </div>
                  )}

                  <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
