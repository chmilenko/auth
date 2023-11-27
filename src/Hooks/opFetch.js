const url = process.env.REACT_APP_API_URL;

export const opFetch = (request, options) => {
  const headers = new Headers();
  headers.set("Accept", "application/json");
//   headers.set("Content-Type", "application/json");
  const proxiedURL = `${url}${request}`;
  return fetch(proxiedURL, {
    headers,
    ...options,
  });
};