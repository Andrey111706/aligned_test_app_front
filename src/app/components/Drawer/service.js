import queryString from "query-string";
import {ITEM_TYPES, youtubeDomains} from "app/constants";

export const validateURL = (name, url, type) => {
  const errors = { name: "", url: "" };
  if (!name) {
    errors.name = "Name should not be empty.";
  }

  let urlInstance;
  try {
    urlInstance = new URL(url);
  } catch (e) {
    errors.url = "bad URL";
    return errors;
  }

  if (urlInstance.protocol !== "http:" && urlInstance.protocol !== "https:") {
    errors.url = "Bad Protocol";
    return errors;
  }

  if (
    type === ITEM_TYPES.youtube &&
    !youtubeDomains.includes(urlInstance.host)
  ) {
    errors.url = "Please provide youtube link";
  }

  return errors;
};

export const getYoutubeIDFromQuery = (url) => {
  const urlInstance = new URL(url);

  if (urlInstance.host === "youtu.be") {
    return urlInstance.pathname.slice(1);
  }

  return queryString.parse(urlInstance.search).v;
};
