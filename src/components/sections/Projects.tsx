import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { projects, projectNote } from '../../data/projects';

export const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string>('all');

  const allTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  ).sort();

  const filteredProjects =
    selectedTech === 'all'
      ? projects
      : projects.filter((p) => p.technologies.includes(selectedTech));

  return (
    <Section id="projects" title="Featured Projects" subtitle="Some of my recent work">
      {/* Tech Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setSelectedTech('all')}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
            selectedTech === 'all'
              ? 'bg-primary-600 text-white shadow-lg scale-105'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          All Projects
        </button>
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedTech === tech
                ? 'bg-primary-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-primary-500 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium mt-4"
              >
                <ExternalLink size={16} />
                Visit Live Site
              </a>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No projects found with this technology.</p>
        </div>
      )}

      {/* Project Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800"
      >
        <div className="flex items-start gap-4">
          <Code className="text-primary-600 dark:text-primary-400 mt-1" size={24} />
          <div>
            <h4 className="font-semibold text-primary-800 dark:text-primary-200 mb-2">
              Project Development Note
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {projectNote}
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
