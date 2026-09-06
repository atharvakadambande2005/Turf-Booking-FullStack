import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/apiService";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "USER"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const res = await API.post("/users/register", user);
    alert(res.data);
    navigate("/");
  };

  return (
    <div className="login-container">
      <h1>BookMyTurf</h1>
      <h2>Register</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button onClick={handleRegister}>Register</button>

      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Register;