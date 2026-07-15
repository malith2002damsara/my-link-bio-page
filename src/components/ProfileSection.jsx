import React from 'react';


const ProfileSection = ({ profile }) => {
  return (
    <div className="text-center mb-10 animate-slide-up">

     <div className="relative w-32 h-32 mx-auto mb-4">
  <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-1 animate-pulse-slow">
    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
      {profile.avatar ? (
        <img 
          src={profile.avatar} 
          alt={profile.name}
          className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-500"
        />
      ) : (
        <span className="text-5xl animate-bounce-slow">{profile.emoji}</span>
      )}
    </div>
  </div>
</div>

      {/* Name & Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        {profile.name}
      </h1>
      
    </div>
  );
};

export default ProfileSection;