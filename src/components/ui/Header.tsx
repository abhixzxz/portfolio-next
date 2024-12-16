import React from "react";
import Link from "next/link";

import {
  HomeIcon,
  UserIcon,
  BookOpenIcon,
  ImageIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  PhoneIcon,
} from "lucide-react";

// SEO Keywords
const SEO_KEYWORDS = [
  "Abhiraj K",
  "Best software developer in Kottayam",
  "Next.js portfolio",
  "React developer",
  "SEO-friendly developer",
  "Kochi developer",
  "Kottayam developer",
  "Ayarkkunnam developer",
  "Kollam developer",
  "Kerala web developer",
  "Freelance developer Kerala",
  "Web application developer",
  "Modern web technologies",
  "Full-stack developer Kerala",
  "Frontend developer Kerala",
  "Backend developer Kerala",
  "Node.js expert",
  "MongoDB developer",
  "SQL developer",
  "JavaScript expert",
  "TypeScript developer",
  "Custom web solutions",
  "Portfolio developer",
  "Responsive web design",
  "UI/UX specialist",
  "Progressive web apps",
  "Kottayam tech solutions",
  "Kollam tech expert",
  "Kochi web innovations",
  "Ayarkkunnam software specialist",
];

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/about", label: "About", icon: UserIcon },
  { href: "/blog", label: "Blog", icon: BookOpenIcon },
  { href: "/gallery", label: "Gallery", icon: ImageIcon },
  { href: "/experience", label: "Experience", icon: BriefcaseIcon },
  { href: "/certificates", label: "Certificates", icon: GraduationCapIcon },
  { href: "/contact", label: "Contact", icon: PhoneIcon },
];

const Header: React.FC = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-2xl"
      role="banner"
    >
      <meta name="keywords" content={SEO_KEYWORDS.join(", ")} />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          href="/"
          aria-label="MyPortfolio Home"
          className="text-3xl font-extrabold tracking-tight transition-all duration-300 transform hover:text-yellow-400 hover:scale-105"
        >
          {/* <Image src={MyLogo} alt="mylogo" className="h-[30px] w-[100px]" /> */}
          <strong>Abhi-raj.k</strong>
        </Link>
        <nav aria-label="Skip Navigation">
          <Link
            href="#main-content"
            className="absolute top-[-100px] left-0 bg-yellow-400 text-black p-2 focus:top-0 z-50"
          >
            Skip to Main Content
          </Link>
        </nav>
      </div>
      <nav
        className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-800 to-gray-700 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
        aria-label="Mobile Navigation"
      >
        <ul className="flex justify-around py-3 text-xs">
          {NAV_ITEMS.slice(0, 4).map((item) => (
            <li
              key={item.href}
              className="transform transition-all duration-300 active:scale-95 hover:bg-gray-600/30 rounded-lg"
            >
              <Link
                href={item.href}
                className="flex flex-col items-center space-y-1 p-2 group"
                aria-label={`Navigate to ${item.label} page`}
              >
                <item.icon className="w-5 h-5 transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-110" />
                <span className="transition-all duration-300 group-hover:text-yellow-400">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav
        className="hidden md:block bg-black/10 py-3"
        aria-label="Desktop Navigation"
      >
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-8 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 group transition-all duration-300 hover:text-yellow-400 relative"
                  aria-label={`Navigate to ${item.label} page`}
                >
                  <item.icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:tracking-wider transition-all duration-300 relative">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
