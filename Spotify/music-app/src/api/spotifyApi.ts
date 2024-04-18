export const fetchSpotifyApi = async (
  url: string,
  method: string,
  body: string,
  contentType: string,
  token: string
): Promise<Response> => {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": contentType,
      Authorization: token,
    },
    body: body,
  });

  if (!response.ok) {
    throw new Error("Error in fetching data from Spotify API");
  }

  return response.json();
};
