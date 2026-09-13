import { useEffect, useState } from "react";
import API from "../services/apiService";
import Navbar from "../components/Navbar";

function AdminDashboard() {
  const [turf, setTurf] = useState({
    name: "",
    location: "",
    pricePerHour: "",
    address: "",
    description: "",
    image: ""
  });

  const [turfs, setTurfs] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchTurfs();
  }, []);

  const fetchTurfs = async () => {
    const res = await API.get("/turfs");
    setTurfs(res.data);
  };

  const handleChange = (e) => {
    setTurf({ ...turf, [e.target.name]: e.target.value });
  };

  const addTurf = async () => {
    const res = await API.post("/turfs", turf);
    alert(res.data);

    setTurf({
      name: "",
      location: "",
      pricePerHour: "",
      address: "",
      description: "",
      image: ""
    });

    fetchTurfs();
  };

  const editTurf = (turf) => {
    setEditId(turf.id);

    setTurf({
      name: turf.name,
      location: turf.location,
      pricePerHour: turf.pricePerHour,
      address: turf.address,
      description: turf.description,
      image: turf.image
    });
  };

  const updateTurf = async () => {
    const res = await API.put(`/turfs/${editId}`, turf);
    alert(res.data);

    setEditId(null);

    setTurf({
      name: "",
      location: "",
      pricePerHour: "",
      address: "",
      description: "",
      image: ""
    });

    fetchTurfs();
  };

  const deleteTurf = async (id) => {
    if (!window.confirm("Are you sure you want to delete this turf?")) {
      return;
    }

    const res = await API.delete(`/turfs/${id}`);
    alert(res.data);

    fetchTurfs();
  };

  return (
    <>
      <Navbar />

      <div className="login-container">
        <h2>{editId ? "Edit Turf" : "Add New Turf"}</h2>

        <input
          name="name"
          placeholder="Turf Name"
          value={turf.name}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={turf.location}
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Full Address"
          value={turf.address}
          onChange={handleChange}
        />

        <input
          name="pricePerHour"
          type="number"
          placeholder="Price Per Hour"
          value={turf.pricePerHour}
          onChange={handleChange}
        />

        <input
          name="description"
          placeholder="Description"
          value={turf.description}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Image URL"
          value={turf.image}
          onChange={handleChange}
        />

        {editId ? (
          <button onClick={updateTurf}>Update Turf</button>
        ) : (
          <button onClick={addTurf}>Add Turf</button>
        )}
      </div>

      <div className="home-container">
        <h2>Manage Turfs</h2>

        {turfs.map((turf) => (
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

              <button onClick={() => editTurf(turf)}>
                Edit
              </button>

              <button onClick={() => deleteTurf(turf.id)}>
                Delete
              </button>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}

export default AdminDashboard;