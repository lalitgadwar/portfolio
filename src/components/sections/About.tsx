import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { personalInfo } from '../../data/personalInfo';
import { education } from '../../data/education';
import { GraduationCap, MapPin, Languages } from 'lucide-react';

export const About = () => {
  return (
    <Section id="about" title="About Me" subtitle="Get to know me better">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <h3 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
              Who I Am
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {personalInfo.summary}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about creating efficient, scalable solutions and continuously learning 
              new technologies to stay at the forefront of web development.
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Card>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <GraduationCap className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Education</h4>
                <p className="text-gray-600 dark:text-gray-400">{education.degree}</p>
                <p className="text-gray-500 dark:text-gray-500">{education.institution}</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <MapPin className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <Languages className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
