import React from "react";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  return (
    <div>
      {data ? (
        <div className="mx-2 overflow-hidden">
          <div className="grid grid-cols-2 py-8 md:grid-cols-2 gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-black text-white rounded-lg"
              >
                <img
                  src={
                    item.show.image !== null
                      ? item.show.image.medium
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  className="flex-none md:h-48 md:w-48 rounded-t-lg md:rounded-l-lg md:rounded-r-none"
                  alt=""
                />
                <div className="flex-auto justify-center py-2">
                  <Link to={`/show/${index}`}>
                    <p className="flex justify-center px-4 hover:cursor-pointer hover:text-orange-400 md:justify-start text-2xl font-black">
                      {item.show.name}
                    </p>
                  </Link>
                  <div className="flex justify-around px-4 py-2 text-sm hover:cursor-pointer hover:text-orange-400 font-black md:justify-start">
                    <p>{item.show.status}</p>
                    <p>-</p>
                    <p>{item.show.type}</p>
                  </div>
                  <div className="flex flex-col md:flex-row hover:cursor-pointer hover:text-orange-400 justify-around px-4 py-2 text-sm font-black md:justify-start">
                    <p>Language :</p>
                    <p>&nbsp;&nbsp;{item.show.language}</p>
                  </div>
                  <div className="flex flex-col md:flex-row hover:cursor-pointer hover:text-orange-400 justify-around px-4 py-2 text-sm font-black md:justify-start">
                    <p>Runtime :</p>
                    <p>&nbsp;&nbsp;{item.show.runtime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
