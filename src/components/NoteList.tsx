import NoteListClient from './features/NoteList';
import { useNotes } from '../context/NotesContext';

export default function NoteList() {
  const { notes } = useNotes();

  if (!notes.length) {
    return <p>No notes available. Add some!</p>;
  }

  return <NoteListClient notes={notes} />;
}
