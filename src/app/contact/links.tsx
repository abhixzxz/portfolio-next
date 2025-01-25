"use client";

import { ReactNode } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Globe,
  Codepen,
} from "lucide-react";

export interface ContactInfo {
  icon: ReactNode;
  title: string;
  details: string;
  subtitle: string;
}

export interface SocialLink {
  icon: ReactNode;
  href: string;
  label: string;
  color: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: <Instagram className="w-6 h-6 text-cyan-400" />,
    title: "Instagram",
    details: "https://www.instagram.com/abhirajk84/",
    subtitle: "Available ",
  },
  {
    icon: <Mail className="w-6 h-6 text-cyan-400" />,
    title: "Email",
    details: "abhi88wiz@gmail.com",
    subtitle: "Response within 24 hours",
  },
  {
    icon: <MapPin className="w-6 h-6 text-cyan-400" />,
    title: "Location",
    details: "Kottayam, Kerala",
    subtitle: "India",
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/abhixzxz",
    label: "Github",
    color: "hover:text-white",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/abhiraj-k-0661a1235",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: "https://x.com/bhiraj_k39869?t=vdXPv1FcU1o6UZ7dVem6CQ&s=09",
    label: "Twitter",
    color: "hover:text-sky-400",
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    href: "https://www.instagram.com/abhirajk84/",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    href: "https://www.facebook.com/abhi.rajk.12?mibextid=ZbWKwL",
    label: "Facebook",
    color: "hover:text-blue-500",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    href: "https://abhirajk.vercel.app/",
    label: "Website",
    color: "hover:text-green-400",
  },
  {
    icon: <Codepen className="w-5 h-5" />,
    href: "https://tailwindflex.com/@abhirajk",
    label: "Tailwind Flex",
    color: "hover:text-gray-100",
  },
];
