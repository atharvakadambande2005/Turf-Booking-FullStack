import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/apiService";
import Navbar from "../components/Navbar";

function Home() {
  const [turfs, setTurfs] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchTurfs();
  }, []);

  const fetchTurfs = async () => {
    const res = await API.get("/turfs");
    setTurfs(res.data);
  };

  const filteredTurfs = useMemo(() => {
    return turfs.filter((turf) =>
      turf.location.toLowerCase().includes(search.toLowerCase())
    );
  }, [turfs, search]);

  return (
    <>
      <Navbar />

      <div className="home-container">
        <h1>Available Cricket Turfs</h1>

        <input
          type="text"
          placeholder="Search by location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

        {filteredTurfs.map((turf) => (
          <div className="turf-card" key={turf.id}>

            <img
              src={turf.image}
              alt={turf.name}
              className="turf-image"
            />

            <div className="turf-content">
              <h2>{turf.name}</h2>
              <p>{turf.location}</p>
              <p>₹ {turf.pricePerHour} / Hour</p>
              <p>{turf.description}</p>

              <button onClick={() => navigate(`/booking/${turf.id}`)}>
                Book Now
              </button>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}

export default Home;