import { createClient } from "@sanity/client";
import { projectId, dataset, apiVersion, useCdn, token } from "./sanity.api";

const config = {
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
  ignoreBrowserTokenWarning: true,
};
const client = createClient(config);

export default client;