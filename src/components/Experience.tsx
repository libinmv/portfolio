import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Discern Security',
    position: 'Software Engineer (Backend)',
    period: 'Oct 2023 - Present',
    location: 'Kochi',
    achievements: [
      'Built the Asset Management functionalities, and reporting backend for the company',
      'System designing and allocating infra as needed',
      'Self hosted sentry to reduce costs for dev testing envs',
    ],
  },
  {
    company: 'entri.app',
    position: 'Product Engineer (Backend)',
    period: 'Sep 2022 - Sep 2023',
    location: 'Kochi',
    achievements: [
      'Solutions Architect and product owner for requested backend requirements',
      'Plan, document and implement various product requirements',
      'Write complex and optimized orm queries to create highly optimized and scalable code',
      'Write RESTful APIs with industrial standard performance and security',
      'Support Engineer for various issues in production',
    ],
  },
  {
    company: 'FullContact',
    position: 'Associate Data Analyst',
    period: 'Nov 2021 - Sep 2022',
    location: 'Kochi',
    achievements: [
      'Worked with the Identibase Engineering team in improving the match rate from 73% to 92% within 2 quarters',
      'Part of the team that was testing changes to algorithms as they got introduced',
      'Automated labelling efforts which improved the efficiency of team by reducing time taken for an analysis from 4 days to 6 hours',
      'Was part of the team doing Low Resolve Rate Analysis on customer files',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary-50 dark:bg-secondary-900">
      <div className="container-padding mx-auto">
        <h2 className="heading text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group p-6 border-2 border-transparent hover:border-primary-500 dark:hover:border-primary-400 dark:bg-secondary-800/50"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-lg font-semibold text-secondary-700 dark:text-secondary-300">
                    {exp.position}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 text-secondary-600 dark:text-secondary-400 text-right">
                  <p className="font-medium">{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-3 text-secondary-600 dark:text-secondary-400 list-disc list-inside">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="leading-relaxed">
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 