import React from "react";
import { useNavigate } from "react-router-dom";
import "./LogoutButton.css";

export default function LogoutButton({ logout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return <button className="logout-button" onClick={handleLogout}>🚪 Logout</button>;
}
