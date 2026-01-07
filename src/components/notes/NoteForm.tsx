import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

interface NoteFormProps {
  onAddNote: (title: string, description: string) => void;
}

const NoteForm = ({ onAddNote }: NoteFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = title.trim().length > 0;

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    
    // Clear error when user starts typing valid input
    if (value.trim().length > 0 && error) {
      setError("");
    }
  };

  const handleTitleBlur = () => {
    setTouched(true);
    if (!title.trim()) {
      setError("Title is required");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError("Title is required");
      setTouched(true);
      return;
    }

    onAddNote(title.trim(), description.trim());
    setTitle("");
    setDescription("");
    setError("");
    setTouched(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 note-card">
      <h2 className="font-mono text-lg font-semibold text-foreground mb-5">
        Create New Note
      </h2>
      
      <div className="space-y-4">
        {/* Title Field */}
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium text-foreground">
            Title <span className="text-primary">*</span>
          </label>
          <Input
            id="title"
            type="text"
            placeholder="Enter note title..."
            value={title}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            className={`transition-colors ${
              error && touched 
                ? "border-destructive focus-visible:ring-destructive" 
                : "focus-visible:ring-primary"
            }`}
          />
          {error && touched && (
            <p className="text-sm text-destructive animate-fade-in flex items-center gap-1.5">
              <span className="w-1 h-1 bg-destructive rounded-full" />
              {error}
            </p>
          )}
        </div>

        {/* Description Field */}
        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium text-foreground">
            Description <span className="text-muted-foreground">(optional)</span>
          </label>
          <Textarea
            id="description"
            placeholder="Add a description for your note..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="resize-none focus-visible:ring-primary"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!isValid}
          className="w-full font-mono font-medium transition-all"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Note
        </Button>
      </div>
    </form>
  );
};

export default NoteForm;
