import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_2f6ur98',  
      'template_67kcb0f',  
      formData,
      'KU3mPrCCk0NEtUrlx' 
    )
    .then((result) => {
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
    });
  };

  return (
    <div id="contact" className="w-full bg-gradient-to-br from-[#0D0D0D] to-[#1e1e1e] text-[#B7AB98] py-30 px-6 flex justify-center items-center">
      <div className="max-w-[900px] w-full bg-[#121212] rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-center text-[#EB5939] mb-8 uppercase tracking-wide">
          Get in Touch
        </h1>
        <p className="text-center text-sm md:text-base text-[#B7AB98] mb-8">
          Have a question or want to work together? Fill out the form below, and I’ll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div>
            <label htmlFor="name" className="block text-sm mb-2 uppercase tracking-wide">Your Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name"
              className="w-full px-4 py-3 bg-[#1e1e1e] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5939]" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-2 uppercase tracking-wide">Your Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email"
              className="w-full px-4 py-3 bg-[#1e1e1e] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5939]" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-2 uppercase tracking-wide">Your Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Enter your message" rows="5"
              className="w-full px-4 py-3 bg-[#1e1e1e] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB5939]" />
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-[#EB5939] to-[#B7432E] text-white font-bold uppercase rounded-md hover:scale-105 transition-transform duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
