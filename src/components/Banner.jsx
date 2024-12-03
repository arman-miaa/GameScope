import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="relative carousel-item w-full">
          <img
            src={banner3}
            className="w-full h-[60vh] object-cover rounded-xl"
          />
          {/* text */}
          <div className=" bg-cover bg-center h-96">
            <div className="absolute inset-0  flex flex-col justify-center items-start px-8 text-white">
              <h1 className="text-4xl font-bold">PUBG</h1>
              <div className="flex items-center space-x-4 mt-4">
                <span className="flex items-center space-x-1">
                  <i className="fas fa-film"></i> <span>Action</span>
                </span>
                <span className="flex items-center space-x-1">
                  <i className="fas fa-calendar-alt"></i> <span>2023</span>
                </span>
                <span className="flex items-center space-x-1">
                  <i className="fas fa-clock"></i> <span>1 h 30 min</span>
                </span>
                <span className="bg-red-600 text-sm px-2 py-1 rounded">HD</span>
              </div>
              <p className="mt-4 text-lg max-w-2xl">
                PUBG, the ultimate battle royale game, challenges players to
                survive against all odds and emerge as the last one standing.
              </p>
              <button className="mt-6 bg-red-600 px-6 py-2 rounded text-white hover:bg-red-700">
                Watch Video
              </button>
            </div>
          </div>
        </div>

        <div id="item2" className="relative carousel-item w-full">
          <img
            src={banner2}
            className="w-full h-[60vh] object-cover rounded-xl"
          />

          {/* text */}
          <div className=" bg-cover bg-center h-96">
            <div className="absolute inset-0  flex flex-col justify-center items-start px-8 text-white">
              <h1 className="text-4xl font-bold">The Revenant</h1>
              <div className="flex items-center space-x-4 mt-4">
                <span className="flex items-center space-x-1">
                  <i className="fas fa-film"></i> <span>Action</span>
                </span>
                <span className="flex items-center space-x-1">
                  <i className="fas fa-calendar-alt"></i> <span>2023</span>
                </span>
                <span className="flex items-center space-x-1">
                  <i className="fas fa-clock"></i> <span>1 h 30 min</span>
                </span>
                <span className="bg-red-600 text-sm px-2 py-1 rounded">HD</span>
              </div>
              <p className="mt-4 text-lg max-w-2xl">
                PUBG, the ultimate battle royale game, challenges players to
                survive against all odds and emerge as the last one standing.
              </p>
              <button className="mt-6 bg-red-600 px-6 py-2 rounded text-white hover:bg-red-700">
                Watch Video
              </button>
            </div>
          </div>
        </div>
        <div id="item3" className=" relative carousel-item w-full">
          <img
            src={banner1}
            className="w-full h-[60vh] object-cover rounded-xl"
          />
          {/* text */}
          <div className=" bg-cover bg-center h-96">
            <div className="absolute inset-0  flex flex-col justify-center items-start px-8 text-white">
              <h1 className="text-4xl font-bold">FREEFIRE</h1>
              <div className="flex items-center space-x-4 mt-4">
                <span className="flex items-center space-x-1">
                  <i className="fas fa-film"></i> <span>Action</span>
                </span>
                <span className="flex items-center space-x-1">
                  <i className="fas fa-calendar-alt"></i> <span>2023</span>
                </span>
                <span className="flex items-center space-x-1">
                  <i className="fas fa-clock"></i> <span>1 h 30 min</span>
                </span>
                <span className="bg-red-600 text-sm px-2 py-1 rounded">HD</span>
              </div>
              <p className="mt-4 text-lg max-w-2xl">
                PUBG, the ultimate battle royale game, challenges players to
                survive against all odds and emerge as the last one standing.
              </p>
              <button className="mt-6 bg-red-600 px-6 py-2 rounded text-white hover:bg-red-700">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
