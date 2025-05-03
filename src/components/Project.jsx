import React from 'react';
import cash_memo from "../all_assets/cash_memo.jpg"
import visiting_card from "../all_assets/new_visiting.jpg"
import menu from "../all_assets/restaurent_img.jpg"
import stand_board from "../all_assets/stand_board.jpeg";
import light_frame from "../all_assets/light_frame.jpg"
import offset from "../all_assets/offset.jpg"
import dr_file from "../all_assets/doctor_file.jpg"
import letter_head from "../all_assets/letter_head.jpg"
import screen_pr from "../all_assets/screen_printing.jpg"
import canopy from "../all_assets/canopy.jpg"
import hoarding from "../all_assets/hoarding.webp";
import shield from "../all_assets/shield.webp"

const projects = [
  {
    image: cash_memo,
    title: 'The Pen Boutique',
    description: 'Custom cash memo design for a stationery store.',
  },
  {
    image: visiting_card,
    title: 'Visiting Card',
    description: ' perfect for professionals, businesses, and branding.',
  },
  {
    image: menu,
    title: 'Navin Family Restaurant',
    description: 'Customizable Restaurent Menu.',
  },
  {
    image: offset,
    title: 'Offset Printing',
    description: 'High-quality offset printing for bulk orders with sharp details, vibrant colors, and cost-effective results',
  },
  {
    image: dr_file,
    title: 'Doctor File',
    description: 'Professional doctor files with customized branding, patient details section, and durable quality — designed for clinics, hospitals, and healthcare professionals.',
  },
  {
    image: letter_head,
    title: 'Letter-head',
    description: 'ideal for official communication invoices and business correspondence',
  },
  {
    image: screen_pr,
    title: 'Screen Printing',
    description: 'Durable and vibrant screen printing for fabrics, packaging, and promotional items — perfect for bold designs and long-lasting results.',
  },
  {
    image: canopy,
    title: 'Canopy Tent',
    description: 'Custom-printed canopy tents for events, exhibitions, and outdoor branding — waterproof, durable, and easy to set up.',
  },
  {
    image: shield,
    title: 'Shield',
    description: 'Elegant and customizable shields for awards, achievements, and special recognitions — crafted with quality materials and fine finishes.',
  },
  {
    image: stand_board,
    title: 'Banner Framing',
    description: 'Framed promotional banner for product launch.',
  },
  {
    image: light_frame,
    title: 'Light Photo Framing',
    description: 'High-quality framing for Menu portraits.',
  },
  {
    image: hoarding,
    title: 'Hoardings',
    description: 'Bold and eye-catching hoardings designed for maximum visibility — ideal for outdoor advertising, brand promotion, and construction site displays',
  },
];

const Project = () => {
  return (
    <div id='project' className="bg-gray-100 min-h-screen pt-10">
      {/* Banner Section */}
      {/* <div className="bg-cover bg-center h-64 w-full text-white flex items-center justify-center"
           style={{ backgroundImage: "url('/images/project-banner.jpg')" }}>
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Project Showcase</h1>
      </div> */}

      {/* Section Heading */}
      <div className="text-center mt-12 mb-4">
        <p className="text-red-500 text-2xl uppercase tracking-wide font-semibold">Project Showcase</p>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Recent Projects</h2>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 py-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
