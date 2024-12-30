import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpenIcon,
  CalendarIcon,
  TagIcon,
  RssIcon,
  SearchIcon,
  FilterIcon,
} from "lucide-react";
import { blogPosts } from "./blogData";

export const metadata: Metadata = {
  title: "Tech Blog | Abhiraj K - Full Stack Developer",
  description:
    "Explore technical insights, development tips, and industry perspectives from Abhiraj K - Full Stack Developer specializing in modern web technologies.",
  keywords: [
    "Web Development Blog",
    "Technical Articles",
    "Software Engineering Insights",
    "React.js Tips",
    "Node.js Tutorials",
    "Full Stack Development",
    "Tech Industry Perspectives",
    "Development Best Practices",
  ],
};

const POSTS_PER_PAGE = 6;

const BlogPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const currentPage =
    typeof searchParams?.page === "string" ? Number(searchParams.page) : 1;

  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const validatedPage = Math.max(1, Math.min(currentPage, totalPages));

  const startIndex = (validatedPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const stats = [
    { label: "Articles", value: blogPosts.length },
    { label: "Topics", value: "25+" },
    { label: "Readers", value: "10k+" },
  ];

  return (
    <article className="bg-black text-white min-h-screen">
      <header className="relative overflow-hidden py-12 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-zinc-800 opacity-90" />

        {/* Abstract geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 md:w-96 h-72 md:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 md:w-96 h-72 md:h-96 bg-cyan-700/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h1
              style={{
                fontFamily: "var(--font-bangers)",
                letterSpacing: "0.07em",
              }}
              className="text-4xl sm:text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500"
            >
              Tech <span className="text-cyan-400">Insights</span>
            </h1>

            <p className="mt-4 md:mt-6 text-base md:text-xl text-gray-300 max-w-4xl mx-auto px-4">
              Welcome to Tech Insights, your go-to destination for exploring the
              latest in web development and software engineering. Whether{" "}
              {"you're"}a seasoned developer or just starting your coding
              journey, we dive deep into modern frameworks, cutting-edge
              technologies, architectural patterns, and industry best practices.
            </p>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full sm:w-64 pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg text-gray-300 focus:outline-none focus:border-cyan-500"
                />
                <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
              </div>

              <div className="flex gap-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg text-gray-300 hover:border-cyan-500 transition-colors">
                  <FilterIcon className="h-5 w-5" />
                  <span>Filter</span>
                </button>
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-cyan-600/20 border border-cyan-600/50 rounded-lg text-cyan-400 hover:bg-cyan-600/30 transition-colors">
                  <RssIcon className="h-5 w-5" />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Bar - Grid on mobile */}
          <div className="grid grid-cols-2 sm:flex sm:justify-center gap-6 md:gap-12 mt-8 md:mt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-cyan-600 transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-300">
                      {post.author.name}
                    </p>
                    <div className="flex items-center text-xs text-gray-400">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <Link href={`/blog/${post.id}`}>
                  <h2
                    className="text-xl font-bold mb-3 text-cyan-400 hover:text-cyan-300"
                    style={{
                      fontFamily: "var(--font-bangers)",
                      letterSpacing: "0.07em",
                    }}
                  >
                    {post.title}
                  </h2>
                </Link>

                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-cyan-900/30 text-cyan-400 px-2 py-1 rounded-full text-xs flex items-center">
                    <BookOpenIcon className="w-3 h-3 mr-1" />
                    {post.category}
                  </span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-zinc-800 text-gray-300 px-2 py-1 rounded-full text-xs flex items-centers"
                    >
                      <TagIcon className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-4">
          {currentPage > 1 && (
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className="px-4 py-2 bg-zinc-900 text-cyan-400 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Previous
            </Link>
          )}

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <Link
                  key={pageNum}
                  href={`/blog?page=${pageNum}`}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    pageNum === currentPage
                      ? "bg-cyan-600 text-white"
                      : "bg-zinc-900 text-cyan-400 hover:bg-zinc-800"
                  }`}
                >
                  {pageNum}
                </Link>
              )
            )}
          </div>

          {currentPage < totalPages && (
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className="px-4 py-2 bg-zinc-900 text-cyan-400 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Next
            </Link>
          )}
        </div>
      </section>
    </article>
  );
};

export default BlogPage;
