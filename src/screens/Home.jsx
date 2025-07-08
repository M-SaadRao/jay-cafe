import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { setActiveProductCat } from "../store/user/userSlice";
import { setLocation } from "../store/location/locationSlice";

const Home = () => {
  const location = useLocation(); // ✅ correct hook
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = useSelector((state) => state.product.allCategories) || [];
  const foodCategories = categories?.filter((item) => item.parent === "1");

  const selectedLocation = useSelector(
    (state) => state.location.selectedLocation
  );

  const [showPopup, setShowPopup] = useState(false);

  // Check query params for location
  useEffect(() => {
    const { location: urlLocation } = queryString.parse(location.search);

    if (urlLocation && !selectedLocation) {
      dispatch(setLocation(urlLocation.toLowerCase()));
      setShowPopup(false);
    } else if (!selectedLocation) {
      setShowPopup(true);
    }
  }, [dispatch, location.search, selectedLocation]);

  const handleCatClick = (cat) => {
    dispatch(setActiveProductCat(cat));
    navigate("/productlisting");
  };

  const handleLocationSelect = (loc) => {
    dispatch(setLocation(loc));
    setShowPopup(false);
    navigate(`/?location=${loc}`); // This will go in the URL for QR code
  };

  return (
    <>
      {/* Location Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              📍 Choose Your Location
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Please select the location to see your local menu.
            </p>

            <div className="space-y-3">
              {["texas", "lakejackson", "needville"].map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocationSelect(loc)}
                  className="w-full py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-red-600 rounded-lg transition duration-200 capitalize"
                >
                  {loc === "lakejackson"
                    ? "Lake Jackson"
                    : loc.charAt(0).toUpperCase() + loc.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Category Grid */}
      <Container>
        <h1 className="text-center text-4xl sm:text-5xl text-primary capitalize my-4 mb-7 yellowtail-font">
          Always homemade, always fresh
        </h1>
        <hr className="h-1 bg-primary" />
        <div className="text-center">
          <h3 className="text-[30px] mt-5 mb-3 text-center md:text-[45px] yellowtail-font leading-none">
            Our Menu
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 capitalize">
          {foodCategories?.map((cat) => (
            <div
              key={cat.c_id}
              onClick={() => handleCatClick(cat)}
              className="cursor-pointer duration-300 hover:opacity-[0.9]"
            >
              <img
                src={cat.icon}
                alt={cat.c_name}
                className="w-full rounded-md mb-3"
              />
              <p className="sm:text-lg text-center playFont">{cat.c_name}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
