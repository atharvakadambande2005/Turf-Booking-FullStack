import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/apiService";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState({
    bookingDate: "",
    startTime: "",
    endTime: ""
  });

  const handleBooking = async () => {
    const userId = localStorage.getItem("userId");

    const res = await API.post("/bookings", {
      userId: Number(userId),
      turfId: Number(id),
      ...booking
    });

    alert(res.data);

    if (res.data === "Booking Successful") {
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      <h1>Book Turf</h1>

      <input
        type="date"
        onChange={(e) =>
          setBooking({ ...booking, bookingDate: e.target.value })
        }
      />

      <input
        type="time"
        onChange={(e) =>
          setBooking({ ...booking, startTime: e.target.value })
        }
      />

      <input
        type="time"
        onChange={(e) =>
          setBooking({ ...booking, endTime: e.target.value })
        }
      />

      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
}

export default Booking;