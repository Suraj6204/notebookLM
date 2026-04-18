import { useState, useEffect } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import Loader from "./Loader";

interface Note {
  id: string;
  title: string;
  description: string;
}

const NotesContainer = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial API loading (1.5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const addNote = (title: string, description: string) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      description,
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const deleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      {/* Form is always visible */}
      <NoteForm onAddNote={addNote} />

      {/* Conditional rendering based on loading state */}
      {isLoading ? (
        <Loader />
      ) : (
        <NoteList notes={notes} onDeleteNote={deleteNote} />
      )}
    </div>
  );
};

export default NotesContainer;
