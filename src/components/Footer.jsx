import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" mt-12 bg-[#2C2C2C] ">
      <footer className=" container mx-auto  footer text-base-content p-10">
        {/* Left Section */}
        <nav className=" mx-auto lg:mx-0 text-white">
          <h6 className="footer-title text-main">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        {/* Center Section */}
        <nav className=" mx-auto lg:mx-0 text-white ">
          <h6 className="footer-title text-main">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        {/* Right Section: Social Icons and Profile Link */}
        <div className=" mx-auto lg:mx-0 text-white">
          <h6 className="footer-title text-main">Follow Us</h6>
          <div className="flex space-x-4 my-2">
            <Link
              to="https://www.facebook.com/arman3655/"
              target="_blank"
              className="text-blue-500 hover:text-blue-700"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </Link>
            <Link
              to="https://x.com/MdArman02574967"
              target="_blank"
              className="text-blue-400 hover:text-blue-600"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/arman-mia-am/"
              target="_blank"
              className="text-blue-300 hover:text-blue-500"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </Link>
            <Link
              to="https://github.com/arman-miaa"
              target="_blank"
              className="text-gray-600 hover:text-gray-800"
            >
              <i className="fab fa-github fa-lg"></i>
            </Link>
          </div>
         
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className="bg-[#414141ad] py-4 text-center text-main">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Arman Mia. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
