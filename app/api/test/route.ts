import { NextResponse } from 'next/server';

export const runtime = 'edge';
export async function GET() {
  // get data from route https://catfact.ninja/fact and return response as json
  const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();
  return NextResponse.json(data);
}
