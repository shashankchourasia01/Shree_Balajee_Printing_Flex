import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import NavbarWithHero from './Navbar';
import logo from '../all_assets/logo.jpeg';

const OrderPage = () => {
  const navigate = useNavigate();
  
  const [orderId, setOrderId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orderType: 'Flex Printing',
    size: '',
    quantity: '',
    color: 'Full Color',
    material: 'Premium Flex',
    content: '',
    instructions: ''
  });

  useEffect(() => {
    generateOrderId();
  }, []);

  const generateOrderId = () => {
    let lastOrder = localStorage.getItem('lastOrderNumber');
    let newNumber = lastOrder ? parseInt(lastOrder) + 1 : 1;
    localStorage.setItem('lastOrderNumber', newNumber);
    setOrderId(`ORD-${newNumber}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Image upload handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      alert('कृपया अपना नाम और फोन नंबर जरूर भरें!');
      return;
    }

    // Simple text message - NO EMOJIS (for better compatibility)
    let message = `[NEW ORDER] SHREE BALAJEE PRINTING [NEW ORDER]

Order ID: ${orderId}
Date: ${new Date().toLocaleString('en-IN')}

Customer Details:
Name: ${formData.name}
Phone: ${formData.phone}

Order Details:
Type: ${formData.orderType}
Size: ${formData.size || 'Not specified'}
Quantity: ${formData.quantity || 'Not specified'} pieces
Color: ${formData.color}
Material: ${formData.material}

Content/Matter:
${formData.content || 'No content provided'}

Special Instructions:
${formData.instructions || 'None'}

Status: Pending - Please confirm
Shop: Shree Balajee Printing & Flex, Katras Bazar, Dhanbad

--- IMPORTANT ---
Customer has uploaded a design file. Please ask them to send the image separately on WhatsApp.`;

    // Agar image hai toh extra line add karo
    if (selectedImage) {
      message += `\n\n[IMAGE] Design File: ${selectedImage.name} - Please request customer to share this image.`;
    }

    const whatsappUrl = `https://wa.me/917645980320?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show alert to user about sending image manually
    if (selectedImage) {
      alert('Note: After WhatsApp opens, please manually attach the image you selected and then send the message.');
    }
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      orderType: 'Flex Printing',
      size: '',
      quantity: '',
      color: 'Full Color',
      material: 'Premium Flex',
      content: '',
      instructions: ''
    });
    setSelectedImage(null);
    setImagePreview(null);
    
    generateOrderId();
  };

  return (
    <>
      {/* <NavbarWithHero /> */}
      
      <div className="min-h-screen bg-gray-50 pt-2 pb-10">
        {/* Main Form Card */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[#002954] to-[#004080] px-5 py-4 sm:px-6 sm:py-5">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-yellow-400" />
                <div>
                  <h1 className="text-yellow-300 font-bold text-xl sm:text-2xl">Place Your Order</h1>
                  <p className="text-white/80 text-xs sm:text-sm">Fill the details below. We'll contact you soon!</p>
                </div>
              </div>
              {orderId && (
                <div className="mt-3 bg-yellow-400/20 border border-yellow-400/40 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 inline-block">
                  <p className="text-yellow-300 font-bold text-xs sm:text-sm">Your Order ID: {orderId}</p>
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                
                {/* Name - Full width on mobile */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Rahul Sharma"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-base"
                    required
                  />
                </div>

                {/* Phone - Full width on mobile */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g., 9876543210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-base"
                    required
                  />
                </div>

                {/* Order Type */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Order Type</label>
                  <select
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 bg-white text-base"
                  >
                    <option>Flex Printing</option>
                    <option>Banner Printing</option>
                    <option>Wedding Card</option>
                    <option>Business Card</option>
                    <option>Hoardings</option>
                    <option>Poster Printing</option>
                    <option>Offset Printing</option>
                    <option>Screen Printing</option>
                    <option>Canopy Tent</option>
                    <option>Framing</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Quantity (pieces)</label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g., 100"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-base"
                  />
                </div>

                {/* Size */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Size</label>
                  <input
                    type="text"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    placeholder="e.g., 5ft x 3ft"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-base"
                  />
                </div>

                {/* Color */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Color</label>
                  <select
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 bg-white text-base"
                  >
                    <option>Full Color</option>
                    <option>Black & White</option>
                    <option>Single Color</option>
                  </select>
                </div>

                {/* Material */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Material</label>
                  <select
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 bg-white text-base"
                  >
                    <option>Premium Flex</option>
                    <option>Standard Flex</option>
                    <option>Vinyl</option>
                    <option>Paper (Glossy)</option>
                    <option>Paper (Matte)</option>
                    <option>Canvas</option>
                  </select>
                </div>

                {/* Image Upload - With better instructions */}
                {/* <div className="md:col-span-2">
                  <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">
                    Upload Design / Logo (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-blue-500 transition-colors">
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    {!imagePreview ? (
                      <label htmlFor="imageUpload" className="cursor-pointer block">
                        <div className="flex flex-col items-center gap-2">
                          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-gray-500 text-sm">Tap to upload design or logo</p>
                          <p className="text-gray-400 text-xs">JPG, PNG, GIF up to 5MB</p>
                        </div>
                      </label>
                    ) : (
                      <div className="relative">
                        <img src={imagePreview} alt="Preview" className="max-h-40 mx-auto rounded-lg" />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                    <p className="text-blue-700 text-xs font-medium">
                      ⓘ Important: After clicking submit, WhatsApp will open with order details. 
                      {selectedImage ? ' Please manually attach the image you selected before sending the message.' : ' If you uploaded an image, please attach it manually in WhatsApp.'}
                    </p>
                  </div>
                </div> */}

                {/* Content/Matter */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">
                    Content / Matter to Print
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Jo bhi print karvana hai, woh likhein..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-base"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: "Shree Balajee Printing & Flex, Katras Bazar, Dhanbad. Call: 7645980320"
                  </p>
                </div>

                {/* Special Instructions */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Special Instructions (Optional)</label>
                  <textarea
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    rows="2"
                    placeholder="Koi special request? Urgent order? Delivery preference?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-base"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 sm:mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-extrabold text-base sm:text-lg uppercase tracking-wider py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>📦</span>
                  Submit Order on WhatsApp
                </button>
                <p className="text-center text-gray-500 text-xs mt-4">
                  Clicking submit will open WhatsApp. {selectedImage ? 'Please attach your image manually before sending.' : 'If you uploaded an image, attach it manually in WhatsApp.'}
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Need help? Call us directly:{' '}
              <a href="tel:+917645980320" className="text-blue-600 font-bold">7645980320</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;