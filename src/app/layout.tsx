import '../styles/globals.css';
import { NotesProvider } from '../context/NotesContext';

export const metadata = {
  title: 'My Notes App',
  description: 'A simple note-taking app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          {children}
        </NotesProvider>
      </body>
    </html>
  );
}