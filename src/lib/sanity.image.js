import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "../lib/sanity.api";

const imageBuilder = imageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "production",
});

export function urlFor(source) {
  return imageBuilder.image(source).auto("format").fit("max");
}