import React from "react";
import Seat from "./Seat";
import { useDispatch, useSelector } from "react-redux";
import { selectSeat } from "../redux/seatSlice";

const SeatLayout = () => {
  const dispatch = useDispatch();
  const seatLayout = useSelector((state) => state.seat.seatLayout);

  return (
    <div className="mb-8">
      {seatLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-2 mb-2">
          {row.map((seat, seatIndex) => (
            <Seat
              key={seat.id}
              seat={seat}
              onClick={() => dispatch(selectSeat({ rowIndex, seatIndex }))}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatLayout;