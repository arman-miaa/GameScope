import { useLoaderData } from "react-router-dom";

const AllReviews = () => {
    const reviews = useLoaderData();

    return (
      <div className="container mx-auto py-12">
        All Reviews {reviews.length}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review._id}>
              <div className="card bg-base-100 shadow-xl p-6">
                <figure>
                  <img className="w-full h-[300px] object-cover rounded-xl"
                    src={review.image}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{review.title}</h2>
                  <p>Genres: { review.genres}</p>
                  <p>Rating: {review.rating}/10⭐</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Explore Details</button>
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