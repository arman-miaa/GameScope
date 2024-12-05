import { useEffect, useState } from "react";

const PopularGames = () => {
  const [populargames, setPopulargames] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Add a loading state
  // console.log(populargames);
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
    //   console.log(link);
    window.open(link, "_blank");
  };
  return (
    <div>
      {loading ? (
        <p>loading....</p>
      ) : (
        <div>
          popular game {populargames.length}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {populargames.map((populargames, index) => (
              <div
                key={index}
                className="bg-black border-2 border-lime-400 p-6 rounded-lg shadow-lg text-white flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="flex justify-center mb-4">
                  <img
                    src={populargames.image}
                    alt="Icon"
                    className="w-16 h-16"
                  />
                </div>

                {/* Content Section */}
                <div className="text-center flex flex-col flex-grow">
                  <p className="text-lime-400 text-xl font-bold mb-2">
                    [ {index + 1} ]
                  </p>
                  <h2 className="text-2xl font-bold uppercase mb-4">
                    {populargames.title}
                  </h2>
                  <p className="text-gray-400 flex-grow">
                    {populargames.description}
                  </p>
                </div>

                {/* Button Section */}
                <div className="mt-4">
                  <button
                    onClick={() => {
                      handlePlayGame(populargames.playLink);
                    }}
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
