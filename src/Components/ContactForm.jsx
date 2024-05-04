import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex flex-wrap justify-center items-start bg-gradient-to-r from-purple-900 to-purple-500 ">
      {/* Left Side */}
      <div className=" md:w-1/2 px-4 py-8">
        
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-white">Have a question or want to collaborate on a project? Drop me a line below and let's chat!</p>
          <div className="flex items-center mt-6">
            <svg className="w-6 h-6 fill-current text-white mr-2" viewBox="0 0 24 24">
              <path d="M12 1C5.924 1 1 5.924 1 12s4.924 11 11 11 11-4.924 11-11S18.076 1 12 1zm5.4 17.627c-.79 0-1.535-.137-2.236-.385l-5.797-2.436-.011.015a.554.554 0 0 1-.356-.548c.07-3.357 3.14-6.083 6.917-6.083 3.807 0 6.88 2.706 6.919 6.066-.61.29-1.264.447-1.952.447zm-5.4-13.8c2.572 0 4.648 1.982 4.648 4.424s-2.076 4.423-4.648 4.423c-2.571 0-4.647-1.981-4.647-4.423s2.076-4.424 4.647-4.424z"/>
            </svg>
            <span className="text-lg text-white font-medium">Email: pandeynihal11@gmail.com</span>
          </div>
          <div className="flex items-center mt-4">
            <svg className="w-6 h-6 fill-current text-white mr-2" viewBox="0 0 24 24">
              <path d="M21 3.414V6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V3.414a1 1 0 0 1 .293-.707l8-8A1 1 0 0 1 12 0a1 1 0 0 1 .707.293l8 8a1 1 0 0 1 .293.707zM12 18a5.006 5.006 0 0 1-5-5c0-2.855 2.91-7 5-9 2.09 2 5 6.145 5 9a5.006 5.006 0 0 1-5 5z"/>
            </svg>
            <span className="text-lg text-white font-medium">Phone: +91 9554274648</span>
          </div>
        
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 px-4 py-8">
        <form className="bg-purple-200 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-purple-900 font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" className="w-full px-3 py-2 border border-purple-400 rounded-md focus:outline-none focus:border-purple-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-purple-900 font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" className="w-full px-3 py-2 border border-purple-400 rounded-md focus:outline-none focus:border-purple-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-purple-900 font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your message" className="w-full px-3 py-2 border border-purple-400 rounded-md focus:outline-none focus:border-purple-600"></textarea>
          </div>
          <button type="submit" className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-800">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
