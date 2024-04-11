"use client";

import PostCardWrapper from "./PostCardWrapper";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import * as z from "zod";
import { createPostSchema } from "@/lib/schema";
import { useState, useTransition } from "react";
// import EditorJs from "@/components/blog/EditorJs";
import {
  Form,
  FormControl,
  FormMessage,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "../auth/FormError";
import FormSuccess from "../auth/FormSuccess";
import { createPost } from "@/actions/createPost";

const CreatePost = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof createPostSchema>>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      content: "",
      category: "",
      tags: [],
    },
  });

  const onSubmit = (values: z.infer<typeof createPostSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      createPost(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <PostCardWrapper cardLabel='Create a blog post'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-6'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Post Title'
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='content'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <textarea
                      rows={10}
                      {...field}
                      disabled={isPending}
                      className='w-full border border-gray-300'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='category'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='category'
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='tags'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Add tags here'
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            variant='secondary'
            size='lg'
            className='w-full'
            disabled={isPending}
          >
            Submit
          </Button>
        </form>
      </Form>
    </PostCardWrapper>
  );
};

export default CreatePost;
