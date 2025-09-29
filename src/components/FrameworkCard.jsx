
import { useState } from 'react';

const FrameworkCard = ({ framework, title, logoSrc, logoAlt, description, buttonText }) => {
  const [hovered, setHovered] = useState(false);

  const selectFramework = () => {
    console.log('Telemetry: framework_chosen', { framework });
    alert(`Selected ${framework}.\n\nNext step: Route to /choose/runtime-host?framework=${framework}`);
  };

  return (
    <div
      className={`cursor-pointer p-6 border rounded-md duration-300 flex flex-col justify-between h-full ${
        hovered ? 'border-gray-medium scale-[1.02]' : 'border-gray-dark'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={selectFramework}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectFramework();
        }
      }}
      tabIndex="0"
    >
      <div>
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src={logoSrc}
              alt={logoAlt}
              className={`w-10 h-10 object-contain transition-all duration-300 ${
                hovered ? 'scale-110' : ''
              }`}
            />
          </div>
          <h2 className="text-light text-[28px] font-medium">{title}</h2>
        </div>

        <p className="text-gray-light font-mono font-light leading-relaxed">
          <span
            className={`duration-300 ${hovered ? 'text-blue-medium' : 'text-gray-light'}`}
          >
            →
          </span>{' '}
          {description}
        </p>
      </div>

      <div className="flex justify-start mt-8">
        <button
          className="uppercase text-xs font-bold h-[36px] flex items-center justify-center border border-light rounded transition duration-300 ease-in-out px-4 font-mono tracking-wide text-light hover:text-black hover:bg-light"
          onClick={(e) => {
            e.stopPropagation();
            selectFramework();
          }}
        >
          {buttonText.replace(' →', '')} +
        </button>
      </div>
    </div>
  );
};

export default FrameworkCard;