import React from 'react';
import { profileData } from '../utils/linksData';

const Footer = ({ socialLinks, year }) => {
  return (
    <div className="mt-10 text-center animate-fade-in">
     

      {/* Footer Text */}
      <div className="space-y-2">
        <p className="text-gray-400 text-sm">
          © {year} {profileData.name}. All rights reserved
        </p>
       
      </div>
    </div>
  );
};

export default Footer;