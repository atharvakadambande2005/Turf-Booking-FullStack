import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const role = localStorage.getItem("userRole");
  const name = localStorage.getItem("userName");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar">

      <div className="logo">

        <svg
          className="logo-icon"
          viewBox="0 0 220 130"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* ---------- Crown ---------- */}

          <path
            d="M82 28 L90 10 L103 23 L110 7 L117 23 L130 10 L138 28 L134 39 L86 39 Z"
            fill="white"
          />

          <path
            d="M86 42 H134"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* ---------- Left Wing ---------- */}

          <path
            d="M82 48
               C65 37 47 27 20 25
               C35 37 49 46 63 51
               C46 43 29 40 8 42
               C27 53 45 58 62 58
               C43 55 25 59 8 67
               C28 73 47 71 64 66
               C49 69 37 77 27 88
               C45 86 62 77 75 68
               L88 57 Z"
            fill="white"
          />

          {/* Left Wing Details */}

          <path
            d="M67 47 C50 38 36 34 20 32"
            fill="none"
            stroke="#0b7a3e"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M64 54 C45 49 30 47 15 47"
            fill="none"
            stroke="#0b7a3e"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M64 61 C46 61 31 64 17 69"
            fill="none"
            stroke="#0b7a3e"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M68 66 C54 71 44 77 35 83"
            fill="none"
            stroke="#0b7a3e"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* ---------- Right Wing ---------- */}

          <path
            d="M138 48
               C155 37 173 27 200 25
               C185 37 171 46 157 51
               C174 43 191 40 212 42
               C193 53 175 58 158 58
               C177 55 195 59 212 67
               C192 73 173 71 156 66
               C171 69 183 77 193 88
               C175 86 158 77 145 68
               L132 57 Z"
            fill="white"
          />

          {/* Right Wing Details */}

          <path
            d="M153 47 C170 38 184 34 200 32"
            fill="none"
            stroke="#0b7a3e"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M156 54 C175 49 190 47 205 47"
            fill="none"
            stroke="#0b7a3e"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M156 61 C174 61 189 64 203 69"
            fill="none"
            stroke="#0b7a3e"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M152 66 C166 71 176 77 185 83"
            fill="none"
            stroke="#0b7a3e"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* ---------- Cricket Ball Outer Circle ---------- */}

          <circle
            cx="110"
            cy="68"
            r="32"
            fill="#0b7a3e"
            stroke="white"
            strokeWidth="5"
          />

          {/* ---------- Cricket Ball Inner Circle ---------- */}

          <circle
            cx="110"
            cy="68"
            r="25"
            fill="none"
            stroke="white"
            strokeWidth="3"
          />

          {/* ---------- Cricket Ball Seam ---------- */}

          <path
            d="M94 43
               C106 52 106 84 94 93"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeDasharray="4 3"
          />

          <path
            d="M126 43
               C114 52 114 84 126 93"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeDasharray="4 3"
          />

          {/* ---------- CRICKET Text ---------- */}

          <text
            x="110"
            y="119"
            textAnchor="middle"
            fill="white"
            fontSize="19"
            fontWeight="bold"
            fontFamily="Arial, Helvetica, sans-serif"
            letterSpacing="2"
          >
            CRICKET
          </text>

        </svg>

        <h2>BookMyTurf</h2>

      </div>

      <div>
        <span style={{ marginRight: "20px" }}>Hi, {name}</span>

        <Link to="/home">Home</Link>
        <Link to="/mybookings">My Bookings</Link>

        {role === "ADMIN" && (
          <Link to="/admin">Admin</Link>
        )}

        <button onClick={logout}>Logout</button>
      </div>

    </nav>
  );
}

export default Navbar;