"use client";

import { ReactNode } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
  Globe,
  MessageCircle,
  Codepen,
  Coffee,
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
    icon: <Phone className="w-6 h-6 text-cyan-400" />,
    title: "Phone",
    details: "+91 123-456-7890",
    subtitle: "Available Mon-Fri, 9am-6pm IST",
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
    href: "#",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    icon: <Youtube className="w-5 h-5" />,
    href: "#",
    label: "YouTube",
    color: "hover:text-red-500",
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    href: "https://www.facebook.com/abhi.rajk.12?mibextid=ZbWKwL",
    label: "Facebook",
    color: "hover:text-blue-500",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    href: "#",
    label: "Website",
    color: "hover:text-green-400",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    href: "#",
    label: "Blog",
    color: "hover:text-purple-400",
  },
  {
    icon: <Codepen className="w-5 h-5" />,
    href: "#",
    label: "CodePen",
    color: "hover:text-gray-100",
  },
  {
    icon: <Coffee className="w-5 h-5" />,
    href: "#",
    label: "Buy Me a Coffee",
    color: "hover:text-yellow-400",
  },
];
