"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.name.trim()) newErrors.name = "Name is required";

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!data.subject.trim()) {
        newErrors.subject = "Subject is required";
    }
    if (!data.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleInputChange = (e) => {
    if (!isSubmitted) return; // ← validate only after first submit

    const form = e.target.form;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true); // user attempted submit at least once
    setStatus("loading");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }

    const response = await fetch("https://formspree.io/f/xqanryjn", {
      method: "POST",
      body: new FormData(e.target),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
      setIsSubmitted(false); // reset validation flow
      setErrors({});
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-32 py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Interested in connecting? Feel free to reach out
        </p>
      </div>

      <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Fill in the form to start a conversation.
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-gray-500 mt-1" size={22} />
                <p className="text-gray-700 dark:text-gray-300">
                  Salem, Tamilnadu, India
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <FiMail className="text-gray-500 mt-1" size={22} />
                <p className="text-gray-700 dark:text-gray-500">
                  sakthiveltech@gmail.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4"
          >
            {/* NAME */}
            <div>
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* SUBJECT */}
           <div>
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                rows={4}
                onChange={handleInputChange}
                placeholder="Hi! Let's talk about..."
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : <><FiSend size={18} /> Send Message</>}
            </button>

            {/* SUCCESS */}
            {status === "success" && (
              <p className="text-green-500 text-center font-medium">✅ Thank you! Your message has been sent.</p>
            )}

            {/* ERROR */}
            {status === "error" && (
              <p className="text-red-500 text-center font-medium">❌ Something went wrong. Try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
