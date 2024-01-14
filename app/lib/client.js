import { createClient } from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";

/*
export const client = SanityClient({
    projectId: '2zg2xk6v',
    dataset: 'production',
    apiVersion: '2023-08-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})*/


export const client = createClient({
    projectId: '2zg2xk6v',
    dataset: 'production',
    apiVersion: 'v2023-08-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  })



// Sanity gives you access urls to images are stored

/*const builder = imageUrlBuilder(client)

export const urlFor = (source) =>  builder.image(source);*/