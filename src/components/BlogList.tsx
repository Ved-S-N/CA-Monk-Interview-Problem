// import { useQuery } from "@tanstack/react-query";
// import { fetchBlogs } from "../api/blogs.api";
// import BlogCard from "./BlogCard";

// type Props = {
//   selectedId: number | null;
//   onSelect: (id: number) => void;
// };

// export default function BlogList({ selectedId, onSelect }: Props) {
//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ["blogs"],
//     queryFn: fetchBlogs,
//   });

//   if (isLoading) {
//     return (
//       <div className="space-y-3">
//         <div className="h-20 rounded-xl bg-zinc-900 animate-pulse" />
//         <div className="h-20 rounded-xl bg-zinc-900 animate-pulse" />
//         <div className="h-20 rounded-xl bg-zinc-900 animate-pulse" />
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-sm">
//         {(error as Error).message}
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-3">
//       {data?.map((b) => (
//         <BlogCard
//           key={b.id}
//           blog={b}
//           active={selectedId === b.id}
//           onClick={() => onSelect(b.id)}
//         />
//       ))}
//     </div>
//   );
// }
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../api/blogs.api";
import BlogCard from "./BlogCard";

type Props = {
  selectedId: number | null;
  onSelect: (id: number) => void;
};

export default function BlogList({ selectedId, onSelect }: Props) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Latest Articles</h2>

      {isLoading && (
        <div className="space-y-3">
          <div className="h-24 rounded-xl bg-zinc-900 animate-pulse" />
          <div className="h-24 rounded-xl bg-zinc-900 animate-pulse" />
          <div className="h-24 rounded-xl bg-zinc-900 animate-pulse" />
        </div>
      )}

      {isError && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-sm">
          {(error as Error).message}
        </div>
      )}

      <div className="space-y-3">
        {data?.map((b) => (
          <BlogCard
            key={b.id}
            blog={b}
            active={selectedId === b.id}
            onClick={() => onSelect(b.id)}
          />
        ))}
      </div>
    </div>
  );
}
