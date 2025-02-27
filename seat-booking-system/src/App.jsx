import React from "react";
import SeatLayout from "./components/SeatLayout";
import BookingSummary from "./components/BokkingSummary";

const App = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Interactive Seat Booking System</h1>
      <SeatLayout />
      <BookingSummary />
    </div>
  );
};

export default App;