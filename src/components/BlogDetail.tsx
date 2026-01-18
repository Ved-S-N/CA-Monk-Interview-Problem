import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../api/blogs.api";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

type Props = {
  blogId: number | null;
};

export default function BlogDetail({ blogId }: Props) {
  const enabled = blogId !== null;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => fetchBlogById(blogId as number),
    enabled,
  });

  if (!blogId) {
    return (
      <div className="rounded-2xl  bg-white p-10 text-zinc-400">
        Select an article from the left to view details.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-[320px] rounded-2xl bg-zinc-900 animate-pulse" />
        <div className="h-10 w-2/3 rounded-xl bg-zinc-900 animate-pulse" />
        <div className="h-24 rounded-xl bg-zinc-900 animate-pulse" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
        Failed to load blog.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden no-scrollbar shadow-sm">
      <img
        src={data.coverImage}
        alt={data.title}
        className="w-full h-[320px] object-cover"
      />

      <div className="p-8 space-y-5">
        {/* top meta */}
        <div className="flex items-center gap-3 text-sm text-zinc-400">
          <span className="uppercase font-semibold text-blue-400">
            {data.category?.[0] ?? "BLOG"}
          </span>
          <span>•</span>
          <span>{new Date(data.date).toLocaleDateString()}</span>
        </div>

        {/* title */}
        <h1 className="text-4xl font-extrabold leading-tight">{data.title}</h1>

        {/* share button */}
        <button
          className="inline-flex items-center gap-2 rounded-md bg-[#4f46e5] px-4 py-2 text-sm font-semibold text-white
  shadow-sm hover:bg-[#4338ca] transition"
        >
          {/* Share icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M15.75 4.5a3 3 0 0 0-2.943 2.406l-4.89 2.56a3 3 0 1 0 0 4.068l4.89 2.56A3 3 0 1 0 13.5 15a2.98 2.98 0 0 0-.693.082l-4.89-2.56a3.02 3.02 0 0 0 0-1.044l4.89-2.56A2.98 2.98 0 0 0 13.5 9a3 3 0 1 0 2.25-4.5Z" />
          </svg>
          Share Article
        </button>

        {/* meta bar (like reference image) */}
        <div className="rounded-xl border border-zinc-200 bg-[rgba(246,246,248,1)] overflow-hidden">
          <div className="grid grid-cols-3">
            {/* Category */}
            <div className="p-4 text-center">
              <p className="text-[10px] tracking-widest text-zinc-400 uppercase">
                Category
              </p>
              <p className="text-sm font-semibold text-zinc-900">
                {data.category?.[0] ?? "-"}
              </p>
            </div>

            {/* Divider + Read Time */}
            <div className="p-4 text-center border-l border-zinc-200">
              <p className="text-[10px] tracking-widest text-zinc-400 uppercase">
                Read Time
              </p>
              <p className="text-sm font-semibold text-zinc-900">5 Mins</p>
            </div>

            {/* Divider + Date */}
            <div className="p-4 text-center border-l border-zinc-200">
              <p className="text-[10px] tracking-widest text-zinc-400 uppercase">
                Date
              </p>
              <p className="text-sm font-semibold text-zinc-900">
                {new Date(data.date).toLocaleDateString(undefined, {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="pt-2 text-black-300 whitespace-pre-line leading-relaxed text-[15px]">
          {data.description}
          <div className="pb-2"></div>
          {data.content}
        </div>

        {/* bottom author placeholder */}
        <div className="pt-8 flex items-center justify-between border-t border-zinc-800">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://github.com/Ved-S-N.png" alt="Ved" />
              <AvatarFallback>VS</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">Written by CA Monk</p>
              <p className="text-xs text-zinc-400">Finance Blog Team</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-400">
            <button className="hover:text-white">
              <i className="fa-solid fa-thumbs-up"></i>
            </button>

            <button className="hover:text-white">
              <i className="fa-solid fa-message text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
