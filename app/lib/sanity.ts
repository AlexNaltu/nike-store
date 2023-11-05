import { createClient } from "next-sanity";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = createClient({
  projectId: "js2kdff5",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});
