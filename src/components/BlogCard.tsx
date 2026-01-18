// import type { Blog } from "../types/blog";

// type Props = {
//   blog: Blog;
//   active: boolean;
//   onClick: () => void;
// };

// export default function BlogCard({ blog, active, onClick }: Props) {
//   return (
//     <button
//       onClick={onClick}
//       className={`w-full text-left rounded-xl border p-4 transition
//         ${active ? "border-blue-500/60 bg-zinc-900" : "border-zinc-800 bg-zinc-950"}
//         hover:bg-zinc-900`}
//     >
//       <div className="flex items-center gap-2 flex-wrap mb-2">
//         {blog.category?.map((c, idx) => (
//           <span
//             key={idx}
//             className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-200"
//           >
//             {c}
//           </span>
//         ))}

//         <span className="ml-auto text-xs text-zinc-400">
//           {new Date(blog.date).toLocaleDateString()}
//         </span>
//       </div>

//       <h3 className="font-semibold text-base">{blog.title}</h3>
//       <p className="text-sm text-zinc-400 line-clamp-2">{blog.description}</p>
//     </button>
//   );
// }
// import type { Blog } from "../types/blog";

// type Props = {
//   blog: Blog;
//   active: boolean;
//   onClick: () => void;
// };

// export default function BlogCard({ blog, active, onClick }: Props) {
//   return (
//     <button
//       onClick={onClick}
//       className={`w-full text-left rounded-2xl border p-4 transition
//         ${active ? "border-blue-500/60 bg-zinc-900" : "border-zinc-800 bg-zinc-950"}
//         hover:bg-zinc-900`}
//     >
//       <div className="flex items-center justify-between mb-2">
//         <span className="text-xs font-semibold tracking-wide text-blue-400 uppercase">
//           {blog.category?.[0] ?? "BLOG"}
//         </span>

//         <span className="text-xs text-zinc-500">
//           {new Date(blog.date).toLocaleDateString()}
//         </span>
//       </div>

//       <h3 className="font-bold text-base mb-1">{blog.title}</h3>

//       <p className="text-sm text-zinc-400 line-clamp-2">{blog.description}</p>

//       {active && (
//         <div className="mt-3">
//           <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
//             Featured
//           </span>
//         </div>
//       )}
//     </button>
//   );
// }
import type { Blog } from "../types/blog";

type Props = {
  blog: Blog;
  active: boolean;
  onClick: () => void;
};

export default function BlogCard({ blog, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-2xl bg-white p-4 transition border border-zinc-200
    ${active ? "border-l-4 border-l-blue-600 shadow-sm" : "border-l-4 border-l-transparent hover:bg-zinc-50 hover:border-zinc-300"}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase text-blue-600">
          {blog.category?.[0] ?? "BLOG"}
        </span>

        <span className="text-xs text-zinc-500">
          {new Date(blog.date).toLocaleDateString()}
        </span>
      </div>

      <h3 className="font-semibold text-zinc-900">{blog.title}</h3>
      <p className="text-sm text-zinc-600 mt-1 line-clamp-2">
        {blog.description}
      </p>

      {active && (
        <div className="mt-3">
          <span className="text-[11px] px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            Featured
          </span>
        </div>
      )}
    </button>
  );
}
