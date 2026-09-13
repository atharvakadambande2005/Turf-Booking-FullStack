import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../services/apiService";
import Navbar from "../components/Navbar";

function Home() {
  const [turfs, setTurfs] = useState([]);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  useEffect(() => {
    fetchTurfs();
  }, []);

  const fetchTurfs = async () => {
    const res = await API.get("/turfs");
    setTurfs(res.data);
  };

  const filteredTurfs = turfs.filter((turf) =>
    turf.location.toLowerCase().includes(search.toLowerCase())
  );

  const viewOnMap = (address) => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapUrl, "_blank");
  };

  return (
    <>
      <Navbar />

      <div className="home-container">

        <h1>Book Your Perfect Turf</h1>

        <p className="home-subtitle">
          Your Game. Your Turf. Your Time.
        </p>

        <div className="turf-grid">

          {filteredTurfs.map((turf) => (
            <div className="turf-card" key={turf.id}>

              <img
                src={turf.image}
                alt={turf.name}
                className="turf-image"
              />

              <div className="turf-content">

                <h2>{turf.name}</h2>

                <p className="turf-location">
                  📍 {turf.location}
                </p>

                <p>
                  🗺️ {turf.address}
                </p>

                <p className="turf-price">
                  💰 ₹ {turf.pricePerHour} / Hour
                </p>

                <p>
                  {turf.description}
                </p>

                <div className="turf-buttons">

                  <button
                    className="map-button"
                    onClick={() => viewOnMap(turf.address)}
                  >
                    View on Map
                  </button>

                  <button
                    className="book-button"
                    onClick={() => navigate(`/booking/${turf.id}`)}
                  >
                    Book Now
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default Home;