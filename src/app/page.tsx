import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

export default function HomePage() {
  return (
    <main>
      <h1>My Notes</h1>
      <NoteForm />
      <NoteList />
    </main>
  );
}