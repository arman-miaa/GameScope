import { useEffect, useState } from "react";

const PopularGames = () => {
  const [populargames, setPopulargames] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    fetch("https://ph-assignment10-server-lilac.vercel.app/populargame")
      .then((res) => res.json())
      .then((data) => {
        setPopulargames(data);
        setLoading(false); // Data has been loaded
      })
      .catch((error) => {
        console.log("ERROR", error);
        setLoading(false); // Stop loading even on error
      });
  }, []);

  const handlePlayGame = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="px-6 py-8">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-lime-400">Popular Games</h1>
        <p className=" mt-2 md:w-1/2 mx-auto text-xl">
          Discover the most popular games that gamers around the globe adore.
          Whether you're into epic adventures, strategic challenges, or
          fast-paced action, there's something for everyone. 
        </p>
      </div>

      {loading ? (
        <p className="text-center text-gray-300">Loading...</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {populargames.map((game, index) => (
              <div
                key={index}
                className="bg-black border-2 border-lime-400 p-6 rounded-lg shadow-lg text-white flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="flex justify-center mb-4">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-48 h-48 rounded-full object-cover rounded"
                  />
                </div>

                {/* Content Section */}
                <div className="text-center flex flex-col flex-grow">
                  <p className="text-lime-400 text-xl font-bold mb-2">
                    [ {index + 1} ]
                  </p>
                  <h2 className="text-2xl font-bold uppercase mb-4">
                    {game.title}
                  </h2>
                  <h2 className="text-2xl font-bold uppercase mb-4">
                    Rating: {game?.rating}⭐
                  </h2>
                  <p className="text-gray-400 flex-grow">{game.description}</p>
                </div>

                {/* Button Section */}
                <div className="mt-4">
                  <button
                    onClick={() => handlePlayGame(game.playLink)}
                    className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-6 rounded w-full"
                  >
                    [ Play Now! ]
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularGames;
