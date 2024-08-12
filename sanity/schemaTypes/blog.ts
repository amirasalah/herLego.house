// sanity schema types for blog

import { defineType } from "sanity";

export const blogType = defineType({
    name: "blog",
    type: "document",
    fields: [
        {name: "title", type: "string"},
        {name: "body", type: "text"},
        {name: "publishedAt", type: "datetime"},
        {name: 'tags', type: 'array', of: [{
            type: 'string'}]},
        {name: 'image', type: 'image'}
    ]
})