import React, { useState } from 'react';

interface EditProfileFormProps {
  currentName: string;
  currentEmail: string;
  onSave: (name: string, email: string) => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ currentName, currentEmail, onSave }) => {
  const [name, setName] = useState(currentName);
  const [email, setEmail] = useState(currentEmail);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(name, email);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-lg mt-4">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProfileForm;
