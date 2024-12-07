import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const ReviewsDetails = () => {
  const { users } = useContext(AuthContext);
  // console.log(users);
  const details = useLoaderData();
  const {
    image,
    title,
    review,
    rating,
    genres,
    email,
    name: reviewer,
  } = details;
  // console.log(details);

  const loggedInUser = {
    name: `${users.displayName}`,
    email: `${users.email}`,
  };
  // console.log(loggedInUser);

  const handleWatchList = () => {
    // console.log(details);
    const watchlistData = {
      reviewId: details._id,
      title,
      image,
      rating,
      genres,
      addedBy: loggedInUser.name,
      userEmail: loggedInUser.email,
    };

    fetch("https://ph-assignment10-server-lilac.vercel.app/watchlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchlistData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("added watchlist successfully on database");
        // console.log("added watchlist successfully", data);
      })
      .catch((error) => {
        toast.success("not added watchlist on database");

        // console.log("not added watchlist on database", error);
      });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Banner Section */}
      {/* <div
        className="relative w-full h-[400px] lg:h-[500px] bg-cover bg-center rounded-lg mb-8"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "contain", // Shows the whole image without cropping
          backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">{title}</h1>
        </div>
      </div> */}

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-8 bg-base-100 shadow-xl p-6 rounded-lg">
        {/* Game Cover Image */}
        <div className="w-full h-auto lg:w-1/3">
          <img
            src={image}
            alt={title}
            className="w-full h-full  rounded-lg object-fit shadow-md"
          />
        </div>

        {/* Game Details */}
        <div className="w-full lg:w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-[var(--text-color)] mb-4">{review}</p>
            <div className="mb-4">
              <p className="font-semibold">
                <span className="text-primary">Genre:</span> {genres}
              </p>
              <p className="font-semibold">
                <span className="text-primary">Rating:</span> {rating}/10⭐
              </p>
            </div>
            <div>
              <p className="text-[var(--text-color)] ">
                <span className="font-semibold text-primary">Reviewed By:</span>{" "}
                {reviewer}
              </p>
              <p className="text-[var(--text-color)] ">
                <span className="font-semibold text-primary">
                  Reviewer Email:
                </span>{" "}
                {email}
              </p>
            </div>
          </div>

          {/* Add to Watchlist */}
          <button
            onClick={handleWatchList}
            className="btn btn-primary mt-6 w-full lg:w-auto"
          >
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsDetails;
