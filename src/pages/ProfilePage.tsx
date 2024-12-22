import React, { useState } from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileDetails from '../components/Profile/ProfileDetails';
import EditProfileForm from '../components/Profile/EditProfileForm';

const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+123 456 7890',
    address: '123 Main St, Anytown, USA',
    bio: 'A brief bio about John Doe.',
    profileImage: 'https://via.placeholder.com/150',
  });

  const handleSave = (name: string, email: string) => {
    setUser({ ...user, name, email });
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-4">
      <ProfileHeader
        name={user.name}
        email={user.email}
        profileImage={user.profileImage}
      />
      {isEditing ? (
        <EditProfileForm
          currentName={user.name}
          currentEmail={user.email}
          onSave={handleSave}
        />
      ) : (
        <>
          <ProfileDetails
            phone={user.phone}
            address={user.address}
            bio={user.bio}
          />
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
