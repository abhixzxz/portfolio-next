"use client";
import type React from "react";
import { useState } from "react";
import {
  contactInfo,
  socialLinks,
  type ContactInfo,
  type SocialLink,
} from "./links";
import { Send, Mail } from "lucide-react";

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
    <main className="relative text-white min-h-screen">
      {/* Header Section */}
      <div className="relative overflow-hidden py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Badge */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <Mail className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
              <span className="text-xs md:text-sm font-medium text-cyan-300">
                Get In Touch
              </span>
            </div>
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center mb-4 md:mb-6"
            style={{
              fontFamily: "var(--font-bangers)",
              letterSpacing: "0.07em",
            }}
          >
            <span className="text-white">Let&apos;s </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              CONNECT
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-slate-300 text-center max-w-2xl lg:max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed px-4">
            Have a project in mind or want to discuss potential opportunities?
            I&apos;m always excited to connect with fellow developers and
            clients. Let&apos;s create something amazing together!
          </p>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 max-w-6xl mx-auto">
            {contactInfo.map((info: ContactInfo, index: number) => (
              <div key={index} className="group relative">
                <div className="relative h-full p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border backdrop-blur-sm bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-slate-800/50 hover:border-cyan-500/30 transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1 md:hover:-translate-y-2">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-xl -z-10 transition-opacity duration-500" />

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="p-2 md:p-3 lg:p-4 bg-cyan-500/10 rounded-xl md:rounded-2xl border border-cyan-500/20 flex-shrink-0">
                      <div className="text-cyan-400 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                        {info.icon}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-white truncate">
                        {info.title}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm md:text-base break-all">
                        {info.details}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm md:text-base">
                    {info.subtitle}
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl md:rounded-b-3xl bg-gradient-to-r from-cyan-500/60 to-blue-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Column - Map & Social */}
          <div className="space-y-6 md:space-y-8">
            {/* Map */}
            <div className="group relative">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-slate-800/50 backdrop-blur-sm bg-slate-900/40 p-1.5 md:p-2">
                <div className="rounded-xl md:rounded-2xl overflow-hidden h-[250px] md:h-[350px] lg:h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31528.675599940237!2d76.49999309999999!3d9.594667499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ba16c6b435f%3A0xbe2b02f68f8dd06e!2sKottayam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710150547961!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border backdrop-blur-sm bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-slate-800/50">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 text-white">
                Connect on Social Media
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {socialLinks.map((social: SocialLink, index: number) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group flex flex-col items-center justify-center p-3 md:p-4 bg-slate-800/50 rounded-xl md:rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-slate-700/50 transition-all duration-300 min-h-[80px] md:min-h-[90px]"
                    aria-label={social.label}
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 text-slate-400 group-hover:text-cyan-400 transition-colors mb-2">
                      {social.icon}
                    </div>
                    <span className="text-xs md:text-sm text-slate-400 group-hover:text-slate-300 transition-colors text-center leading-tight">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border backdrop-blur-sm bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-slate-800/50">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-xl -z-10" />

              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 text-center"
                style={{
                  fontFamily: "var(--font-bangers)",
                  letterSpacing: "0.07em",
                }}
              >
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  SEND MESSAGE
                </span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
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
                      className="w-full rounded-xl md:rounded-2xl bg-slate-800/60 border border-slate-700/50 px-3 md:px-4 py-2.5 md:py-3 text-white placeholder-slate-400 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
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
                      className="w-full rounded-xl md:rounded-2xl bg-slate-800/60 border border-slate-700/50 px-3 md:px-4 py-2.5 md:py-3 text-white placeholder-slate-400 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-300 mb-2"
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
                    className="w-full rounded-xl md:rounded-2xl bg-slate-800/60 border border-slate-700/50 px-3 md:px-4 py-2.5 md:py-3 text-white placeholder-slate-400 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
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
                    className="w-full rounded-xl md:rounded-2xl bg-slate-800/60 border border-slate-700/50 px-3 md:px-4 py-2.5 md:py-3 text-white placeholder-slate-400 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 resize-none backdrop-blur-sm text-sm md:text-base"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl text-white transition-all duration-300 font-semibold flex items-center justify-center gap-2 md:gap-3 shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] text-sm md:text-base"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                  <span
                    style={{
                      fontFamily: "var(--font-bangers)",
                      letterSpacing: "0.07em",
                    }}
                  >
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactClientForm;
