import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-dark">
      <div className="container-padding mx-auto">
        <h2 className="heading text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="prose dark:prose-invert mx-auto"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I am a Software Engineer with a strong focus on backend development,
              currently working at Discern Security. With expertise in Python,
              Django, and various database technologies, I specialize in building
              scalable and maintainable systems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              My experience spans across multiple domains, from developing RESTful
              APIs to implementing complex data processing pipelines. I am
              passionate about writing clean, efficient code and following best
              practices in software development.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              When I'm not coding, I enjoy staying up-to-date with the latest
              technologies and contributing to open-source projects. I believe in
              continuous learning and sharing knowledge with the developer
              community.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 