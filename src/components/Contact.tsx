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
  };

  return (
    <section className="bg-[#f8f8f8] py-10 px-4">
      <div className="max-w-xl mx-auto bg-[#f5e8d8] rounded-xl shadow-md p-6 md:p-8 border border-[#e6d5bf]">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-[#4c3425]">
          Get in Touch
        </h2>

        <p className="text-center text-[#6c5643] mb-6 text-sm max-w-sm mx-auto leading-relaxed">
          Have questions or feedback? Send us a message and we’ll reply soon.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4">

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-[#4c3425] text-sm">
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              className="w-full border border-[#d8c5af] rounded-lg px-3 py-2 
              bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-[#4c3425] text-sm">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full border border-[#d8c5af] rounded-lg px-3 py-2 
              bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 text-sm"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium text-[#4c3425] text-sm">
              Message
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Write your message..."
              rows={4}
              className="w-full border border-[#d8c5af] rounded-lg px-3 py-2 
              bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 text-sm resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#2d1f1a] text-white px-6 py-2 
            rounded-lg font-medium shadow hover:bg-[#4a332b] transition text-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
