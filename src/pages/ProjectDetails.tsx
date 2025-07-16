import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectsData, { Project } from '../Data/ProjectsData';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project: Project | undefined = projectsData.find((p: Project) => p.id === Number(id));

  if (!project) {
    return (
      <div className="section-padding container-custom text-center">
        <h2 className="text-2xl font-bold mb-4 text-accent-400">Project Not Found</h2>
        <button className="btn-secondary mt-4" onClick={() => navigate(-1)}>
          <FaArrowLeft className="mr-2" /> Back
        </button>
      </div>
    );
  }

  const DemoIcon = project.demoIcon || FaExternalLinkAlt;

  return (
    <div className="pt-16">
      <div className="section-padding container-custom max-w-3xl mx-auto">
        <button className="btn-secondary mb-8 flex items-center" onClick={() => navigate(-1)}>
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{project.title}</h1>
          <p className="text-accent-400 font-semibold mb-2">{project.subtitle}</p>
          <div className="mb-6">
            <img
              src={`${import.meta.env.BASE_URL}${project.image}`}
              alt={project.title}
              className="w-full max-h-72 object-cover rounded-lg mb-4"
              onError={(e) => {
                e.currentTarget.src = `${import.meta.env.BASE_URL}images/placeholder.png`;
              }}
            />
          </div>
          <p className="text-primary-300 text-lg mb-6">{project.description}</p>
          {project.achievements && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-accent-400 mb-2">Key Achievements</h3>
              <ul className="list-disc list-inside space-y-1 text-primary-300">
                {project.achievements.map((ach: string, idx: number) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>
          )}
          {project.technologies && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-accent-400 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, idx: number) => (
                  <span key={idx} className="px-2 py-1 bg-primary-700 text-primary-300 text-xs rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          )}
          <div className="flex gap-4 mt-6">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                <FaGithub /> GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                <DemoIcon /> Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails; 