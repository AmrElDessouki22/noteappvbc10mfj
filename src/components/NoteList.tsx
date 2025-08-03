import { useNotes } from '../context/NotesContext';

export default function NoteList() {
  const { notes } = useNotes();

  if (!notes.length) {
    return <p>No notes available. Add some!</p>;
  }

  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
}