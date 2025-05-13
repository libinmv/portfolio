import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Javascript'],
    icon: '💻',
  },
  {
    category: 'Query Languages',
    skills: ['GraphQL', 'SQL'],
    icon: '🔍',
  },
  {
    category: 'Libraries / Frameworks',
    skills: ['Django', 'Django REST Framework', 'Celery', 'redis-py', 'pika(AMQP Client)'],
    icon: '📚',
  },
  {
    category: 'Tools / Platforms',
    skills: ['Github', 'GitLab', 'Jenkins', 'Visual Studio Code', 'ElasticSearch', 'RabbitMQ'],
    icon: '🛠️',
  },
  {
    category: 'Databases',
    skills: ['RDBMS(postgres, MySQL)', 'NoSQL', 'Hash-Map(Redis)'],
    icon: '🗄️',
  },
  {
    category: 'General Skills',
    skills: ['TDD', 'Design Patterns', 'Message Queues', 'Trunk Based Development'],
    icon: '🎯',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary-50 dark:bg-secondary-900">
      <div className="container-padding mx-auto">
        <h2 className="heading text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group p-6 border-2 border-transparent hover:border-primary-500 dark:hover:border-primary-400 dark:bg-secondary-800/50"
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag group-hover:bg-primary-100/80 group-hover:text-primary-800 
                             dark:group-hover:bg-primary-900/30 dark:group-hover:text-primary-200
                             dark:text-primary-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 