import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";

export default function Booked() {
  const [bookedUsers, setBookedUsers] = useState([]);
  useEffect(() => {
    const bookedUsers = JSON.parse(localStorage.getItem("bookedUsers")) || [];
    setBookedUsers(bookedUsers);
  }, []);

  console.log(bookedUsers);

  return (
    <div className="p-4">
      <Link to={"/"}>
        <div className="p-4">
          <button className="bg-black text-white px-4 py-2">Home</button>
        </div>
      </Link>
      {bookedUsers.map((bookedUser) => (
        <div className="m-1 p-4 bg-black text-white">
          <p>Show Name: {bookedUser.show}</p>
          <p>User: {bookedUser.name}</p>
          <p>Date: {bookedUser.date}</p>
          <p>Price: {bookedUser.price}</p>
        </div>
      ))}
    </div>
  );
}
