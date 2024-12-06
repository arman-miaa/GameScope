const ReviewsVideoSection = () => {
  const videos = [
    "https://www.youtube.com/embed/vlL_U07Qol4?si=-u0v64dzV98wHTpv", // First video
    "https://www.youtube.com/embed/RdCpgw31yq4?si=Dri26acSoj45YF15",
    "https://www.youtube.com/embed/grJ1rKkLiZA?si=lFECS08Idgh-2Vkh",
    "https://www.youtube.com/embed/HQKKdkqwBpo?si=Ujcaj-ZDZUW39gx3",
    "https://www.youtube.com/embed/qKld97rjZD4?si=2RSmDhPeafcx5ag_",
    "https://www.youtube.com/embed/aHPIQ53rJYA?si=5mEltGVqB5pH7cFD",
  ];

  return (
    <div className="text-white py-12 px-6">
      <h2 className="text-3xl text-[#ADFF00] font-bold text-center mb-6">
        User Reviews in Action
      </h2>
      <p className="text-center md:w-1/2 mx-auto text-blue-800 mb-8 text-lg font-medium">
        Hear directly from our users! Watch their experiences and feedback to
        understand how our products have made an impact in their lives.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <iframe
              className="w-full h-56"
              src={video}
              title={`Review Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsVideoSection;
