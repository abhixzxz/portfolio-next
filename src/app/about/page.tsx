import React from "react";
import { Metadata } from "next";
import Head from "next/head";
import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  CloudIcon,
  SmartphoneIcon,
  BrainCircuitIcon,
} from "lucide-react";

const absoluteUrl = (path: string) => `https://abhirajk.com${path}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://abhirajk.com"),
  title: {
    default: "Abhiraj K - Full Stack Developer | Web & Mobile Solutions",
    template: "%s | Abhiraj K - Digital Innovation Architect",
  },
  description:
    "Expert Full Stack Developer specializing in modern web and mobile technologies. Transforming innovative ideas into robust digital solutions across React, Node.js, and emerging tech stacks.",
  keywords: [
    // Technical Skills
    "Full Stack Developer",
    "Web Development",
    "Mobile Development",
    "React.js Developer",
    "Node.js Expert",
    "TypeScript Programmer",
    "Next.js Specialist",
    "Cloud Computing",
    "AI Integration",
    "Software Engineering",

    // Technologies
    "React Native",
    "Express.js",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "Machine Learning",
    "Natural Language Processing",

    // Professional Skills
    "Scalable Software Architecture",
    "API Development",
    "Microservices",
    "Cross-platform Development",
    "DevOps",
    "Agile Methodologies",

    // Location-based Keywords
    "Kerala Software Developer",
    "Indian Tech Professional",
    "Remote Software Engineer",
  ],
  authors: [{ name: "Abhiraj K", url: "https://abhirajk.com" }],
  creator: "Abhiraj K",
  publisher: "Abhiraj K",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: absoluteUrl("/about"),
    title: "Abhiraj K - Full Stack Developer",
    description:
      "Innovative Full Stack Developer transforming complex challenges into seamless digital solutions.",
    siteName: "Abhiraj K Portfolio",
    images: [
      {
        url: absoluteUrl("/images/abhiraj-og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Abhiraj K - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhiraj K - Full Stack Developer",
    description:
      "Expert in web and mobile development, AI integration, and innovative tech solutions.",
    images: [absoluteUrl("/images/abhiraj-twitter-image.jpg")],
  },
  alternates: {
    canonical: absoluteUrl("/about"),
    languages: {
      "en-US": absoluteUrl("/about"),
      "en-GB": absoluteUrl("/about"),
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: absoluteUrl("/manifest.json"),
};

const AboutPage: React.FC = () => {
  const comprehensiveTechSkills = [
    {
      category: "Web Development",
      icon: <CodeIcon className="w-10 h-10 stroke-[1.5] text-indigo-600" />,
      headingColor: "text-indigo-600",
      technologies: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Angular",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "SCSS",
        "Styled Components",
      ],
    },
    {
      category: "Backend Technologies",
      icon: <ServerIcon className="w-10 h-10 stroke-[1.5] text-emerald-600" />,
      headingColor: "text-emerald-600",
      technologies: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "GraphQL",
        "REST APIs",
        "WebSockets",
        "Microservices",
        "Python Django",
        "Spring Boot",
      ],
    },
    {
      category: "Mobile Development",
      icon: <SmartphoneIcon className="w-10 h-10 stroke-[1.5] text-rose-600" />,
      headingColor: "text-rose-600",
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Ionic",
        "Progressive Web Apps (PWA)",
        "Cross-platform Development",
      ],
    },
    {
      category: "Database & Backend",
      icon: <DatabaseIcon className="w-10 h-10 stroke-[1.5] text-cyan-600" />,
      headingColor: "text-cyan-600",
      technologies: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "Redis",
        "GraphQL",
        "ORM (Mongoose, Sequelize)",
        "Database Design",
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: <CloudIcon className="w-10 h-10 stroke-[1.5] text-purple-600" />,
      headingColor: "text-purple-600",
      technologies: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Jenkins",
        "Serverless Computing",
        "Terraform",
      ],
    },
    {
      category: "AI & Emerging Tech",
      icon: (
        <BrainCircuitIcon className="w-10 h-10 stroke-[1.5] text-yellow-600" />
      ),
      headingColor: "text-yellow-600",
      technologies: [
        "Machine Learning",
        "TensorFlow",
        "OpenAI",
        "ChatGPT Integration",
        "Natural Language Processing",
        "AI-Driven Development",
      ],
    },
  ];

  const professionalExperience = [
    {
      company: "MyKare Health - Revolutionizing Healthtech Solutions",
      role: "Software Developer",
      duration: "Present",
      highlights: [
        "Developed scalable healthtech solutions using Next.js for improved performance",
        "Implemented secure and HIPAA-compliant APIs for healthcare data integration",
        "Optimized appointment scheduling and patient management systems",
        "Built real-time dashboards to deliver actionable healthcare insights",
      ],
    },
    {
      company: "Amiyon Solutions Pvt Ltd",
      role: "Node.js Developer",
      duration: "November 2023",
      highlights: [
        "Developed comprehensive WhatsApp integration modules",
        "Optimized communication processes across multiple projects",
        "Implemented robust API authentication mechanisms",
        "Enhanced real-time messaging systems to improve performance and scalability",
      ],
    },
    {
      company: "Safe Software and Integrated Solution Pvt Ltd",
      role: "Software Engineer",
      duration: "July 2023",
      highlights: [
        "Engineered innovative solutions in the fintech sector",
        "Designed and implemented scalable software architectures",
        "Managed complex database systems and API development",
        "Conducted performance tuning and system optimization for enterprise-grade software",
      ],
    },
    {
      company: "Promoz soft Pvt Ltd",
      role: "JR.Software Developer",
      duration: "June 2021",
      highlights: [
        "Developed innovative mobile applications and websites tailored for accounting solutions",
        "Designed and implemented scalable software architectures for financial data management",
        "Integrated advanced database systems and APIs to streamline accounting workflows",
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Structured Data JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Abhiraj K",
            jobTitle: "Full Stack Developer",
            alumniOf: "Your University",
            skills: [
              "Web Development",
              "Mobile Development",
              "Cloud Computing",
              "AI Integration",
            ],
            knowsAbout: [
              "React.js",
              "Node.js",
              "TypeScript",
              "Cloud Technologies",
              "Machine Learning",
            ],
            sameAs: [
              "https://www.linkedin.com/in/abhirajk",
              "https://github.com/abhirajk",
              "https://twitter.com/abhirajk",
            ],
          })}
        </script>
      </Head>

      <article className="bg-black text-white min-h-screen flex flex-col">
        {/* Header Section */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-zinc-800 opacity-90"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
            <h1
              style={{
                fontFamily: "var(--font-bangers)",
                letterSpacing: "0.07em",
              }}
              className="text-5xl md:text-7xl font-black leading- tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500"
            >
              A<b className="text-cyan-400">BHI RAJ.K</b>
            </h1>

            <h2
              style={{
                fontFamily: "var(--font-bangers)",
                letterSpacing: "0.07em",
              }}
              className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto text-cyan-400"
            >
              Full Stack Engineer | Digital Innovation Architect
            </h2>
            <p
              style={{
                fontFamily: "var(--font-bangers)",
                letterSpacing: "0.07em",
              }}
              className="mt-3 text-[20px] flex items-start justify-start"
            >
              I am a passionate Software Engineer specializing in frontend
              development with React.js and Next.js. With experience in backend
              development using Node.js and database management with MongoDB and
              SQL, I excel at building user-friendly, scalable applications. I
              am committed to delivering efficient and impactful solutions,
              leveraging modern tools and frameworks.
            </p>
          </div>
        </header>

        <section className="py-16 px-4 bg-zinc-900">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl font-bold text-center mb-12 text-cyan-400"
              style={{
                fontFamily: "var(--font-bangers)",
                letterSpacing: "0.07em",
              }}
            >
              Professional Journey
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {professionalExperience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700 hover:border-cyan-600 transition-all duration-300"
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-bangers)",
                      letterSpacing: "0.07em",
                    }}
                    className="text-2xl font-semibold text-cyan-400 mb-2"
                  >
                    {exp.role}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {exp.company} | {exp.duration}
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-3xl font-bold text-center mb-12 text-cyan-400"
              style={{
                fontFamily: "var(--font-bangers)",
                letterSpacing: "0.07em",
              }}
            >
              Technology Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comprehensiveTechSkills.map((skillCategory, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 shadow-2xl hover:border-cyan-600 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {skillCategory.icon}
                    <h3
                      className={`text-2xl font-bold ml-4 ${skillCategory.headingColor}`}
                      style={{
                        fontFamily: "var(--font-bangers)",
                        letterSpacing: "0.07em",
                      }}
                    >
                      {skillCategory.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-zinc-800 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-cyan-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="flex">
            <div className="w-10/12 mx-auto text-center">
              <h2
                className="text-3xl font-bold mb-6 text-cyan-400"
                style={{
                  fontFamily: "var(--font-bangers)",
                  letterSpacing: "0.07em",
                }}
              >
                Professional Philosophy
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-bangers)",
                  letterSpacing: "0.07em",
                }}
                className="text-gray-300 text-lg leading-relaxed"
              >
                As a versatile Full Stack Developer, I am passionate about
                bridging the gap between innovative design and robust technical
                implementation. With a deep understanding of both frontend and
                backend technologies, I work to create seamless digital
                experiences that are not only functional but also aesthetically
                pleasing. My approach integrates cutting-edge technologies with
                strategic problem-solving techniques, ensuring that the
                solutions I deliver are scalable, maintainable, and
                user-centric. I believe in the power of collaboration, often
                working alongside designers, product managers, and other
                stakeholders to bring a shared vision to life. By understanding
                the core needs of users and businesses alike, I aim to deliver
                solutions that enhance user engagement and satisfaction, while
                also addressing complex technical challenges. My expertise spans
                across a range of tools and frameworks, from modern JavaScript
                libraries and frameworks like React and Next.js, to backend
                technologies like Node.js and Spring Boot, and content
                management systems such as Strapi. I also leverage cloud
                services, databases, and other technologies to craft solutions
                that are not only powerful but also adaptable to the evolving
                needs of users and businesses. Above all, my focus is on
                creating digital solutions that simplify complexity, ensuring a
                seamless, intuitive experience for every user. Through
                continuous learning and staying up-to-date with industry trends,
                I aim to push the boundaries of what is possible and contribute
                to building innovative digital products that make a lasting
                impact.
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default AboutPage;
