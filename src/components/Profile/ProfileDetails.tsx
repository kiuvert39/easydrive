import React from 'react';

interface ProfileDetailsProps {
  phone: string;
  address: string;
  bio: string;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ phone, address, bio }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg mt-4">
      <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
      <h3 className="text-lg font-semibold mt-4 mb-2">About Me</h3>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileDetails;
