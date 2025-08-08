import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact({ darkMode }) {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: '', isError: false });

  const sendEmail = (e) => {
    console.log(form.current);
    e.preventDefault();
    setIsSubmitting(true);
    if (!form.current) {
      console.error('Form ref is null');
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setSubmitMessage({ text: 'Message sent successfully!', isError: false });
        form.current.reset();
      }, (error) => {
        setSubmitMessage({ text: 'Failed to send message. Please try again.', isError: true });
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitMessage({ text: '', isError: false }), 5000);
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Touch</span>
        </motion.h2>

        <motion.p
          className={`text-lg mb-12 text-center max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-blue-400 bg-gray-800 border-gray-700 text-white' : 'focus:ring-blue-500 bg-white border-gray-300'}`}
                    placeholder="Ayush Mishra"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-blue-400 bg-gray-800 border-gray-700 text-white' : 'focus:ring-blue-500 bg-white border-gray-300'}`}
                    placeholder="ayush@gmail.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-blue-400 bg-gray-800 border-gray-700 text-white' : 'focus:ring-blue-500 bg-white border-gray-300'}`}
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-blue-400 bg-gray-800 border-gray-700 text-white' : 'focus:ring-blue-500 bg-white border-gray-300'}`}
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              {submitMessage.text && (
                <motion.p
                  className={`p-3 rounded-lg ${submitMessage.isError ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitMessage.text}
                </motion.p>
              )}

              <motion.button
                type="submit"
                className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white flex items-center justify-center`}
                whileHover={{ y: -2 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} h-full shadow-lg`}>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>ayushmishra9449@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>+91 9078323588</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Vijayawada, Andhra Pradesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: <FiGithub size={20} />, url: "https://github.com", name: "GitHub" },
                    { icon: <FiTwitter size={20} />, url: "https://twitter.com", name: "Twitter" },
                    { icon: <FiLinkedin size={20} />, url: "https://linkedin.com", name: "LinkedIn" },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} text-blue-500 hover:text-blue-600`}
                      whileHover={{ y: -5 }}
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}