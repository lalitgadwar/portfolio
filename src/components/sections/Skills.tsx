import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { skills } from '../../data/skills';

const categories = ['all', 'frontend', 'backend', 'database', 'devops', 'tools'] as const;

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      frontend: 'bg-blue-500',
      backend: 'bg-green-500',
      database: 'bg-yellow-500',
      devops: 'bg-purple-500',
      tools: 'bg-pink-500',
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <Section id="skills" title="Skills" subtitle="Technologies I work with">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 capitalize ${
              selectedCategory === category
                ? 'bg-primary-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-full ${getCategoryColor(skill.category)} rounded-full`}
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No skills found in this category.</p>
        </div>
      )}
    </Section>
  );
};
