import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blogs.api";
import type { CreateBlogPayload } from "../types/blog";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export default function BlogForm({ onSuccess }: { onSuccess?: () => void }) {
  const qc = useQueryClient();

  const [title, setTitle] = useState("");
  const [categoryText, setCategoryText] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["blogs"] });
      onSuccess?.();

      setTitle("");
      setCategoryText("");
      setDescription("");
      setCoverImage("");
      setContent("");
    },
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const payload: CreateBlogPayload = {
      title,
      category: categoryText
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      description,
      coverImage,
      content,
      date: new Date().toISOString(),
    };

    mutation.mutate(payload);
  }

  return (
    <Card className="border-zinc-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Create Blog</CardTitle>
        <p className="text-sm text-zinc-500">
          Fill the details to publish a new article.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={onSubmit} className="space-y-5">
          {/* Title */}
          <div className="space-y-2">
            <Label className="text-zinc-700">Title</Label>
            <Input
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="rounded-xl"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label className="text-zinc-700">Category</Label>
            <Input
              placeholder="FINANCE, TECH"
              value={categoryText}
              onChange={(e) => setCategoryText(e.target.value)}
              className="rounded-xl"
            />
            <p className="text-xs text-zinc-500">
              Separate multiple categories with commas.
            </p>
          </div>

          {/* Cover Image */}
          <div className="space-y-2">
            <Label className="text-zinc-700">Cover Image URL</Label>
            <Input
              placeholder="https://images..."
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              required
              className="rounded-xl"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label className="text-zinc-700">Short Description</Label>
            <Textarea
              placeholder="Write a short summary..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="rounded-xl min-h-[90px]"
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <Label className="text-zinc-700">Content</Label>
            <Textarea
              placeholder="Write full blog content (plain text)..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="rounded-xl min-h-[150px]"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={mutation.isPending}
            className="w-full rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold"
          >
            {mutation.isPending ? "Creating..." : "Create Blog"}
          </Button>

          {mutation.isError && (
            <p className="text-sm text-red-500">
              Failed to create blog. Try again.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
