import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem("token");
  const navigate = useNavigate();

    useEffect(() => {
  if (!token) {
    navigate("/login");
    return null; // Prevent rendering the children if user is not logged in
  }}, [token]);

  return (
    <div className="p-7 flex flex-col justify-between">
      {children}
    </div>
  );
}

export default UserProtectedWrapper;