'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Note } from '../types';

interface NotesContextType {
  notes: Note[];
  fetchNotes: () => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = () => {
    // Simulate fetching data
    setNotes([
      { id: '1', title: 'First Note', content: 'Content of the first note.' },
      { id: '2', title: 'Second Note', content: 'Content of the second note.' }
    ]);
  };

  return (
    <NotesContext.Provider value={{ notes, fetchNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
