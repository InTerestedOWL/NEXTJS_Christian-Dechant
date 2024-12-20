'use server';
import { NextResponse } from "next/server";

export async function GET() {
  const cid = process.env.YOUTUBE_CHANNELID;
  const apiKey = process.env.YOUTUBE_API_KEY;

  // Konstruiere die URL für die Anfrage
  const reqURL = `https://www.googleapis.com/youtube/v3/search?key=${ apiKey }&part=snippet&channelId=${ cid }&type=video&maxResults=3&order=date`;

  try {
    const response = await fetch(reqURL);

    if ( !response.ok ) {
      // Rückgabe einer Fehlermeldung als JSON mit Status 500
      return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }

    const data = await response.json();

    // Rückgabe der Daten als JSON mit Status 200
    return NextResponse.json(data, { status: 200 });
  } catch ( error ) {
    // Fehlerbehandlung
    console.error('Error fetching YouTube data:', error);
    return NextResponse.json({ message: 'Server error', error: error }, { status: 500 });
  }
}
