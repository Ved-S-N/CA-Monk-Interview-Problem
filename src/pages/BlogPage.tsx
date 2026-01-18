// import { useState } from "react";
// import Layout from "../components/Layout";
// import BlogList from "../components/BlogList";
// import BlogDetail from "../components/BlogDetail";
// import BlogForm from "../components/BlogForm";

// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";

// export default function BlogPage() {
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Layout
//         onCreateClick={() => setOpen(true)}
//         left={<BlogList selectedId={selectedId} onSelect={setSelectedId} />}
//         right={<BlogDetail blogId={selectedId} />}
//       />

//       {/* Modal */}
//       {open && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           {/* Backdrop */}
//           <div
//             className="absolute inset-0 bg-black/40"
//             onClick={() => setOpen(false)}
//           />

//           {/* Modal box */}
//           <div className="relative w-[95%] max-w-xl rounded-2xl bg-white shadow-xl p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-xl font-bold">Create Blog</h2>
//               <button
//                 onClick={() => setOpen(false)}
//                 className="text-zinc-500 hover:text-black text-xl"
//               >
//                 ✕
//               </button>
//             </div>

//             <BlogForm onSuccess={() => setOpen(false)} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
import { useState } from "react";
import Layout from "../components/Layout";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";
import BlogForm from "../components/BlogForm";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet";

export default function BlogPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Layout
        onCreateClick={() => setOpen(true)}
        left={<BlogList selectedId={selectedId} onSelect={setSelectedId} />}
        right={<BlogDetail blogId={selectedId} />}
      />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-lg overflow-y-auto bg-[rgba(246,246,248,1)]"
        >
          <SheetHeader>
            <SheetTitle>Share Your Experience</SheetTitle>
          </SheetHeader>

          <div className="mt-6">
            <BlogForm onSuccess={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
