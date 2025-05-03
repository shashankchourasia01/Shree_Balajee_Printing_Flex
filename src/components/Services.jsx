import React from 'react';
import flex from "../all_assets/flex_print.jpeg";
import vnyl from "../all_assets/Vinyl-Printing-Process.jpg";
import new_d from "../all_assets/3d_printings.jpg";
import hoarding from "../all_assets/hoarding.webp";
import light_board from "../all_assets/light_board.jpeg";
import stand_board from "../all_assets/stand_board.jpeg";
import shadi_card from "../all_assets/shadi_card.jpg";
import visiting from "../all_assets/visiting_card.avif";
import all_card from "../all_assets/all_cards.avif";
import pamplet from "../all_assets/pamplets.jpg";
import sticker from "../all_assets/sticker.avif";
import digital from "../all_assets/digital_p.jpeg";


const Services = () => {
  const services = [
    {
      title: "Flex Printing",
      description: "Create large-format prints that are perfect for outdoor advertising, events, and more.",
      image: flex
    },
    {
      title: "Vinyl Printing",
      description: "We specialize in high-quality vinyl and hoarding prints that withstand harsh weather conditions.",
      image: vnyl
    },
    {
      title: "3D Printing",
      description: "Need something unique? We specialize in custom flex prints and designs for any occasion.",
      image: new_d
    },
    {
      title: "Hoarding",
      description: "Make a bold impact with our high-quality hoarding flex prints — perfect for outdoor advertising, brand promotions, and eye-catching displays.",
      image: hoarding
    },
    {
      title: "Light Board",
      description: "Illuminate your brand with vibrant, durable light boards — ideal for shops, showrooms, and outdoor displays.",
      image: light_board
    },
    {
      title: "Standee Frame",
      description: "Portable and versatile, our stand boards are perfect for promotions, events, and storefront displays — easy to set up and visually impactful.",
      image: stand_board
    },
    {
      title: "Shadi Card",
      description: "Elegant and personalized wedding invitations designed to reflect your unique love story — crafted with premium materials and attention to detail.",
      image: shadi_card
    },
    {
      title: "Visiting Card",
      description: "Professionally designed visiting cards that leave a lasting impression — tailored to reflect your brand identity with premium quality and finish.",
      image: visiting
    },
    {
      title: "Invitation Cards",
      description: "From weddings and birthdays to corporate events and ceremonies, we design all types of invitation cards with elegant layouts, premium materials, and personalized touches to match every occasion.",
      image: all_card
    },
    {
      title: "Pamphlets & Brochures",
      description: "Engage your audience with professionally designed pamphlets — perfect for marketing, product showcases, and event promotions.",
      image: pamplet
    },
    {
      title: "Sticker Printing",
      description: "Need something unique? We specialize in custom flex prints and designs for any occasion.",
      image: sticker
    },
    {
      title: "Digital Printing",
      description: "High-quality, on-demand printing for various materials with vibrant colors and precise details. Perfect for small and large print runs, including brochures, posters, and more.",
      image: digital
    }
  ];

  return (
    <div id='services' className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>

        {/* Updated wrapper with responsive horizontal scroll on small screens */}
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto sm:overflow-visible flex sm:flex-none space-x-4 sm:space-x-0 snap-x snap-mandatory px-1">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 min-w-[280px] snap-center sm:min-w-0">
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;