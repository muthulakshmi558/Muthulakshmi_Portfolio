import React, { useState } from "react";
import api from "../api/api";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Static Website Design",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // Validation function
  const validate = () => {
    const newErrors = {};

    // Name: letters + spaces only
    if (!formData.name.trim()) newErrors.name = "Enter your name";
    else if (!/^[A-Za-z\s]+$/.test(formData.name))
      newErrors.name = "Name must contain only letters";

    // Email: proper format
    if (!formData.email.trim()) newErrors.email = "Enter your email";
    else if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(formData.email))
      newErrors.email = "Invalid email format";

    // Phone: numbers only
    if (!formData.phone.trim()) newErrors.phone = "Enter your phone number";
    else if (!/^\d{7,15}$/.test(formData.phone))
      newErrors.phone = "Phone must be numbers (7-15 digits)";

    // Comment: text only
    if (!formData.comment.trim()) newErrors.comment = "Enter your message";
    else if (!/^[\w\s.,!?'"()-]+$/.test(formData.comment))
      newErrors.comment = "Message contains invalid characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await api.post("contact/", formData);
      setStatus("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Static Website Design",
        comment: "",
      });
      setErrors({});
    } catch (err) {
      console.error(err.response || err);
      setStatus(
        err.response?.data
          ? JSON.stringify(err.response.data)
          : "❌ Something went wrong. Try again."
      );
    }
  };

  return (
    <section className="py-12 bg-[#1A1A2E] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#2E2E48] p-8 rounded-xl shadow-xl"
        >
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 rounded bg-gray-800 text-white"
              required
            />
            {errors.name && <span className="text-red-400 mt-1 text-sm">{errors.name}</span>}
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-2 rounded bg-gray-800 text-white"
              required
            />
            {errors.email && <span className="text-red-400 mt-1 text-sm">{errors.email}</span>}
          </div>

          <div className="flex flex-col">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-2 rounded bg-gray-800 text-white"
              required
            />
            {errors.phone && <span className="text-red-400 mt-1 text-sm">{errors.phone}</span>}
          </div>

          <div className="flex flex-col">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="px-4 py-2 rounded bg-gray-800 text-white"
            >
              <option>Static Website Design</option>
              <option>E-commerce Website Design</option>
              <option>Dynamic Website Design</option>
              <option>Other Queries</option>
            </select>
          </div>

          <div className="flex flex-col md:col-span-2">
            <textarea
              name="comment"
              placeholder="Your Message"
              value={formData.comment}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white"
              rows={4}
              required
            />
            {errors.comment && <span className="text-red-400 mt-1 text-sm">{errors.comment}</span>}
          </div>

          <button
            type="submit"
            className="md:col-span-2 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-gray-900 font-bold rounded-full hover:opacity-90 transition duration-300"
          >
            Submit
          </button>
        </form>

        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </section>
  );
};

export default ContactForm;
