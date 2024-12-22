import React from 'react';

interface ProfileHeaderProps {
  name: string;
  email: string;
  profileImage: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, email, profileImage }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg">
      <img
        src={profileImage}
        alt={`${name}'s avatar`}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500">{email}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
