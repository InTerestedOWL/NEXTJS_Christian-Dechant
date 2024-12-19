'use server';
export async function requestVideos() {
  const cid = process.env.YOUTUBE_CHANNELID;
  const apiKey = process.env.YOUTUBE_API_KEY;
  const reqURL = `https://www.googleapis.com/youtube/v3/search?key=${ apiKey }&part=snippet&channelId=${ cid }&type=video&maxResults=3&order=date`;

  const response = await fetch(reqURL);

  // Ensure the response is valid
  if (!response.ok) {
    throw new Error(`Failed to fetch videos: ${response.statusText}`);
  }

  // Parse the response to JSON
  const data = await response.json();

  return data; // Return serialized data
}