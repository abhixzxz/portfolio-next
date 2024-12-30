// Types for blog data
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "modern-react-patterns-2024",
    title: "Modern React Patterns for Scalable Applications",
    excerpt:
      "Exploring advanced React patterns including compound components, render props, and custom hooks for building maintainable applications.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626996/portfolio/oiwnyogohknszdyeuvg3.webp",
    date: "2024-03-15",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Development",
    tags: ["React", "JavaScript", "Web Development"],
  },
  {
    id: "nextjs-performance-optimization",
    title: "Optimizing Next.js Applications for Peak Performance",
    excerpt:
      "Deep dive into Next.js performance optimization techniques including image optimization, lazy loading, and server-side rendering strategies.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626995/portfolio/jgpxph4fm9acyeqfdic2.webp",
    date: "2024-03-10",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Performance",
    tags: ["Next.js", "Performance", "SEO"],
  },
  {
    id: "ai-integration-web",
    title: "Integrating AI Solutions in Modern Web Applications",
    excerpt:
      "Practical guide to incorporating AI capabilities into web applications using TensorFlow.js and OpenAI APIs.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626993/portfolio/jnkoccsxrh0te6tpl4as.webp",
    date: "2024-03-05",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "AI",
    tags: ["AI", "Machine Learning", "Integration"],
  },
  {
    id: "modern-react-patterns-advanced",
    title: "Modern React Patterns for Scalable Applications",
    excerpt:
      "Exploring advanced React patterns including compound components, render props, and custom hooks for building maintainable applications.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626996/portfolio/oiwnyogohknszdyeuvg3.webp",
    date: "2024-03-15",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Development",
    tags: ["React", "JavaScript", "Web Development"],
  },
  {
    id: "nextjs-performance-deep-dive",
    title: "Optimizing Next.js Applications for Peak Performance",
    excerpt:
      "Deep dive into Next.js performance optimization techniques including image optimization, lazy loading, and server-side rendering strategies.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626995/portfolio/jgpxph4fm9acyeqfdic2.webp",
    date: "2024-03-10",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Performance",
    tags: ["Next.js", "Performance", "SEO"],
  },
  {
    id: "ai-integration-practical",
    title: "Integrating AI Solutions in Modern Web Applications",
    excerpt:
      "Practical guide to incorporating AI capabilities into web applications using TensorFlow.js and OpenAI APIs.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626993/portfolio/jnkoccsxrh0te6tpl4as.webp",
    date: "2024-03-05",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "AI",
    tags: ["AI", "Machine Learning", "Integration"],
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for Enterprise Applications",
    excerpt:
      "A comprehensive guide to TypeScript patterns, type safety, and architecture decisions for large-scale applications.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2024-03-01",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Development",
    tags: ["TypeScript", "Enterprise", "Architecture"],
  },
  {
    id: "state-management-2024",
    title: "State Management in 2024: Beyond Redux",
    excerpt:
      "Exploring modern state management solutions including Zustand, Jotai, and React Query for efficient application state handling.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2024-02-28",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Development",
    tags: ["State Management", "React", "Architecture"],
  },
  {
    id: "micro-frontends",
    title: "Implementing Micro-Frontends with Module Federation",
    excerpt:
      "Step-by-step guide to building scalable micro-frontend architectures using Webpack 5's Module Federation.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626995/portfolio/jgpxph4fm9acyeqfdic2.webp",
    date: "2024-02-25",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Architecture",
    tags: ["Micro-Frontends", "Webpack", "Scaling"],
  },
  {
    id: "tailwind-advanced",
    title: "Advanced Tailwind CSS Techniques for Modern UIs",
    excerpt:
      "Deep dive into advanced Tailwind CSS features including custom plugins, dynamic utilities, and responsive design patterns.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2024-02-20",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "CSS",
    tags: ["Tailwind", "CSS", "UI Design"],
  },
  {
    id: "graphql-scaling",
    title: "Scaling GraphQL APIs in Production",
    excerpt:
      "Best practices for building and scaling GraphQL APIs including caching strategies, batching, and performance optimization.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626995/portfolio/jgpxph4fm9acyeqfdic2.webp",
    date: "2024-02-15",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Backend",
    tags: ["GraphQL", "API", "Scaling"],
  },
  {
    id: "monorepo-strategies",
    title: "Monorepo Strategies for Modern Web Applications",
    excerpt:
      "Exploring monorepo setup and management using tools like Turborepo, NX, and PNPM workspaces.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2024-02-10",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "DevOps",
    tags: ["Monorepo", "Development", "Tooling"],
  },
  {
    id: "serverless-architectures",
    title: "Building Serverless Architectures with AWS and Next.js",
    excerpt:
      "Comprehensive guide to serverless development using AWS Lambda, API Gateway, and Next.js server components.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2024-02-05",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Cloud",
    tags: ["Serverless", "AWS", "Next.js"],
  },
  {
    id: "web-security",
    title: "Web Security Best Practices for Modern Applications",
    excerpt:
      "Essential security practices including CSRF protection, XSS prevention, and secure authentication implementations.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2024-02-01",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Security",
    tags: ["Security", "Web Development", "Best Practices"],
  },
  {
    id: "testing-strategies",
    title: "Comprehensive Testing Strategies for React Applications",
    excerpt:
      "In-depth guide to testing React applications using Jest, React Testing Library, and Cypress for end-to-end testing.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2024-01-28",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Testing",
    tags: ["Testing", "React", "Quality Assurance"],
  },
  {
    id: "web-accessibility",
    title: "Building Accessible Web Applications",
    excerpt:
      "Comprehensive guide to implementing web accessibility standards and best practices in modern web applications.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626993/portfolio/jnkoccsxrh0te6tpl4as.webp",
    date: "2024-01-25",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Accessibility",
    tags: ["A11y", "Web Development", "UX"],
  },
  {
    id: "docker-deployment",
    title: "Docker Deployment Strategies for Web Applications",
    excerpt:
      "Best practices for containerizing and deploying web applications using Docker and container orchestration tools.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2024-01-20",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "DevOps",
    tags: ["Docker", "Deployment", "DevOps"],
  },
  {
    id: "web-performance",
    title: "Web Performance Optimization Techniques",
    excerpt:
      "Advanced techniques for optimizing web performance including bundle optimization, caching strategies, and runtime performance.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2024-01-15",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Development"],
  },
  {
    id: "react-architecture",
    title: "Scalable React Architecture Patterns",
    excerpt:
      "In-depth look at React application architecture including folder structure, state management, and component organization.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626993/portfolio/jnkoccsxrh0te6tpl4as.webp",
    date: "2024-01-10",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Architecture",
    tags: ["React", "Architecture", "Best Practices"],
  },
  {
    id: "api-design",
    title: "RESTful API Design Best Practices",
    excerpt:
      "Guide to designing scalable and maintainable REST APIs including versioning, error handling, and documentation.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2024-01-05",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Backend",
    tags: ["API", "REST", "Backend"],
  },
  {
    id: "css-architecture",
    title: "Modern CSS Architecture and Organization",
    excerpt:
      "Strategies for organizing and scaling CSS in large applications using modern methodologies and tools.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2024-01-01",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "CSS",
    tags: ["CSS", "Architecture", "Styling"],
  },
  {
    id: "progressive-web-apps",
    title: "Building Progressive Web Apps with Next.js",
    excerpt:
      "Complete guide to building PWAs using Next.js including offline support, push notifications, and app-like features.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626815/portfolio/jogbynyclpnlbagaattv.png",
    date: "2023-12-28",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Development",
    tags: ["PWA", "Next.js", "Mobile"],
  },
  {
    id: "database-optimization",
    title: "Database Optimization Strategies for Web Applications",
    excerpt:
      "Best practices for optimizing database performance including indexing, query optimization, and caching strategies.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626815/portfolio/jogbynyclpnlbagaattv.png",
    date: "2023-12-25",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Database",
    tags: ["Database", "Performance", "Optimization"],
  },
  {
    id: "authentication-security",
    title: "Modern Authentication Patterns and Security",
    excerpt:
      "Implementing secure authentication using JWT, OAuth, and modern security best practices in web applications.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626815/portfolio/jogbynyclpnlbagaattv.png",
    date: "2023-12-20",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Security",
    tags: ["Authentication", "Security", "JWT"],
  },
  {
    id: "edge-computing",
    title: "Edge Computing with Next.js and Vercel Edge Functions",
    excerpt:
      "Leveraging edge computing capabilities to build faster, more responsive applications using Next.js and Vercel's edge infrastructure.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626815/portfolio/jogbynyclpnlbagaattv.png",
    date: "2023-12-15",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Performance",
    tags: ["Edge Computing", "Next.js", "Performance"],
  },
  {
    id: "real-time-apps",
    title: "Building Real-Time Applications with WebSockets",
    excerpt:
      "Complete guide to implementing real-time features using WebSockets, Socket.io, and server-sent events in modern web applications.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626993/portfolio/jnkoccsxrh0te6tpl4as.webp",
    date: "2023-12-10",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Development",
    tags: ["WebSockets", "Real-Time", "Socket.io"],
  },
  {
    id: "headless-cms",
    title: "Integrating Headless CMS with Next.js Applications",
    excerpt:
      "Comprehensive guide to working with headless CMS platforms like Strapi, Sanity, and Contentful in Next.js applications.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2023-12-05",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "CMS",
    tags: ["Headless CMS", "Next.js", "Content Management"],
  },
  {
    id: "design-systems",
    title: "Building and Maintaining Design Systems at Scale",
    excerpt:
      "Strategies for creating, implementing, and scaling design systems in large organizations using React and Storybook.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2023-12-01",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Design",
    tags: ["Design Systems", "UI", "Storybook"],
  },
  {
    id: "rust-webassembly",
    title: "WebAssembly Integration with Rust and JavaScript",
    excerpt:
      "Guide to leveraging WebAssembly for high-performance web applications using Rust and JavaScript interoperability.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2023-11-28",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Performance",
    tags: ["WebAssembly", "Rust", "Performance"],
  },
  {
    id: "kubernetes-deployment",
    title: "Kubernetes Deployment Strategies for Web Applications",
    excerpt:
      "Best practices for deploying and managing web applications in Kubernetes clusters including scaling and monitoring.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2023-11-25",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "DevOps",
    tags: ["Kubernetes", "DevOps", "Deployment"],
  },
  {
    id: "web-analytics",
    title: "Implementing Custom Web Analytics Solutions",
    excerpt:
      "Building privacy-focused analytics solutions using modern web APIs and server-side tracking implementations.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2023-11-20",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Analytics",
    tags: ["Analytics", "Privacy", "Data"],
  },
  {
    id: "machine-learning-web",
    title: "Machine Learning in the Browser with TensorFlow.js",
    excerpt:
      "Implementing machine learning models in web applications using TensorFlow.js for real-time predictions and analysis.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2023-11-15",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "AI",
    tags: ["Machine Learning", "TensorFlow.js", "AI"],
  },
  {
    id: "distributed-caching",
    title: "Distributed Caching Strategies for Web Applications",
    excerpt:
      "Implementing and managing distributed caching solutions using Redis and Memcached for improved application performance.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626993/portfolio/jnkoccsxrh0te6tpl4as.webp",
    date: "2023-11-10",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Performance",
    tags: ["Caching", "Redis", "Performance"],
  },
  {
    id: "blockchain-integration",
    title: "Integrating Blockchain Technology in Web Applications",
    excerpt:
      "Guide to implementing blockchain features in web applications using Web3.js and Ethereum smart contracts.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626993/portfolio/jnkoccsxrh0te6tpl4as.webp",
    date: "2023-11-05",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Blockchain",
    tags: ["Blockchain", "Web3", "Ethereum"],
  },
  {
    id: "component-testing",
    title: "Component Testing Strategies with Testing Library",
    excerpt:
      "Advanced testing techniques for React components using Testing Library and Jest with real-world examples.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626993/portfolio/jnkoccsxrh0te6tpl4as.webp",
    date: "2023-11-01",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Testing",
    tags: ["Testing", "React", "Components"],
  },
  {
    id: "mobile-optimization",
    title: "Mobile-First Development Strategies",
    excerpt:
      "Best practices for building mobile-first web applications including responsive design, touch interactions, and performance optimization.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2023-10-28",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Mobile",
    tags: ["Mobile", "Responsive", "UX"],
  },
  {
    id: "database-migration",
    title: "Database Migration Strategies and Best Practices",
    excerpt:
      "Guide to planning and executing database migrations including schema changes, data transfer, and zero-downtime deployments.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2023-10-25",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Database",
    tags: ["Database", "Migration", "DevOps"],
  },
  {
    id: "event-driven",
    title: "Event-Driven Architecture in Modern Applications",
    excerpt:
      "Implementing event-driven architectures using message queues, webhooks, and event sourcing patterns.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628280/portfolio/jjbhtst3ri184nmxznfe.webp",
    date: "2023-10-20",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Architecture",
    tags: ["Event-Driven", "Architecture", "Microservices"],
  },
  {
    id: "coding-standards",
    title: "Establishing Coding Standards and Best Practices",
    excerpt:
      "Creating and maintaining coding standards including linting, formatting, and documentation practices for team consistency.",
    coverImage:
      "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734626815/portfolio/jogbynyclpnlbagaattv.png",
    date: "2023-10-15",
    author: {
      name: "Abhiraj K",
      avatar:
        "https://res.cloudinary.com/djv4xa6wu/image/upload/v1734628863/portfolio/mvsefulf9mimzumpbo0o.jpg",
    },
    category: "Development",
    tags: ["Standards", "Best Practices", "Team"],
  },
];
