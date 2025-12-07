const PlaceholderLogo = ({ name, size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-[8px]",
    md: "w-12 h-12 text-[10px]",
    lg: "w-16 h-16 text-xs",
  };

  const getInitials = (text) => {

    return text
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 3);
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-lg glass-card flex items-center justify-center 
        text-cyan font-bold tracking-wider border border-cyan/20 
        hover:border-cyan/40 hover:scale-105 transition-all duration-300 ${className}`}
    >
      {getInitials(name)}
    </div>
  );
};

export default PlaceholderLogo;
