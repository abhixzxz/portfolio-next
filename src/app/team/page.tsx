"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Hamdan KT",
    role: "Full Stack Developer",
    image:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp",
  },
  {
    name: "Navaneeth ",
    role: "Frontend Developer",
    image:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp",
  },
  {
    name: "Dinto James",
    role: "UX Researcher",
    image:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp",
  },
  {
    name: "David Lew",
    role: "Backend Developer",
    image:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp",
  },
  {
    name: "Karthik M",
    role: "Product Manager",
    image:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp",
  },
  {
    name: "Libin Thomas",
    role: "UI Designer",
    image:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp",
  },
];

export default function TeamSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("team-container");
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };

  useEffect(() => {
    const container = document.getElementById("team-container");
    if (container) {
      const handleScroll = () => {
        setScrollPosition(container.scrollLeft);
      };
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="team-section relative overflow-hidden py-20 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Meet Our <span className="text-yellow-400">Powerhouse</span> Team
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Innovators, disruptors, and game-changers. We're not just a team,
            we're a force to be reckoned with.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveFilter("All")}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeFilter === "All"
                  ? "bg-yellow-400 text-gray-900 shadow-lg transform -translate-y-1"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              All Stars
            </button>
            <button
              onClick={() => setActiveFilter("Designers")}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeFilter === "Designers"
                  ? "bg-yellow-400 text-gray-900 shadow-lg transform -translate-y-1"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              Design Wizards
            </button>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-yellow-400 rounded-full shadow-lg text-gray-900 hover:bg-yellow-300 transition-all duration-300 pulse-animation"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div
            id="team-container"
            className="flex overflow-x-auto gap-8 pb-12 px-4 snap-x snap-mandatory hide-scrollbar"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-none w-[300px] snap-center transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl team-card">
                  <div className="relative mb-4 aspect-square overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="object-cover transition-all duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-2xl mb-2 text-white">
                      {member.name}
                    </h3>
                    <p className="text-yellow-400 text-lg mb-4">
                      {member.role}
                    </p>
                    <div className="flex justify-center gap-4">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-yellow-400 rounded-full shadow-lg text-gray-900 hover:bg-yellow-300 transition-all duration-300 pulse-animation"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        <div className="mt-20 text-center">
          <blockquote className="max-w-3xl mx-auto text-2xl text-gray-200 italic mb-8 leading-relaxed">
            "We don't just think outside the box. We obliterate it. Our team's
            synergy is our secret weapon in the battle for innovation."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400">
              <Image
                src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp"
                alt="CEO"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-left">
              <div className="font-bold text-xl text-white">Sarah Connor</div>
              <div className="text-yellow-400">Visionary & Chief Disruptor</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .team-section {
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          position: relative;
        }

        .team-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .team-card {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(250, 204, 21, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(250, 204, 21, 0);
          }
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        #team-container > div {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
