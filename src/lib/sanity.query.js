import { groq } from "next-sanity";
import client from "../lib/sanity.client";

export async function getEvents() {
  return client.fetch(
    groq`*[_type == "event"]{
      _id,
      "Poster": Poster.asset->url,
      title,
      headline,
      price,
      location,
      date,
      description,
      bookingUrl
    }`
  );
}

getEvents()
  .then(events => console.log(events))
  .catch(err => console.error(err));


export async function getAbout() {
  return client.fetch(
    groq`*[_type == "about"]{
      _id,
      "image": image.asset->url,
      "aboutText": {
        "header": aboutText.header,
        "subHeader": aboutText.subHeader,
        "description": aboutText.description,
        "ctaButton": aboutText.ctaButton
      }
    }`
  );
}

getAbout()
  .then(about => console.log(about))
  .catch(err => console.error(err));

export async function getWork() {
  return client.fetch(
    groq`*[_type == "work"]{
      _id,
      heading,
      "imageCards": imageCards[] {
        "imageUrl": image.asset->url,
        overlayTitle,
        overlayDescription
      }
    }`
  );
}

getWork()
  .then(work => console.log(work))
  .catch(err => console.error(err));