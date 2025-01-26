import type { Metadata } from "next";
import Image from "next/image";
import "./experience.css";

export const metadata: Metadata = {
  title: "Experience | Abhiraj K - Professional Journey",
  description:
    "Explore my professional experience in full-stack development, featuring expertise in Node.js, React, AWS, and more.",
  keywords: [
    "Full Stack Experience",
    "Node.js Developer",
    "React Developer",
    "AWS Expert",
    "MongoDB Developer",
    "Angular Developer",
    "Android Development",
    "Kerala Tech Professional",
  ],
  openGraph: {
    title: "Professional Experience | Abhiraj K",
    description:
      "Journey through my technical expertise and professional achievements",
    images: [
      {
        url: "https://abhirajk.vercel.app/og-experience.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

interface Skill {
  title: string;
  description: string;
  imageUrl: string;
}

const SAMPLE_SKILLS: Skill[] = [
  {
    title: "Node.js",
    description: `Extensive experience in building robust and scalable backend services using Node.js and Express. Proficient in developing RESTful APIs with advanced features including authentication, rate limiting, and caching. Skilled in handling complex server-side operations, implementing microservices architecture, and optimizing application performance. Experience with event-driven programming, stream processing, and real-time applications using Socket.IO. Strong background in integrating third-party APIs, implementing middleware, and managing asynchronous operations efficiently using Promises and async/await patterns. Demonstrated expertise in error handling, logging, and monitoring solutions for production environments.`,
    imageUrl:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735226165/portfolio/programming/mbzwbzfzxv84fuxawjrq.svg",
  },
  {
    title: "Next.js",
    description: `Advanced proficiency in developing high-performance React applications using Next.js framework. Expert in implementing server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR) for optimal performance and SEO. Skilled in creating dynamic routes, API routes, and implementing middleware for complex applications. Experience with Next.js' advanced features including Image optimization, Internationalization, and Dynamic Imports. Proficient in implementing efficient data fetching strategies, state management solutions, and creating responsive layouts using modern CSS frameworks. Demonstrated ability to optimize build times, implement caching strategies, and deploy applications to various hosting platforms.`,
    imageUrl:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735228568/portfolio/programming/uady808jt7lfnfiemqkm.png",
  },
  {
    title: "AWS",
    description: `Comprehensive experience in architecting and implementing cloud solutions using Amazon Web Services (AWS). Proficient in designing scalable and fault-tolerant applications using EC2, ECS, and EKS for containerization. Expert in implementing serverless architectures using AWS Lambda, API Gateway, and DynamoDB. Strong background in cloud storage solutions including S3, EFS, and managing content delivery using CloudFront. Experience with AWS security best practices, IAM roles, and VPC configuration. Skilled in implementing CI/CD pipelines using AWS CodePipeline, CodeBuild, and CodeDeploy. Proficient in monitoring and logging using CloudWatch, X-Ray, and implementing auto-scaling solutions for optimal performance and cost management.`,
    imageUrl:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735226165/portfolio/programming/gyup6udya6oc1p3jbqms.svg",
  },
  {
    title: "React",
    description: `Deep expertise in developing modern web applications using React and its ecosystem. Advanced knowledge of React Hooks, Context API, and custom hook development for state management and code reusability. Proficient in implementing complex UI components with optimal performance using React.memo, useMemo, and useCallback. Experience with state management solutions including Redux, MobX, and Zustand. Skilled in creating responsive layouts using CSS-in-JS solutions and modern styling frameworks. Strong background in implementing accessibility standards, unit testing with Jest and React Testing Library, and optimizing application performance through code splitting and lazy loading.`,
    imageUrl:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735226167/portfolio/programming/iegqaqwdq29f6gspjml4.png",
  },
  {
    title: "MongoDB & MySQL",
    description: `Comprehensive expertise in designing and managing both NoSQL and SQL database systems. Advanced knowledge of MongoDB schema design, aggregation pipelines, and indexing strategies for optimal query performance. Proficient in implementing data replication, sharding, and backup solutions. Expert in MySQL database design, normalization, and query optimization. Experience with implementing complex joins, stored procedures, and triggers. Strong background in implementing data security measures, managing database migrations, and maintaining data integrity. Skilled in implementing caching strategies, connection pooling, and database monitoring solutions for high-traffic applications.`,
    imageUrl:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735228758/portfolio/programming/sawfj0q4ic46ek8ace1n.png",
  },
  {
    title: "Angular",
    description: `Extensive experience in developing enterprise-level applications using the Angular framework. Advanced knowledge of TypeScript, RxJS, and component-based architecture. Proficient in implementing complex state management solutions using NgRx and managing side effects. Expert in creating reusable UI components, custom directives, and pipes. Strong background in implementing lazy loading, route guards, and interceptors for secure application architecture. Skilled in unit testing with Jasmine and Karma, and end-to-end testing with Protractor or Cypress. Experience with Angular Material, implementing responsive designs, and creating custom form validators. Demonstrated ability in optimizing Angular applications for performance and implementing PWA features.`,
    imageUrl:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735226166/portfolio/programming/idd60uticvv2mr4yvurn.svg",
  },
  {
    title: "Android",
    description: `Comprehensive expertise in native Android application development using Kotlin and Java. Proficient in implementing MVVM architecture pattern with Android Architecture Components including ViewModel, LiveData, and Data Binding. Advanced knowledge of Jetpack Compose for modern UI development and Material Design principles. Experience with dependency injection using Dagger Hilt, networking with Retrofit, and local data persistence using Room Database. Skilled in implementing background processing with Kotlin Coroutines and WorkManager. Strong background in app security, implementing offline-first architecture, and handling device fragmentation. Demonstrated ability in optimizing app performance, implementing custom views, and creating smooth animations. Experience with Firebase services, implementing push notifications, and integrating third-party SDKs.`,
    imageUrl:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735226166/portfolio/programming/ukqb3bfngwdrhbpojxiq.svg",
  },
];

export default function Experience() {
  return (
    <main className="experience-container pt-0 lg:pt-[120px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="experience-header mb-8 sm:mb-12">
          <h1
            className="experience-title text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{
              fontFamily: "var(--font-bangers)",
              letterSpacing: "0.07em",
            }}
          >
            Professional Experience
          </h1>
          <p
            className="experience-subtitle text-lg sm:text-xl lg:text-2xl"
            style={{
              fontFamily: "var(--font-bangers)",
              letterSpacing: "0.07em",
            }}
          >
            Explore my journey and expertise in full-stack development
          </p>
        </header>

        <section className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_SKILLS.map((skill) => (
            <article key={skill.title} className="skill-card p-6 rounded-lg shadow-lg bg-white/5 backdrop-blur-sm">
              <div className="skill-content">
                <div className="skill-header flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                    <Image
                      src={skill.imageUrl || "/placeholder.svg"}
                      alt={`${skill.title} logo`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h2 className="skill-title text-xl sm:text-2xl font-semibold">{skill.title}</h2>
                </div>
                <div className="skill-description">
                  <p className="text-sm sm:text-base leading-relaxed">{skill.description}</p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
