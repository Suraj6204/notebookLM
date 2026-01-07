import NoteItem from "./NoteItem";
import EmptyState from "./EmptyState";

interface Note {
  id: string;
  title: string;
  description: string;
}

interface NoteListProps {
  notes: Note[];
  onDeleteNote: (id: string) => void;
}

const NoteList = ({ notes, onDeleteNote }: NoteListProps) => {
  if (notes.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Your Notes
        </h3>
        <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-full font-mono">
          {notes.length} {notes.length === 1 ? 'note' : 'notes'}
        </span>
      </div>
      
      <div className="space-y-3">
        {notes.map((note, index) => (
          <div 
            key={note.id} 
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <NoteItem note={note} onDelete={onDeleteNote} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
