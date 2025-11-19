import React, { useState } from "react";
import type { FormEvent } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  
  alert("Message sent successfully!");
  
  // Clear after 3 seconds

};

  return (
    <section className="bg-[#f8f8f8] py-20 px-6">
      <div className="max-w-3xl mx-auto bg-[#f5e8d8] rounded-2xl shadow-xl p-8 md:p-12 border border-[#e6d5bf]">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#4c3425]">
          Get in Touch
        </h2>

        <p className="text-center text-[#6c5643] mb-10 max-w-md mx-auto leading-relaxed">
          Have questions or feedback? Send us a message and we’ll reply soon.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6">

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-[#4c3425]">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              className="w-full border border-[#d8c5af] rounded-lg px-4 py-2 
              bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-[#4c3425]">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full border border-[#d8c5af] rounded-lg px-4 py-2 
              bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium text-[#4c3425]">Message</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Write your message here..."
              rows={6}
              className="w-full border border-[#d8c5af] rounded-lg px-4 py-2 
              bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full md:w-auto bg-[#2d1f1a] text-white px-8 py-2 
            rounded-lg font-semibold shadow hover:bg-[#4a332b] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
