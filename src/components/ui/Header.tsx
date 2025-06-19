import type React from "react";
import Link from "next/link";
import Image from "next/image";
import MyLogo from "../../../public/images/logo.png";
import {
  HomeIcon,
  UserIcon,
  BookOpenIcon,
  ImageIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  PhoneIcon,
} from "lucide-react";

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
    <>
      {/* Desktop Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50"
        role="banner"
      >
        <nav className="hidden lg:block" aria-label="Desktop Navigation">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Abhiraj K Portfolio Home"
              className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                {/* <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                <Image
                  src={MyLogo || "/placeholder.svg"}
                  alt="Abhiraj K Logo"
                  className="relative h-12 w-10 md:h-14 md:w-12 transition-all duration-300 group-hover:scale-110"
                  priority
                /> */}
              </div>
              <span
                className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-bangers)",
                  letterSpacing: "0.07em",
                }}
              >
                ABHIRAJ.K
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                    aria-label={`Navigate to ${item.label} page`}
                  >
                    <item.icon className="w-4 h-4 transition-all duration-300 group-hover:scale-110" />
                    <span
                      className="font-medium transition-all duration-300"
                      style={{
                        fontFamily: "var(--font-bangers)",
                        letterSpacing: "0.07em",
                      }}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Header */}
        <nav className="lg:hidden" aria-label="Mobile Navigation">
          <div className="container mx-auto flex items-center justify-center px-4 py-3">
            <Link
              href="/"
              aria-label="Abhiraj K Portfolio Home"
              className="group flex items-center space-x-2 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                <Image
                  src={MyLogo || "/placeholder.svg"}
                  alt="Abhiraj K Logo"
                  className="relative h-10 w-8 transition-all duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <span
                className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-bangers)",
                  letterSpacing: "0.07em",
                }}
              >
                ABHIRAJ.K
              </span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Bottom Mobile Navigation */}
      <nav
        className="fixed bottom-0 left-0 right-0 lg:hidden z-40 bg-slate-950/90 backdrop-blur-md border-t border-slate-800/50"
        aria-label="Mobile Bottom Navigation"
      >
        <div className="container mx-auto px-2">
          <ul className="flex justify-around py-2">
            {NAV_ITEMS.slice(0, 5).map((item) => (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  className="group flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-300 text-slate-400 hover:text-cyan-400"
                  aria-label={`Navigate to ${item.label} page`}
                >
                  <item.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                  <span
                    className="text-xs font-medium transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-bangers)",
                      letterSpacing: "0.07em",
                    }}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Header;
