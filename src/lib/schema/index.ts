import * as z from 'zod';

// Adjusted validation rules
const titleValidation = z.string().min(5, { message: "Title should be at least 5 characters." });
const contentValidation = z.string().min(500, { message: "At least 500 words should be there in a blog post." });
const categoryValidation = z.enum(["Technology", "Life", "Automobile"]);
const imageUrlValidation = z.string().url({ message: "Image URL must be a valid URL." });
const tagsValidation = z.string().min(1, { message: "Tags field cannot be empty." }).transform((tags) => tags.split(',').map(tag => tag.trim()));

// Complete blog post schema with all fields
export const blogPostSchema = z.object({
  title: titleValidation,
  content: contentValidation,
  category: categoryValidation,
  imageUrl: imageUrlValidation,
  tags: tagsValidation,
});

export type BlogPostFormData = z.infer<typeof blogPostSchema>;



// Auth Schemas
// LoginFormSchema
const loginEmailValidation = z.string().email();
const loginPasswordValidation = z.string();

export const loginFormSchema = z.object({
  email: loginEmailValidation,
  password: loginPasswordValidation,
});

// SignupFormSchema
