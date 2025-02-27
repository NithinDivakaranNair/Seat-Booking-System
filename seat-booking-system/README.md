# Interactive Seat Booking System


An interactive seat booking system for a movie theater or event venue. Users can select seats, view dynamic pricing, and book seats. Built with **React**, **Vite**, **Tailwind CSS**, and **Context API/Redux** for state management.

---

## Features

- **Seat Layout**:
  - Displays a 6x10 grid of seats.
  - Seats are color-coded based on pricing tiers:
    - Silver (Front rows): ₹100
    - Gold (Middle rows): ₹150
    - Platinum (Back rows): ₹200
  - Seats are clickable to select/deselect.

- **Dynamic Pricing**:
  - Displays the price of each seat when selected.
  - Updates the total cost in real-time as seats are selected/deselected.

- **Booking Summary**:
  - Shows a summary of selected seats and their prices.
  - Displays the total cost of the selected seats.
  - Includes a "Book Now" button with a confirmation message.

- **Constraints**:
  - Users can select a maximum of 8 seats.
  - Displays an error message if the user tries to select more than 8 seats.

- **State Management**:
  - Uses **React's Context API** or **Redux** for global state management.

- **Styling**:
  - Styled using **Tailwind CSS** for a clean and responsive UI.

---

## Technologies Used

- **Frontend**:
  - React
  - Vite (for fast development builds)
  - Tailwind CSS (for styling)
  - Context API or Redux (for state management)

- **Tools**:
  - Git (for version control)
  - npm (for package management)

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/seat-booking-system.git
   cd seat-booking-system
