import React from "react";
import { useSelector } from "react-redux";

const BookingSummary = () => {
  const selectedSeats = useSelector((state) => state.seat.selectedSeats);
  const totalCost = useSelector((state) => state.seat.totalCost);

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
      {selectedSeats.map((seat) => (
        <div key={seat.id} className="flex justify-between">
          <span>{seat.id}</span>
          <span>₹{seat.price}</span>
        </div>
      ))}
      <div className="flex justify-between mt-4 font-bold">
        <span>Total Cost:</span>
        <span>₹{totalCost}</span>
      </div>
      <button
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        onClick={() => alert("Booking confirmed!")}
      >
        Book Now
      </button>
    </div>
  );
};

export default BookingSummary;