'use client';

import { createContext, useContext, useState } from 'react';
import { Note } from '../types';

interface NotesContextType {
  notes: Note[];
  addNote: (newNote: Note) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (newNote: Note) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
