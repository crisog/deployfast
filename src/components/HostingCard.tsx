import { useState } from 'react';
import type { HostingProvider, FrameworkId } from '../frameworks.ts';

interface HostingCardProps {
  hosting: HostingProvider;
  framework: FrameworkId;
  onSelect?: (hosting: HostingProvider, framework: FrameworkId) => void;
}

const HostingCard = ({ hosting, framework, onSelect }: HostingCardProps) => {
  const [hovered, setHovered] = useState(false);

  const selectHosting = () => {
    console.log('Telemetry: hosting_chosen', { framework, hosting: hosting.id });

    if (onSelect) {
      onSelect(hosting, framework);
    } else {
      alert(`Selected ${hosting.name} for ${framework}.\n\nNext step: Configure deployment settings`);
    }
  };

  return (
    <div
      className={`cursor-pointer p-6 border rounded-md duration-300 flex flex-col justify-between h-full ${
        hovered ? 'border-gray-medium scale-[1.02]' : 'border-gray-dark'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={selectHosting}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectHosting();
        }
      }}
      tabIndex="0"
    >
      <div>
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src={hosting.logoSrc}
              alt={`${hosting.name} logo`}
              className={`w-10 h-10 object-contain transition-all duration-300 ${
                hovered ? 'scale-110' : ''
              }`}
            />
          </div>
          <h2 className="text-light text-[28px] font-medium">{hosting.name}</h2>
        </div>

        <p className="text-gray-light font-mono font-light leading-relaxed">
          <span
            className={`duration-300 ${hovered ? 'text-blue-medium' : 'text-gray-light'}`}
          >
            →
          </span>{' '}
          {hosting.description}
        </p>

        {hosting.capabilities && (
          <div className="mt-4 flex flex-wrap gap-2">
            {hosting.capabilities.map((capability) => (
              <span
                key={capability}
                className="text-xs font-mono uppercase tracking-wide px-2 py-1 rounded bg-gray-dark text-gray-light"
              >
                {capability}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-start mt-8">
        <button
          className="uppercase text-xs font-bold h-[36px] flex items-center justify-center border border-light rounded transition duration-300 ease-in-out px-4 font-mono tracking-wide text-light hover:text-black hover:bg-light cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            selectHosting();
          }}
        >
          {hosting.buttonText.replace(' with ', ' ')} +
        </button>
      </div>
    </div>
  );
};

export default HostingCard;