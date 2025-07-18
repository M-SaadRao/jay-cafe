import React from "react";
import logo from "../assets/images/final-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Container from "./Container";
import { FaLocationArrow } from "react-icons/fa6";
import { Button } from "antd";
import Contact from "./Contact";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="mt-[10px]">
        <iframe
          src="https://widget.tagembed.com/2135385"
          style={{ width: "100%", height: "500px", border: "none" }}
          title="tagembed-widget"
        />
      </div>
      <footer className="bg-white pb-8 pt-12 rounded-xl border-2 border-gray-200 shadow-sm max-md:mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-4">
            {/* Left Column: Logo and Text */}
            <div className="text-center sm:text-left">
              <Link to="/">
                <img
                  src={logo}
                  alt="boltwireless"
                  className="w-[130px] mx-auto sm:mx-0"
                />
              </Link>
              <p className="mt-4 text-lg px-4 sm:px-0 text-gray-700">
                The Plaster Family has been in the restaurant business for 33
                years. Out of frustration, we started The Jay Café.
              </p>
            </div>

            {/*  Needville Location */}
            <div className="text-center sm:text-left mt-5 sm:pl-5">
              <h2 className="text-[30px] yellowtail-font mb-4">Needville</h2>
              <p className="text-gray-700 text-[16px]">
                <span>
                  <span>
                    16634 TX-36, Needville,
                    <br /> TX 77461
                  </span>
                </span>
              </p>

              {/* Button container with responsive centering */}
              <div className="flex flex-col items-center sm:items-start">
                <Button
                  type="primary"
                  size="small"
                  className="font-medium leading-none mt-2 mb-1 flex items-center gap-2"
                  onClick={() => navigate("/needville")}
                >
                  <span>View Details</span>
                  <FaLocationArrow />
                </Button>
                <Button
                  type="primary"
                  size="small"
                  className="font-medium leading-none mt-2 mb-1 flex items-center gap-2"
                  onClick={() =>
                    (window.location.href =
                      "https://order.online/store/the-jay-cafe-needville-23308433/?hideModal=true&pickup=true")
                  }
                  target="_blank"
                >
                  <span>Order Online</span>
                  <FaLocationArrow />
                </Button>
              </div>
              
              <p className="mt-2"></p>
              <div className="flex justify-center sm:justify-start mt-4 space-x-4 text-gray-500">
                <Link
                  to="https://www.facebook.com/thejaycafeneedville/"
                  target="_blank"
                >
                  <FaFacebook className="hover:text-primary text-3xl text-secondary" />
                </Link>
                <Link
                  to="https://www.instagram.com/jaycafeneedville"
                  target="_blank"
                >
                  <FaInstagram className="hover:text-primary text-3xl text-secondary" />
                </Link>
              </div>
            </div>

            {/* Lake Jackson Location */}
            <div className="text-center sm:text-left mt-5">
              <h2 className="text-[30px] yellowtail-font mb-4">Lake Jackson</h2>
              <p className="text-gray-700 text-[16px]">
                <span>145 Oyster Creek 1-A, Lake Jackson, TX 77566</span>
              </p>
              
              {/* Button container with responsive centering */}
              <div className="flex flex-col items-center sm:items-start">
                <Button
                  type="primary"
                  size="small"
                  className="font-medium leading-none mt-2 mb-1 flex items-center gap-2"
                  onClick={() => navigate("/lakejackson")}
                >
                  <span>View Details</span>
                  <FaLocationArrow />
                </Button>

                <Button
                  type="primary"
                  size="small"
                  className="font-medium leading-none mt-2 mb-1 flex items-center gap-2"
                  onClick={() =>
                    (window.location.href =
                      "https://order.online/store/the-jay-cafe-lake-jackson-26102938/?hideModal=true&pickup=true")
                  }
                >
                  <span>Order Online</span>
                  <FaLocationArrow />
                </Button>
              </div>
              
              <p className="mt-2"></p>
              <div className="flex justify-center sm:justify-start mt-4 space-x-4 text-gray-500">
                <Link
                  to="https://www.instagram.com/thejaycafelakejackson"
                  target="_blank"
                >
                  <FaFacebook className="hover:text-primary text-3xl text-secondary" />
                </Link>
                <Link
                  to="https://www.instagram.com/thejaycafelakejackson"
                  target="_blank"
                >
                  <FaInstagram className="hover:text-primary text-3xl text-secondary" />
                </Link>
              </div>
            </div>

            {/* TangerOutlet Mall */}
            <div className="text-center sm:text-left mt-5">
              <h2 className="text-[30px] yellowtail-font mb-4">
                Tanger Outlet Mall
              </h2>
              <p className="text-gray-700 text-[16px]">
                <span>Texas City Tanger Outlets Mall Suite 353 </span>
              </p>
              
              {/* Button container with responsive centering */}
              <div className="flex flex-col items-center sm:items-start">
                <Button
                  type="primary"
                  size="small"
                  className="font-medium leading-none mt-2 mb-1 flex items-center gap-2"
                  onClick={() => navigate("/texas")}
                >
                  <span>View Details</span>
                  <FaLocationArrow />
                </Button>
                <Button
                  type="primary"
                  size="small"
                  className="font-medium leading-none mt-2 mb-1 flex items-center gap-2"
                  onClick={() =>
                    (window.location.href =
                      "https://order.online/store/the-jay-cafe-texas-city-33557927/?hideModal=true&pickup=true")
                  }
                >
                  <span>Order Online</span>
                  <FaLocationArrow />
                </Button>
              </div>
              
              <p className="mt-2"></p>
              <div className="flex justify-center sm:justify-start mt-4 space-x-4 text-gray-500">
                <Link
                  to="https://www.instagram.com/thejaycafelakejackson"
                  target="_blank"
                >
                  <FaFacebook className="hover:text-primary text-3xl text-secondary" />
                </Link>
                <Link
                  to="https://www.instagram.com/thejaycafelakejackson"
                  target="_blank"
                >
                  <FaInstagram className="hover:text-primary text-3xl text-secondary" />
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8 h-1 bg-primary" />

          <div className="text-center">
            <span className="block  text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()}{" "}
              <Link to="/" className="hover:underline text-primary font-medium">
                jaycafe.com
              </Link>{" "}
              | Powered by{" "}
              <Link
                target="_blank"
                to="https://logicracks.co.uk"
                className="font-medium hover:underline text-primary"
              >
                Logicracks
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;