import React from "react";

const activities = [
  "Booked a Tesla Model 3 - 2 days ago",
  "Updated profile details - 1 week ago",
  "Joined Premium Membership - 1 month ago",
];

const RecentActivityCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="text-gray-700">
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivityCard;
