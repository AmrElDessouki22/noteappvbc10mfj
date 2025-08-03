'use client';

import { Note } from '../../types';

interface NoteListProps {
  notes: Note[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id} className="border p-2 mt-2 rounded">
          <h2 className="font-bold">{note.title}</h2>
          <p>{note.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
