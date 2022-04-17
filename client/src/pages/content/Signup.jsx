import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/Signup/Signup.css";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [error, setError] = useState("");

  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setError("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        {
          first_name,
          last_name,
          email,
          password,
          address,
        }
      );

      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
      return;
    }
    
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} method="submit" className="signup__form">
        <h1 className="signup__form-title">Sign up for shopME</h1>
        {error && <h2 className="signup__error">{error}</h2>}
        <label>
          First Name:
          <input
            type="text"
            name="fname"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lname"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            required
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="email"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            name="email"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            required
          />
        </label>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Signup;
