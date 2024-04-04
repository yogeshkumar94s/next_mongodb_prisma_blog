"use client";

// import { addBlogPost } from "@/actions";
import { FormEvent } from "react";

interface BlogPostFormData {
  title: string;
  imageUrl: string;
  content: string;
  category: string;
  tags: string;
}

const AddBlogPostForm: React.FC = () => {
  // const addBlogPostHandler = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   const formData = new FormData(form);

  //   const typedFormData: BlogPostFormData = {
  //     title: formData.get("title") as string,
  //     imageUrl: formData.get("imageUrl") as string,
  //     content: formData.get("content") as string,
  //     category: formData.get("category") as string,
  //     tags: formData.get("tags") as string,
  //   };

  //   await addBlogPost(typedFormData);
  // };

  return (
    <form className='space-y-10 max-w-xl mx-auto'>
      <div>
        <label
          htmlFor='title'
          className='block border-b-2 text-md font-medium text-gray-700'
        >
          Title
        </label>
        <input
          type='text'
          placeholder='Title'
          name='title'
          id='title'
          required
          className='mt-5 p-3 block w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-100 focus:ring-indigo-100 sm:text-sm'
        />
      </div>
      <div>
        <label
          htmlFor='imageUrl'
          className='block border-b-2 text-sm font-medium text-gray-700'
        >
          Image URL
        </label>
        <input
          type='text'
          name='imageUrl'
          placeholder='imageUrl'
          id='imageUrl'
          className='mt-5 p-3 block w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-100 focus:ring-indigo-100 sm:text-sm'
        />
      </div>
      <div>
        <label
          htmlFor='content'
          className='block border-b-2 text-sm font-medium text-gray-700'
        >
          Content
        </label>
        <textarea
          name='content'
          id='content'
          required
          rows={10}
          className='mt-5 p-3 block w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-100 focus:ring-indigo-100 sm:text-sm'
        />
      </div>
      <div>
        <label
          htmlFor='category'
          className='block border-b-2 text-sm font-medium text-gray-700'
        >
          Category
        </label>
        <input
          type='text'
          name='category'
          placeholder='category'
          id='category'
          className='mt-5 p-3 block w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-100 focus:ring-indigo-100 sm:text-sm'
        />
      </div>
      <div>
        <label
          htmlFor='tags'
          className='block border-b-2 text-sm font-medium text-gray-700'
        >
          Tags
        </label>
        <input
          type='text'
          name='tags'
          id='tags'
          placeholder='Separate tags with commas'
          className='mt-5 p-3 block w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-100 focus:ring-indigo-100 sm:text-sm'
        />
      </div>
      <div className='flex justify-end'>
        <button
          type='submit'
          className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddBlogPostForm;
