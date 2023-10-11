export const useCdn = false;

export const projectId = checkValue(
  process.env.REACT_APP_SANITY_PROJECT_ID,
  "REACT_APP_SANITY_PROJECT_ID"
);

export const dataset = checkValue(
  process.env.REACT_APP_SANITY_DATASET,
  "REACT_APP_SANITY_DATASET"
);

export const token = checkValue(
  process.env.REACT_APP_SANITY_ACCESS_TOKEN,
  "REACT_APP_SANITY_ACCESS_TOKEN"
);

// Add Formspree URL
export const formspreeUrl = checkValue(
  process.env.REACT_APP_FORMSPREE_URL,
  "REACT_APP_FORMSPREE_URL"
);

export const apiVersion =
  process.env.REACT_APP_SANITY_API_VERSION || "2023-10-07";

// Validate env variables
function checkValue(value, errorMsg) {
  if (value === undefined) {
    throw new Error(`Missing Environment Variable: ${errorMsg}`);
  }
  return value;
}
