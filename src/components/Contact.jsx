import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { Button } from "antd";

const locations = [
  {
    name: "Needville",
    address: "16634 TX-36, Needville, TX 77461",
    phone: "(979) 793-7900",
    mapUrl: "https://g.co/kgs/8gv2n8F",
    tel: "tel:+19797937900",
  },
  {
    name: "Lake Jackson",
    address: "145 Oyster Creek 1-A, Lake Jackson, TX 77566",
    phone: "(979) 292-8278",
    mapUrl: "https://g.co/kgs/4YQrcv8",
    tel: "tel:+19792928278",
  },
  {
    name: "Texas City (Tanger Outlet Mall)",
    address: "Tanger Outlets Mall Suite 353, Texas City",
    phone: "(281) 989-8889",
    mapUrl: "https://maps.app.goo.gl/gcTUYVYun26Ww9QG9",
    tel: "tel:+12819898889",
  },
];

function Contact() {
  return (
    <>
      <Header />
      <Container>
        <section className="py-10">
          <h3 className="text-[30px] md:text-[45px] text-center font-medium yellowtail-font text-primary mb-10">
            Contact Us
          </h3>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10 text-lg">
            We’d love to hear from you! Whether you have a question about our
            menu, want to plan a special event, or just want to say hello — feel
            free to reach out or visit one of our locations. Our team is always
            here to serve you with a smile and great food.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                  {loc.name}
                </h4>
                <p className="text-gray-600 mb-2">{loc.address}</p>
                <p className="text-gray-800 font-medium flex items-center gap-2">
                  <FaPhoneAlt className="text-primary" />{" "}
                  <a href={loc.tel} className="hover:text-blue-600 transition">
                    {loc.phone}
                  </a>
                </p>
                <Button
                  type="primary"
                  className="mt-4 flex items-center gap-2"
                  size="small"
                  onClick={() => window.open(loc.mapUrl, "_blank")}
                >
                  View on Map <FaLocationArrow />
                </Button>
              </div>
            ))}
          </div>

          
        </section>
      </Container>
    </>
  );
}

export default Contact;
