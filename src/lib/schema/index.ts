import * as z from 'zod';


const titleValidation = z.string().min(1, {message: "Title is required"});
const contentValidation = z.string().min(1, {message: "Content is required"});
const categoryValidation = z.string().min(1, {message: "Select category"});
const tagsValidation = z.string().min(1, { message: "Tags field cannot be empty." }).transform((tags) => tags.split(',').map(tag => tag.trim()));


export const createPostSchema = z.object({
  title: titleValidation,
  content: contentValidation,
  category: categoryValidation,
  tags: tagsValidation,
});

//--------------------------------------------------------------------------------------------------------

// Auth Schemas

// LoginFormSchema
const loginEmailValidation = z.string().email();
const loginPasswordValidation = z.string().min(1, {message: "Password is required"});

export const loginFormSchema = z.object({
  email: loginEmailValidation,
  password: loginPasswordValidation,
});

// SignupFormSchema
const signUpEmailValidation = z.string().email();
const signUpPasswordValidation = z.string().min(6, {message: "Password must be 6 characters"});
const signUpNameValidation = z.string().min(1, {message: "Username is required!"})

export const signUpFormSchema = z.object({
  email: signUpEmailValidation,
  name: signUpNameValidation,
  password: signUpPasswordValidation,
});


