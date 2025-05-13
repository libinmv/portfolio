import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Hero = () => {
  const socialLinks = [
    {
      icon: <GitHub />,
      url: 'https://github.com/libinmv',
      label: 'GitHub',
    },
    {
      icon: <LinkedIn />,
      url: 'https://www.linkedin.com/in/libinmathew585/',
      label: 'LinkedIn',
    },
    {
      icon: <Email />,
      url: 'mailto:libinmathew585@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-100 to-transparent dark:from-primary-900/20 dark:to-transparent opacity-50" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-300 dark:bg-accent-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-300 dark:bg-primary-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-padding mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Libin Mathew
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary-600 dark:text-secondary-300 mb-8">
              Software Engineer (Backend)
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto mb-12"
          >
            I build scalable backend systems and APIs with a focus on performance,
            security, and maintainability. Currently working at Discern Security.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-8"
          >
            <a href="#about" className="btn-primary">
              Learn More About Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 