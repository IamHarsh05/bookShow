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
          <img
            src={
              bookedUser.details.show.image
                ? bookedUser.details.show.image.original
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            className="flex-none md:h-48 md:w-48 rounded-t-lg md:rounded-l-lg md:rounded-r-none"
            alt=""
          />
          <p>Show Name: {bookedUser.show}</p>
          <p>User: {bookedUser.name}</p>
          <p>Date: {bookedUser.date}</p>
          <p>Price: {bookedUser.price}</p>
        </div>
      ))}
    </div>
  );
}
