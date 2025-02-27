import React from "react";

const Seat = ({ seat, onClick }) => {
  const { id, tier, selected } = seat;

  // Determine seat color based on tier
  const seatColor = selected
    ? "bg-green-500"
    : tier === "Silver"
    ? "bg-gray-400"
    : tier === "Gold"
    ? "bg-yellow-500"
    : "bg-purple-500";

  return (
    <div
      className={`w-10 h-10 flex items-center justify-center rounded cursor-pointer ${seatColor}`}
      onClick={onClick}
    >
      {id}
    </div>
  );
};

export default Seat;