import { useState } from 'react';
import type { DeploymentResource, FrameworkId } from '../frameworks.ts';

interface ResourceCardProps {
  resource: DeploymentResource;
  framework: FrameworkId;
}

const ResourceCard = ({ resource, framework }: ResourceCardProps) => {
  const [hovered, setHovered] = useState(false);

  const viewResource = () => {
    console.log('Telemetry: resource_viewed', { framework, resourceId: resource.id, type: resource.type });
    window.location.href = `/deploy/${framework}/${resource.id}`;
  };

  const getIcon = () => {
    switch (resource.type) {
      case 'dockerfile':
        return '🐳';
      case 'guide':
        return '📖';
      case 'config':
        return '⚙️';
      default:
        return '📄';
    }
  };

  const getTypeLabel = () => {
    switch (resource.type) {
      case 'dockerfile':
        return 'Docker';
      case 'guide':
        return 'Guide';
      case 'config':
        return 'Config';
      default:
        return 'Resource';
    }
  };

  return (
    <div
      className={`cursor-pointer p-6 border rounded-md duration-300 flex flex-col justify-between h-full ${
        hovered ? 'border-gray-medium scale-[1.02]' : 'border-gray-dark'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={viewResource}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          viewResource();
        }
      }}
      tabIndex={0}
    >
      <div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-2xl">{getIcon()}</div>
          <div>
            <h3 className="text-light text-[20px] font-medium">{resource.title}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs font-mono uppercase tracking-wide px-2 py-1 rounded bg-gray-dark text-gray-light">
                {getTypeLabel()}
              </span>
              {resource.filename && resource.type !== 'dockerfile' && (
                <span className="text-xs font-mono text-gray-light">
                  {resource.filename}
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="text-gray-light font-mono font-light leading-relaxed">
          <span
            className={`duration-300 ${hovered ? 'text-blue-medium' : 'text-gray-light'}`}
          >
            →
          </span>{' '}
          {resource.description}
        </p>
      </div>

      <div className="flex justify-start mt-6">
        <button
          className="uppercase text-xs font-bold h-[36px] flex items-center justify-center border border-light rounded transition duration-300 ease-in-out px-4 font-mono tracking-wide text-light hover:text-black hover:bg-light cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            viewResource();
          }}
        >
          View {getTypeLabel()} +
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;