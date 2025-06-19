import type { Metadata } from "next";
import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  CloudIcon,
  SmartphoneIcon,
  BrainCircuitIcon,
  MapPin,
  Calendar,
  Briefcase,
  Sparkles,
  Zap,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Abhiraj K - Full Stack Developer",
  description:
    "Learn more about Abhiraj K, a skilled Full Stack Developer based in Kottayam, Kerala, specializing in React, Next.js, Node.js, and modern web technologies.",
  alternates: {
    canonical: "https://abhirajk.vercel.app/about",
  },
  openGraph: {
    title: "About Abhiraj K - Full Stack Developer",
    description:
      "Explore the professional journey and technical expertise of Abhiraj K, a Full Stack Developer from Kottayam, Kerala.",
    url: "https://abhirajk.vercel.app/about",
  },
  twitter: {
    title: "About Abhiraj K - Full Stack Developer",
    description:
      "Discover Abhiraj K's expertise in full-stack development and innovative digital solutions.",
  },
};

const comprehensiveTechSkills = [
  {
    category: "Web Development",
    icon: CodeIcon,
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    technologies: [
      "React.js",
      "Next.js",
      "Vue.js",
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
    icon: ServerIcon,
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    technologies: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "GraphQL",
      "REST APIs",
      "WebSockets",
      "Microservices",
      "Python Django",
    ],
  },
  {
    category: "Mobile Development",
    icon: SmartphoneIcon,
    color: "from-rose-500/20 to-pink-500/20",
    borderColor: "border-rose-500/30",
    iconColor: "text-rose-400",
    technologies: ["React Native", "Flutter", "Progressive Web Apps (PWA)"],
  },
  {
    category: "Database & Storage",
    icon: DatabaseIcon,
    color: "from-cyan-500/20 to-teal-500/20",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "ORM (Mongoose, Sequelize)",
      "Database Design",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: CloudIcon,
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
  },
];

const professionalExperience = [
  {
    company: "MyKare Health",
    subtitle: "Revolutionizing Healthtech Solutions",
    role: "Software Developer",
    duration: "Present",
    period: "2024 - Present",
    icon: Briefcase,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
    highlights: [
      "Developed scalable healthtech solutions using Next.js for improved performance",
      "Implemented secure and HIPAA-compliant APIs for healthcare data integration",
      "Optimized appointment scheduling and patient management systems",
      "Built real-time dashboards to deliver actionable healthcare insights",
      "Built a React Native app for healthcare savings and expense tracking",
    ],
  },
  {
    company: "Amiyon Solutions Pvt Ltd",
    subtitle: "Communication & Integration Solutions",
    role: "Node.js Developer",
    duration: "November 2023",
    period: "Nov 2023",
    icon: Zap,
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400",
    highlights: [
      "Developed comprehensive WhatsApp integration modules",
      "Optimized communication processes across multiple projects",
      "Implemented robust API authentication mechanisms",
      "Enhanced real-time messaging systems to improve performance and scalability",
    ],
  },
  {
    company: "Safe Software and Integrated Solution Pvt Ltd",
    subtitle: "Fintech Innovation",
    role: "Software Engineer",
    duration: "July 2023",
    period: "Jul 2023",
    icon: Rocket,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    highlights: [
      "Engineered innovative solutions in the fintech sector",
      "Designed and implemented scalable software architectures",
      "Managed complex database systems and API development",
      "Conducted performance tuning and system optimization for enterprise-grade software",
    ],
  },
  {
    company: "Promoz soft Pvt Ltd",
    subtitle: "Accounting Solutions",
    role: "JR.Software Developer",
    duration: "June 2021",
    period: "Jun 2021",
    icon: Sparkles,
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
    highlights: [
      "Developed innovative mobile applications and websites tailored for accounting solutions",
      "Designed and implemented scalable software architectures for financial data management",
      "Integrated advanced database systems and APIs to streamline accounting workflows",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <article className="relative">
        {/* Hero Section */}
        <header className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-24 lg:py-32">
            <div className="text-center max-w-5xl mx-auto">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">
                  Kottayam, Kerala
                </span>
              </div>

              {/* Main Title */}
              <h1
                style={{
                  fontFamily: "var(--font-bangers)",
                  letterSpacing: "0.07em",
                }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6"
              >
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  ABHI
                </span>
                <span className="text-cyan-400">RAJ.K</span>
              </h1>

              {/* Subtitle */}
              <h2
                style={{
                  fontFamily: "var(--font-bangers)",
                  letterSpacing: "0.07em",
                }}
                className="text-2xl md:text-3xl lg:text-4xl text-cyan-400 mb-8"
              >
                Full Stack Engineer | Digital Innovation Architect
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                I am a passionate Software Engineer specializing in frontend
                development with React.js and Next.js. With experience in
                backend development using Node.js and database management with
                MongoDB and SQL, I excel at building user-friendly, scalable
                applications. I am committed to delivering efficient and
                impactful solutions, leveraging modern tools and frameworks.
              </p>
            </div>
          </div>
        </header>

        {/* Professional Journey Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <Briefcase className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-300">
                  Career Timeline
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-bangers)",
                  letterSpacing: "0.07em",
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
              >
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  PROFESSIONAL JOURNEY
                </span>
              </h2>
            </div>

            {/* Experience Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {professionalExperience.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <div key={index} className="group relative">
                    <div
                      className={`
                      relative h-full p-8 rounded-3xl border backdrop-blur-sm
                      bg-gradient-to-br ${exp.color}
                      ${exp.borderColor} hover:border-opacity-60
                      transition-all duration-500 ease-out
                      hover:scale-[1.02] hover:-translate-y-2
                      bg-slate-900/40
                    `}
                    >
                      {/* Glow Effect */}
                      <div
                        className={`
                        absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                        bg-gradient-to-br ${exp.color}
                        blur-xl -z-10 transition-opacity duration-500
                      `}
                      />

                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`${exp.iconColor}`}>
                          <IconComponent className="w-12 h-12" />
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <span className="text-xs text-slate-500 px-2 py-1 rounded-full bg-slate-800/60">
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div>
                          <h3
                            style={{
                              fontFamily: "var(--font-bangers)",
                              letterSpacing: "0.07em",
                            }}
                            className="text-2xl font-bold text-white mb-1"
                          >
                            {exp.role}
                          </h3>
                          <h4 className="text-lg font-semibold text-cyan-300 mb-1">
                            {exp.company}
                          </h4>
                          <p className="text-sm text-slate-400 mb-4">
                            {exp.subtitle}
                          </p>
                        </div>

                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="flex items-start gap-2 text-sm text-slate-300"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Accent */}
                      <div
                        className={`
                        absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl
                        bg-gradient-to-r ${exp.color.replace("/20", "/60")}
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      `}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Expertise Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <CodeIcon className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">
                  Technical Skills
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-bangers)",
                  letterSpacing: "0.07em",
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
              >
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  TECHNOLOGY EXPERTISE
                </span>
              </h2>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comprehensiveTechSkills.map((skillCategory, index) => {
                const IconComponent = skillCategory.icon;
                return (
                  <div key={index} className="group relative">
                    <div
                      className={`
                      relative h-full p-8 rounded-3xl border backdrop-blur-sm
                      bg-gradient-to-br ${skillCategory.color}
                      ${skillCategory.borderColor} hover:border-opacity-60
                      transition-all duration-500 ease-out
                      hover:scale-[1.02] hover:-translate-y-2
                      bg-slate-900/40
                    `}
                    >
                      {/* Glow Effect */}
                      <div
                        className={`
                        absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                        bg-gradient-to-br ${skillCategory.color}
                        blur-xl -z-10 transition-opacity duration-500
                      `}
                      />

                      {/* Header */}
                      <div className="flex items-center mb-6">
                        <div className={`${skillCategory.iconColor}`}>
                          <IconComponent className="w-12 h-12" />
                        </div>
                        <h3
                          style={{
                            fontFamily: "var(--font-bangers)",
                            letterSpacing: "0.07em",
                          }}
                          className="text-xl font-bold ml-4 text-white"
                        >
                          {skillCategory.category}
                        </h3>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {skillCategory.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:bg-slate-700/60 hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Accent */}
                      <div
                        className={`
                        absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl
                        bg-gradient-to-r ${skillCategory.color.replace(
                          "/20",
                          "/60"
                        )}
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      `}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Professional Philosophy Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="relative">
              {/* Background Card */}
              <div className="relative p-12 rounded-3xl border border-slate-800/50 backdrop-blur-sm bg-gradient-to-br from-slate-900/40 to-slate-800/40">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-xl -z-10" />

                {/* Content */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
                    <BrainCircuitIcon className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium text-cyan-300">
                      Philosophy & Vision
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-bangers)",
                      letterSpacing: "0.07em",
                    }}
                    className="text-4xl md:text-5xl font-black mb-8"
                  >
                    <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                      PROFESSIONAL PHILOSOPHY
                    </span>
                  </h2>

                  <div className="prose prose-lg prose-invert max-w-4xl mx-auto">
                    <p className="text-slate-300 text-lg leading-relaxed">
                      As a versatile Full Stack Developer, I am passionate about
                      bridging the gap between innovative design and robust
                      technical implementation. With a deep understanding of
                      both frontend and backend technologies, I work to create
                      seamless digital experiences that are not only functional
                      but also aesthetically pleasing.
                    </p>
                    <p className="text-slate-300 text-lg leading-relaxed mt-6">
                      My approach integrates cutting-edge technologies with
                      strategic problem-solving techniques, ensuring that the
                      solutions I deliver are scalable, maintainable, and
                      user-centric. I believe in the power of collaboration,
                      working alongside designers, product managers, and
                      stakeholders to bring shared visions to life.
                    </p>
                    <p className="text-slate-300 text-lg leading-relaxed mt-6">
                      Through continuous learning and staying up-to-date with
                      industry trends, I strive to push boundaries and deliver
                      innovative digital solutions that create meaningful impact
                      for users and businesses alike.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 sm:gap-x-8 sm:gap-y-4 px-4 sm:px-8 py-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
              <div className="text-center px-2 py-3">
                <div className="text-3xl font-bold text-cyan-400 mb-1">4+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-slate-700 hidden sm:block" />
              <div className="text-center px-2 py-3">
                <div className="text-3xl font-bold text-cyan-400 mb-1">25+</div>
                <div className="text-sm text-slate-400">Technologies</div>
              </div>
              <div className="w-px h-12 bg-slate-700 hidden sm:block" />
              <div className="text-center px-2 py-3">
                <div className="text-3xl font-bold text-cyan-400 mb-1">4</div>
                <div className="text-sm text-slate-400">Companies</div>
              </div>
              <div className="w-px h-12 bg-slate-700 hidden sm:block" />
              <div className="text-center px-2 py-3">
                <div className="text-3xl font-bold text-cyan-400 mb-1">
                  100+
                </div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
