import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
        data
      );

      if (res.data.token) {
        alert("Login Success");
        localStorage.setItem("token", res.data.token);
        navigate("/"); // Redirect after login
      } else {
        alert(res.data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "An error occurred during login.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 border rounded shadow bg-white" style={{ minWidth: "300px", maxWidth: "400px", width: "100%" }} onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Login</h3>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <button
            type="button"
            className="btn btn-outline-secondary w-100"
            onClick={() => navigate('/signup')}
          >
            Don't have an account? <strong>Sign up</strong>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
