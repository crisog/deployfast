
import { Button } from './ui/button';

const FrameworkCard = ({ framework, title, logoSrc, logoAlt, description, buttonText }) => {
  const selectFramework = () => {
    console.log('Telemetry: framework_chosen', { framework });

    alert(`Selected ${framework}.\n\nNext step: Route to /choose/runtime-host?framework=${framework}`);
  };

  return (
    <div
      className="group bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer focus-within:ring-2 focus-within:ring-ring"
      tabIndex="0"
      onClick={selectFramework}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectFramework();
        }
      }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 flex items-center justify-center">
          <img src={logoSrc} alt={logoAlt} className="w-10 h-10 object-contain" />
        </div>
        <h3 className="text-2xl font-semibold text-card-foreground">{title}</h3>
      </div>

      <p className="text-muted-foreground mb-6">
        {description}
      </p>

      <Button className="w-full" size="lg">
        {buttonText}
      </Button>
    </div>
  );
};

export default FrameworkCard;