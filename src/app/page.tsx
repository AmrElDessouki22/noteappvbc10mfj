'use client';

import { useEffect, useState } from 'react';
import NoteList from '../components/features/NoteList';
import { useNotes } from '../contexts/NotesContext';

export default function HomePage() {
  const { notes, fetchNotes } = useNotes();

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Your Notes</h1>
      <NoteList notes={notes} />
    </div>
  );
}
