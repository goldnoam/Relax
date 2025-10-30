
import React from 'react';
import { Technique } from '../types';

interface TechniqueCardProps {
  technique: Technique;
  onGuide: (technique: Technique) => void;
  guideMeText: string;
}

const TechniqueCard: React.FC<TechniqueCardProps> = ({ technique, onGuide, guideMeText }) => {
  const Illustration = technique.illustration;

  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700">
      <div className="relative h-32 bg-cyan-50 dark:bg-slate-800 flex items-center justify-center">
        <Illustration className="w-16 h-16 text-cyan-500 dark:text-cyan-400" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 flex-1">{technique.title}</h3>
          <span className="flex-shrink-0 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">{technique.duration}</span>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">
          {technique.description}
        </p>
      </div>
      <div className="p-6 pt-0 mt-auto">
        <button
          onClick={() => onGuide(technique)}
          className="w-full bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-900 font-semibold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 dark:focus:ring-offset-slate-900"
        >
          {guideMeText}
        </button>
      </div>
    </div>
  );
};

export default TechniqueCard;
