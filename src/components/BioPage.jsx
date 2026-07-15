import React, { useState, useEffect } from 'react';
import { profileData, mainLinks } from '../utils/linksData';
import ProfileSection from './ProfileSection';
import BioCard from './BioCard';
import Footer from './Footer';

const BioPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (url, name) => {
    // Track click (you can add analytics here)
    console.log(`🔗 Clicked: ${name} - ${url}`);
    
    // Open in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background - Darker */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Card - Dark Glass Effect */}
      <div className="relative w-full max-w-2xl bg-black/50 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl shadow-black/50 p-6 md:p-10 animate-fade-in">
        {/* Profile Section */}
        <ProfileSection profile={profileData} />

        {/* Links Grid - No Filters */}
        <div className="space-y-4">
          {mainLinks.map((link, index) => (
            <BioCard
              key={link.id}
              link={link}
              onClick={handleClick}
              index={index}
            />
          ))}
        </div>

        {/* Footer */}
        <Footer  />
      </div>
    </div>
  );
};

export default BioPage;