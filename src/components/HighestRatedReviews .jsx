import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HighestRatedReviews = () => {
  const [reviews, setReviews] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    fetch("http://localhost:5000/highest-rated-reviews")
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 border-2 rounded-xl p-6">
            {reviews.map((review, index) => (
              <div key={index}>
                <div className="card bg-base-100 flex border-2 shadow-xl p-6">
                  <figure>
                    <img
                      className="w-full h-[200px] object-fitt rounded-xl"
                      src={review.image}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="mt-4">
                    <h2 className="   text-3xl ">{review.title}</h2>
                    <p className=" text-2xl">Genres:{review.genres}</p>
                    <p className=" text-2xl">Ragin: {review.rating} /10⭐</p>
                    <div className="mt-6">
                      <Link to={`/reviewsDetails/${review._id}`}>
                        <button className="btn btn-primary w-full">
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
