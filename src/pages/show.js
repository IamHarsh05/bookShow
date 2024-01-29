import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Show() {
  const { index } = useParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getShow = () => {
    setLoading(true);
    setData([]);
    fetch(`https://api.tvmaze.com/search/shows?q=All`, {
      method: "GET",
    })
      .then(async (res) => {
        const shows = await res.json();
        if (res.status !== 404) {
          setData(shows);
          localStorage.setItem("showData", JSON.stringify(shows));
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Error while Loading");
        setLoading(false);
        console.error(err);
      });
  };

  useEffect(() => {
    const storedData = localStorage.getItem("showData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      getShow();
    }
  }, []);

  // const [show, setShow] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const [book, setBook] = useState([]);

  useEffect(() => {
    const bookedUsers = JSON.parse(localStorage.getItem("bookedUsers")) || [];
    setBook(bookedUsers);
  }, []);

  const bookShow = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Please select Name");
      return;
    }
    if (date === "") {
      alert("Please select date");
      return;
    }
    if (price === 0) {
      alert("Please select price");
      return;
    }
    alert("Show Booked");
    setBook([
      ...book,
      {
        show: data[index].show.name,
        name: name,
        date: date,
        price: price,
      },
    ]);
    localStorage.setItem(
      "bookedUsers",
      JSON.stringify([
        ...book,
        {
          show: data[index].show.name,
          name: name,
          date: date,
          price: price,
        },
      ])
    );
    setName('');
    setPrice('');
    setDate('');
  };

  console.log(book);

  return (
    <div className="w-screnn h-full md:h-screen bg-black p-4">
      {loading && <div className="text-4xl text-white my-4">Loading...</div>}
      {error && <div>{error}</div>}
      {data.length > 0 ? (
        <div className="overflow-hidden">
          <div
            key={data[index].score}
            className="flex flex-col md:flex-row bg-black text-white rounded-lg"
          >
            <img
              src={
                data[index].show.image
                  ? data[index].show.image.original
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              className="flex-none md:h-48 md:w-48 rounded-t-lg md:rounded-l-lg md:rounded-r-none"
              alt=""
            />
            <div className="flex-auto justify-center py-2">
              <Link to={`/show/${index}`}>
                <p className="flex justify-center px-4 hover:cursor-pointer hover:text-orange-400 md:justify-start text-2xl font-black">
                  {data[index].show.name}
                </p>
              </Link>
              <div className="flex justify-around px-4 py-2 text-sm hover:cursor-pointer hover:text-orange-400 font-black md:justify-start">
                <p>Status: {data[index].show.status}</p>
                <p>-</p>
                <p>Type: {data[index].show.type}</p>
              </div>
              <div className="flex flex-col md:flex-row hover:cursor-pointer hover:text-orange-400 justify-around px-4 py-2 text-sm font-black md:justify-start">
                <p>Language: {data[index].show.language}</p>
              </div>
              <div className="flex flex-col md:flex-row hover:cursor-pointer hover:text-orange-400 justify-around px-4 py-2 text-sm font-black md:justify-start">
                <p>Genres: {data[index].show.genres.join(", ")}</p>
              </div>
              <div className="flex flex-col md:flex-row hover:cursor-pointer hover:text-orange-400 justify-around px-4 py-2 text-sm font-black md:justify-start">
                <p
                  dangerouslySetInnerHTML={{
                    __html: `Summary: ${data[index].show.summary}`,
                  }}
                />
              </div>
            </div>
          </div>
          <Link to="/" className="text-black bg-white p-2">
            Back to Home
          </Link>
          <form>
            <div className="flex flex-col justify-center items-center p-4">
              <div className="flex flex-col md:flex-row">
                <label className="flex justify-center m-2">
                  <input
                    type="text"
                    name="show"
                    value={data[index].show.name}
                    onChange={() => <></>}
                    className="py-2 px-4 outline-none"
                  />
                </label>
                <label className="flex justify-center m-2">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="py-2 px-4 outline-none"
                    placeholder="Username"
                  />
                </label>
              </div>
              <div className="flex flex-col md:flex-row">
                <label className="flex justify-center m-2">
                  <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="py-2 px-4 outline-none"
                    placeholder="Price"
                  />
                </label>
                <label className="flex justify-center m-2">
                  <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="py-2 px-4 outline-none"
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="flex justify-center bg-white px-4 py-2"
                onClick={(e) => bookShow(e)}
              >
                Book
              </button>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Show;
