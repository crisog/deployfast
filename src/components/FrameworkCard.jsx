
const FrameworkCard = ({ framework, title, logo, description, buttonText }) => {
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
        <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
          <span className="text-background font-bold">{logo}</span>
        </div>
        <h3 className="text-2xl font-semibold text-card-foreground">{title}</h3>
      </div>

      <p className="text-muted-foreground mb-6">
        {description}
      </p>

      <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors group-hover:bg-primary/90">
        {buttonText}
      </button>
    </div>
  );
};

export default FrameworkCard;