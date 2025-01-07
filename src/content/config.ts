import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: () => z.object({
        title: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()),
    })
})

export const collections = {
    blog: postsCollection,
};