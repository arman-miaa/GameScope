import toast from "react-hot-toast";

const Contact = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    toast.success("Your feedback has been submitted successfully!", {
      position: "top-center",
    });
  };

  return (
    <div className="bg-[#1D1D1D] text-white py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-[#ADFF00]">
          Get in Touch with Us
        </h1>
        <p className="max-w-xl mx-auto text-gray-300">
          We'd love to hear from you! Feel free to share your thoughts,
          feedback, or inquiries using the form below. Connect with us on social
          media and stay updated on the latest trends and updates.
        </p>
      </div>

      {/* Form and Social Section */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center gap-10">
        {/* Social Media */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-semibold mb-6 text-[#ADFF00]">
            Follow Us
          </h2>
          <p className="text-gray-400 mb-6">
            Join our community and stay updated with the latest news and
            updates!
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
            >
              <i className="fab fa-facebook-f text-white text-lg"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition"
            >
              <i className="fab fa-twitter text-white text-lg"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center hover:bg-pink-600 transition"
            >
              <i className="fab fa-instagram text-white text-lg"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-800 transition"
            >
              <i className="fab fa-linkedin-in text-white text-lg"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-[#2D2D2D] rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center text-[#ADFF00] mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmitForm}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 bg-[#1D1D1D] text-white border border-[#ADFF00] rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-[#1D1D1D] text-white border border-[#ADFF00] rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full p-3 bg-[#1D1D1D] text-white border border-[#ADFF00] rounded"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#ADFF00] text-black font-bold rounded hover:bg-green-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
