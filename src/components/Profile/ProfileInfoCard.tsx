import React from "react";

const ProfileInfoCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
      <ul className="space-y-2">
        <li>
          <strong>Full Name:</strong> John Doe
        </li>
        <li>
          <strong>Email:</strong> johndoe@example.com
        </li>
        <li>
          <strong>Phone:</strong> +123 456 7890
        </li>
        <li>
          <strong>Membership:</strong> Premium Member
        </li>
      </ul>
    </div>
  );
};

export default ProfileInfoCard;
