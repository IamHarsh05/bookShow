import React, { useEffect, useState } from "react";
import Card from "../Card/card";

export default function Shows() {
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
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
        console.error(error);
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

  return (
    <div>
      <div className="my-8">
        {loading && (
          <div className="my-36 px-2 md:my-16 text-4xl">Loading...</div>
        )}
        {data ? (
          <Card data={data} />
        ) : loading ? (
          <></>
        ) : (
          <p className="my-36 px-2 md:my-16 text-4xl">
            There is no Data Available
          </p>
        )}
      </div>
      <div className="max-w-full mx-auto bg-gray-900/90 flex fixed z-50 justify-around items-center bottom-0 right-0 left-0 divide-x">
        <div className="flex items-center justify-between">
          <div className="">
            <button
              onClick={() => setPage(page - 1)}
              className="mx-8 my-4 text-white"
            >
              Previouse
            </button>
          </div>
          <div className="text-sm text-white">
            Page No. {page ? page : <></>} of {data !== "" ? data.length : 1}
          </div>
          <div>
            {data !== "" ? (
              <button
                onClick={() => setPage(page + 1)}
                className="mx-8 my-4 text-white"
              >
                Next
              </button>
            ) : (
              <button
                className="mx-8 my-4 text-white cursor-not-allowed"
                disabled
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
