import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

const BlogPost = ({ post }) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const toggleContent = () => setShowFullContent(!showFullContent);

  const isContent = post.content_blog_entries.length > 70;
  const contentPreview = isContent
    ? post.content_blog_entries.slice(0, 70) + "..."
    : post.content_blog_entries;

  return (
    <article className="relative isolate flex flex-col gap-8 lg:flex-row">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
          width={300}
          height={300}
          alt=""
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <time
            dateTime={post.publication_blog_entries}
            className="text-gray-500"
          >
            {format(parseISO(post.publication_blog_entries), "PPPpp", {
              locale: es,
            })}
          </time>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            {post.title_blog_entries}
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600">
            {showFullContent ? post.content_blog_entries : contentPreview}
          </p>
          {isContent && (
            <button
              onClick={toggleContent}
              className="text-indigo-600 hover:underline"
            >
              {showFullContent ? "Ver menos" : "Ver más"}
            </button>
          )}
        </div>
        <div className="mt-6 flex border-t border-gray-900/5 pt-6">
          <div className="relative flex items-center gap-x-4">
            <Link
              href="/blog/create"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-lg font-semibold text-white"
            >
              {post && post.name_user.charAt(0).toUpperCase()}
            </Link>
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <span className="absolute inset-0" />
                {post.name_user}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
