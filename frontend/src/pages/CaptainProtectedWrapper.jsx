import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCaptainDataContext } from "../context/CaptainDataContext"; // Import the context hook

const CaptainProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const[captain, setCaptain] = useCaptainDataContext(); // Use the context hook to access captain data

    useEffect(() => {
  if (!token) {
    navigate("/captain-login");
    return null; // Prevent rendering the children if user is not logged in
  }}, [token]);

  return (
    <div className="p-7 flex flex-col justify-between">
      {children}
    </div>
  );
}

export default UserProtectedWrapper;