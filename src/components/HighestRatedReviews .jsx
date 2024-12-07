import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HighestRatedReviews = () => {
  const [reviews, setReviews] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    fetch(
      "https://ph-assignment10-server-lilac.vercel.app/highest-rated-reviews"
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false); // Data has been loaded
      })
      .catch((error) => {
        console.log("ERROR", error);
        setLoading(false); // Stop loading even on error
      });
  }, []);

  return (
    <div>
      {loading ? ( // Show a loading message until data is fetched
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Highest Rated Reviews Page</h2>
          <p>Total Reviews: {reviews.length}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8  rounded-xl p-6">
            {reviews.map((review, index) => (
              <div key={index}>
                <div className="card  flex flex-col justify-between border-2 border-lime-400 shadow-xl p-6 h-full">
                  <figure>
                    <img
                      className="w-full h-[200px] object-cover rounded-xl"
                      src={review.image}
                      alt={review.title}
                    />
                  </figure>
                  <div className="flex flex-col flex-grow mt-4 text-[var(--text-color)] ">
                    <h2 className="text-3xl font-bold">{review.title}</h2>
                    <p className="text-2xl mt-2">Genres: {review.genres}</p>
                    <p className="text-2xl mt-2">
                      Rating: {review.rating} / 10 ⭐
                    </p>
                    <div className="mt-auto">
                      <Link to={`/reviewsDetails/${review._id}`}>
                        <button className="btn bg-[#ADFF00] border-none w-full mt-6 font-bold">
                          Explore Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HighestRatedReviews;
