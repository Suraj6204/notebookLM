import { FileText } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 animate-fade-in">
      <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mb-6">
        <FileText className="w-10 h-10 text-primary" />
      </div>
      
      <h3 className="text-xl font-mono font-semibold text-foreground mb-2">
        No notes yet
      </h3>
      
      <p className="text-muted-foreground text-center max-w-sm">
        Your notebook is empty. Add your first note using the form above to get started.
      </p>
      
      <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <span className="w-2 h-2 bg-primary/50 rounded-full" />
        <span>Tip: A title is required, description is optional</span>
      </div>
    </div>
  );
};

export default EmptyState;
