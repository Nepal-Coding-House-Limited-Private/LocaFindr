import React from "react";

const UserAvatar: React.FC<{ name?: string; size?: number }> = ({ name = "A B S", size = 40 }) => {
  // Simple initials avatar
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-blue-200 text-blue-800 font-bold text-lg shadow border border-blue-300 select-none"
    >
      {initials}
    </div>
  );
};

export default UserAvatar;
