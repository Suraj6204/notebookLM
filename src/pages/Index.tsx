import NotesContainer from "@/components/notes/NotesContainer";
import { BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-mono font-semibold text-foreground">
                NotebookLM
              </h1>
              <p className="text-sm text-muted-foreground">
                Your personal notes manager
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 py-8">
        <NotesContainer />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-auto">
        <div className="container max-w-4xl mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground font-mono">
            Built with React + Vite • Codetikki Assessment
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
