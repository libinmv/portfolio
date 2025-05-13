import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email, LocationOn, Phone } from '@mui/icons-material';

const contactInfo = [
  {
    icon: <Email />,
    label: 'Email',
    value: 'libinmathew585@gmail.com',
    link: 'mailto:libinmathew585@gmail.com',
  },
  {
    icon: <LocationOn />,
    label: 'Location',
    value: 'Kochi, Kerala, India',
    link: null,
  },
  {
    icon: <Phone />,
    label: 'Phone',
    value: '+91 8281989880',
    link: 'tel:+918281989880',
  },
];

const socialLinks = [
  {
    icon: <GitHub />,
    label: 'GitHub',
    link: 'https://github.com/libinmv',
  },
  {
    icon: <LinkedIn />,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/libinmathew585/',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark">
      <div className="container-padding mx-auto">
        <h2 className="heading text-center">Contact</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-primary">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center space-x-4">
                    <div className="text-primary">{info.icon}</div>
                    <div>
                      <p className="font-semibold">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-primary">Connect with Me</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Feel free to connect with me on social media or professional
                networks.
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 