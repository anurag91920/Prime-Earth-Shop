import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`,
        data
      );

      alert(res.data.status || "Signup complete");
      navigate("/"); // Redirect after successful signup
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || "Signup failed. Try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          minWidth: "300px",
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "#fff"
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Sign Up</h3>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="Enter name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Enter email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginBottom: "10px",
              width: "100%"
            }}
          >
            Sign Up
          </button>

          <div>
            <button
              type="button"
              onClick={() => navigate("/login")}
              style={{
                backgroundColor: "transparent",
                color: "blue",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: "14px"
              }}
            >
              Already have an account? Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
