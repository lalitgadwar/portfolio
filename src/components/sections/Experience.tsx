import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { experiences } from '../../data/experience';
import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  return (
    <Section id="experience" title="Work Experience" subtitle="My professional journey">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-500 dark:from-primary-600 dark:via-primary-500 dark:to-primary-600 transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-start gap-6 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10"></div>

              {/* Content */}
              <div
                className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                  </div>

                  <div className={`flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description.map((desc, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-primary-500 mt-1.5">▸</span>
                        <span className="flex-1">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
