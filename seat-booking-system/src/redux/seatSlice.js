import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seatLayout: [],
  selectedSeats: [],
  totalCost: 0,
};

const pricing = {
  Silver: 100,
  Gold: 150,
  Platinum: 200,
};

const generateSeatLayout = () => {
  const rows = 6;
  const seatsPerRow = 10;
  const layout = [];
  for (let row = 0; row < rows; row++) {
    const rowSeats = [];
    for (let seat = 1; seat <= seatsPerRow; seat++) {
      const seatId = `${String.fromCharCode(65 + row)}${seat}`;
      let tier;
      if (row < 2) tier = "Silver";
      else if (row < 4) tier = "Gold";
      else tier = "Platinum";
      rowSeats.push({ id: seatId, tier, price: pricing[tier], selected: false });
    }
    layout.push(rowSeats);
  }
  return layout;
};

const seatSlice = createSlice({
  name: "seat",
  initialState: {
    ...initialState,
    seatLayout: generateSeatLayout(),
  },
  reducers: {
    selectSeat: (state, action) => {
      const { rowIndex, seatIndex } = action.payload;
      const seat = state.seatLayout[rowIndex][seatIndex];

      if (state.selectedSeats.length >= 8 && !seat.selected) {
        alert("You can only select up to 8 seats.");
        return;
      }

      seat.selected = !seat.selected;
      state.selectedSeats = seat.selected
        ? [...state.selectedSeats, seat]
        : state.selectedSeats.filter((s) => s.id !== seat.id);
      state.totalCost = state.selectedSeats.reduce((total, seat) => total + seat.price, 0);
    },
  },
});

export const { selectSeat } = seatSlice.actions;
export default seatSlice.reducer;