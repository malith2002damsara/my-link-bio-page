import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const BioCard = ({ link, onClick, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = link.icon;

  return (
    <div
      className="animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button
        onClick={() => onClick(link.url, link.name)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          w-full relative overflow-hidden
          bg-gradient-to-r ${link.gradient}
          text-white py-2.5 px-3.5 rounded-lg
          transform transition-all duration-300 
          hover:scale-[1.02] hover:shadow-lg hover:shadow-black/50
          flex items-center justify-between
          group
          shadow-sm shadow-black/30
          border border-white/10
        `}
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-black/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
        
        {/* Content */}
        <div className="relative flex items-center space-x-2.5 z-10">
          <div className={`
            bg-black/30 backdrop-blur-sm p-1.5 rounded-lg
            transform transition-all duration-300
            ${isHovered ? 'scale-110 rotate-6' : ''}
            border border-white/10
          `}>
            <IconComponent className={`w-4 h-4 ${link.iconColor || 'text-white'}`} />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-sm">{link.name}</h3>
            <p className="text-[10px] text-white/70">{link.description}</p>
          </div>
        </div>
        
        {/* Arrow Icon */}
        <div className="relative z-10 flex items-center gap-1">
          <span className="text-[9px] bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
            Visit
          </span>
          <ArrowRight className={`
            w-3.5 h-3.5 transition-all duration-300
            ${isHovered ? 'opacity-100 translate-x-1' : 'opacity-0'}
          `} />
        </div>
      </button>
    </div>
  );
};

export default BioCard;