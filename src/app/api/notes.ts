import { NextResponse } from 'next/server';

let notes = [];

export async function GET() {
  return NextResponse.json(notes);
}

export async function POST(request) {
  const newNote = await request.json();
  notes.push(newNote);
  return NextResponse.json(newNote);
}