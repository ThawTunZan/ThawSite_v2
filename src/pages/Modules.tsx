import modulesData from '../Data/ModulesData';
import { Link } from 'react-router-dom';

const Modules = () => {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-center">My Modules</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modulesData.map((module) => (
              <div key={module.id} className="bg-primary-800 rounded-lg shadow-lg p-6 flex flex-col">
                <h2 className="text-xl font-bold text-accent-400 mb-1">{module.moduleCode}: {module.moduleName}</h2>
                <p className="text-primary-300 mb-2 font-semibold">{module.YearSem} &middot; {module.category}</p>
                <p className="text-primary-400 mb-4 line-clamp-3">{module.description}</p>
                {module.achievements && module.achievements.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-accent-400 mb-2">Key Achievements</h3>
                    <ul className="list-disc list-inside space-y-1 text-primary-300">
                      {module.achievements.map((ach, idx) => (
                        <li key={idx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <a href={module.link} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2 self-start">View on NUSMods</a>
                <Link to={`/modules/${module.id}`} className="btn-secondary mt-2 self-start">Read More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modules;
