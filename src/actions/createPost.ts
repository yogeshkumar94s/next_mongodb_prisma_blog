"use server"

import * as z from "zod"
import { createPostSchema } from "@/lib/schema"
import { db } from "@/lib/database";

export const createPost = async (values: z.infer<typeof createPostSchema>) => {
    const validatedFields = createPostSchema.safeParse(values)

    if (!validatedFields.success) {
        return {error: "Something went wrong!"}
    }

    try {
        const post = await db.post.create({
            data: validatedFields.data,
        })
        
        return {success: "Post submitted successfully!"}
    } catch (error) {
        console.error(error, "Failed to create post!")
    }
};