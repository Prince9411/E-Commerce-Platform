import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Fast Delivery",
      desc: "Get your products delivered quickly and safely to your doorstep.",
    },
    {
      id: 2,
      title: "24/7 Customer Support",
      desc: "We are here to help you anytime with your shopping queries.",
    },
    {
      id: 3,
      title: "Easy Returns",
      desc: "Not satisfied? Enjoy hassle-free returns within 7 days.",
    },
    {
      id: 4,
      title: "Secure Payments",
      desc: "Your transactions are protected with top-level security.",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
