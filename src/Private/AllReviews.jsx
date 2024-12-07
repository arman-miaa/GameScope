import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllReviews = () => {
  const initialReviews = useLoaderData();
  const [reviews, setReviews] = useState(initialReviews);
  const [sortField, setSortField] = useState("");
  const [genre, setGenre] = useState("");

  // Handle Sort (always descending)
  const handleSort = async () => {
    const response = await fetch(
      `https://ph-assignment10-server-lilac.vercel.app/reviews?sortField=${sortField}&genre=${genre}` // Send sortField and genre together
    );
    const sortedReviews = await response.json();
    setReviews(sortedReviews);
  };

  // Handle Filter
  const handleFilter = async () => {
    const response = await fetch(
      `https://ph-assignment10-server-lilac.vercel.app/reviews?genre=${genre}`
    );
    const filteredReviews = await response.json();
    setReviews(filteredReviews);
  };

  return (
    <div className="container mx-auto py-12">
      {/* Filter by Genres */}
      <div className="flex items-center justify-center p-4 gap-6">
        <select
          onChange={(e) => setGenre(e.target.value)}
          className="border-2 select select-bordered btn px-12 md:px-32"
        >
          <option value="">Filter By Genre</option>
          <option value="Action">Action</option>
          <option value="RPG">RPG</option>
          <option value="Adventure">Adventure</option>
        </select>
        <button onClick={handleFilter} className="btn btn-primary">
          Filter
        </button>
      </div>

      {/* Sort by Rating or Year */}
      <div className="flex items-center p-4 gap-6">
        <select
          onChange={(e) => setSortField(e.target.value)}
          className="border-2 select select-bordered btn px-12"
        >
          <option value="">Sort By</option>
          <option value="Rating">Rating</option>
          <option value="Year">Year</option>
        </select>
        <button onClick={handleSort} className="btn btn-primary">
          Sort
        </button>
      </div>

      {/* Display Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review._id}>
            <div className="card bg-base-100 shadow-xl p-6">
              <figure>
                <img
                  className="w-full h-[300px] object-cover rounded-xl"
                  src={review.image}
                  alt={review.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{review.title}</h2>
                <p>Genres: {review.genres}</p>
                <p>Publishing year: {review.year}</p>
                <p>Rating: {review.rating}/10⭐</p>
                <div className="card-actions justify-end">
                  <Link to={`/reviewsDetails/${review._id}`}>
                    <button className="btn btn-primary">Explore Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
