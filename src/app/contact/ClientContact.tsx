"use client";
import React, { useState } from "react";
import {
  contactInfo,
  socialLinks,
  type ContactInfo,
  type SocialLink,
} from "./links";

import { Send } from "lucide-react";

const ContactClientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const subject = formData.subject;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=abhi88wiz@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    const mailtoUrl = `mailto:abhi88wiz@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    const useGmail = window.confirm(
      "Would you like to open Gmail? Click OK for Gmail, Cancel for default email client"
    );

    if (useGmail) {
      window.open(gmailUrl, "_blank");
    } else {
      window.location.href = mailtoUrl;
    }
  };

  return (
    <main className="bg-black text-white min-h-screen pb-5 lg:pb-0">
      <div className="relative overflow-hidden py-12 md:py-[200px]">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-zinc-800 opacity-90" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 md:w-96 h-72 md:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 md:w-96 h-72 md:h-96 bg-cyan-700/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500"
            style={{
              fontFamily: "var(--font-bangers)",
              letterSpacing: "0.07em",
            }}
          >
            Let&apos;s <span className="text-cyan-400">Connect</span>
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Have a project in mind or want to discuss potential opportunities?
            I&apos;m always excited to connect with fellow developers and
            clients. Let&apos;s create something amazing together!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info: ContactInfo, index: number) => (
              <div
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg border border-zinc-800 hover:border-cyan-600/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-cyan-900/20 rounded-lg border border-cyan-900/50">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200">
                      {info.title}
                    </h3>
                    <p className="text-cyan-400">{info.details}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{info.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px] border border-zinc-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31528.675599940237!2d76.49999309999999!3d9.594667499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ba16c6b435f%3A0xbe2b02f68f8dd06e!2sKottayam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710150547961!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">
                Connect on Social Media
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {socialLinks.map((social: SocialLink, index: number) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center p-3 bg-zinc-800/50 rounded-lg hover:bg-cyan-600/20 hover:border-cyan-600/50 border border-zinc-700 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center text-gray-400 group-hover:text-gray-200">
                        {social.icon}
                      </div>
                      <span className="text-sm text-gray-400 group-hover:text-gray-200">
                        {social.label}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-zinc-900/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-zinc-800">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="form-group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg bg-zinc-800/80 border border-zinc-700 px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                  required
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-lg bg-zinc-800/80 border border-zinc-700 px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                  required
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full rounded-lg bg-zinc-800/80 border border-zinc-700 px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                  required
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full rounded-lg bg-zinc-800/80 border border-zinc-700 px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 py-3 px-4 rounded-lg text-white transition-all duration-300 font-medium flex items-center justify-center gap-3 shadow-lg hover:shadow-cyan-500/25"
              >
                <Send className="w-5 h-5 stroke-2" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactClientForm;
