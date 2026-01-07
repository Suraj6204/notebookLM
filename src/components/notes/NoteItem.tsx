import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Note {
  id: string;
  title: string;
  description: string;
}

interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
}

const NoteItem = ({ note, onDelete }: NoteItemProps) => {
  return (
    <div className="note-card bg-card rounded-xl border border-border p-5 animate-slide-in">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="font-mono font-semibold text-foreground text-lg truncate">
            {note.title}
          </h4>
          
          {note.description && (
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
              {note.description}
            </p>
          )}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(note.id)}
          className="shrink-0 h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
          aria-label={`Delete note: ${note.title}`}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default NoteItem;
