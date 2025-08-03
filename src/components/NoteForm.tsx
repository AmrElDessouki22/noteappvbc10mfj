'use client';

import { useState } from 'react';
import { useNotes } from '../context/NotesContext';

export default function NoteForm() {
  const [note, setNote] = useState('');
  const { addNote } = useNotes();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      addNote(note);
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        aria-label="New Note"
        placeholder="Add a new note"
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
}