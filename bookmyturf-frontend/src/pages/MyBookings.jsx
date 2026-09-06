import { useEffect, useState } from "react";
import API from "../services/apiService";
import Navbar from "../components/Navbar";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const userId = localStorage.getItem("userId");

    const res = await API.get(`/bookings/user/${userId}`);
    setBookings(res.data);
  };

  const cancelBooking = async (id) => {
    const res = await API.put(`/bookings/cancel/${id}`);
    alert(res.data);
    fetchBookings();
  };

  return (
    <>
      <Navbar />

      <div className="home-container">
        <h1>My Bookings</h1>

        {bookings.map((b) => (
          <div className="turf-card" key={b.id}>
            <h2>{b.turf.name}</h2>
            <p>Date: {b.bookingDate}</p>
            <p>Time: {b.startTime} - {b.endTime}</p>
            <p>Status: {b.status}</p>

            {b.status === "BOOKED" && (
              <button onClick={() => cancelBooking(b.id)}>
                Cancel Booking
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default MyBookings;