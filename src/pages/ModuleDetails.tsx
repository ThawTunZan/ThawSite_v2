import { useParams, useNavigate } from 'react-router-dom';
import modulesData, { Module } from '../Data/ModulesData';

const ModuleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const module: Module | undefined = modulesData.find((m: Module) => m.id === Number(id));

  if (!module) {
    return (
      <div className="section-padding container-custom text-center">
        <h2 className="text-2xl font-bold mb-4 text-accent-400">Module Not Found</h2>
        <button className="btn-secondary mt-4" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="section-padding container-custom max-w-3xl mx-auto">
        <button className="btn-secondary mb-8 flex items-center" onClick={() => navigate(-1)}>
          Back
        </button>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{module.moduleCode}: {module.moduleName}</h1>
        <p className="text-accent-400 font-semibold mb-2">{module.YearSem} &middot; {module.category}</p>
        <p className="text-primary-300 text-lg mb-6">{module.description}</p>
        {module.achievements && module.achievements.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-accent-400 mb-2">Key Achievements</h3>
            <ul className="list-disc list-inside space-y-1 text-primary-300">
              {module.achievements.map((ach: string, idx: number) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </div>
        )}
        <a href={module.link} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2 inline-flex items-center">View on NUSMods</a>
      </div>
    </div>
  );
};

export default ModuleDetails; 