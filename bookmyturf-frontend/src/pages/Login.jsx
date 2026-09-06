import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/apiService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/users/login", {
        email,
        password,
      });

      console.log("Login Response:", res.data);

      // Check if user object is received
      if (res.data && res.data.id) {
        localStorage.setItem("userId", String(res.data.id));
        localStorage.setItem("userName", res.data.name);
        localStorage.setItem("userRole", res.data.role);

        alert("Welcome " + res.data.name);

        if (res.data.role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/home");
        }
      } else {
        alert("Invalid Email or Password");
      }
    } catch (err) {
      console.error(err);
      alert("Login Failed");
    }
  };

  return (
    <div className="login-container">
      <h1>BookMyTurf</h1>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;