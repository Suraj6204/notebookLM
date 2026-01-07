const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
      <div className="relative">
        {/* Animated notebook icon */}
        <div className="w-16 h-20 bg-card rounded-lg border-2 border-border relative overflow-hidden">
          <div className="absolute top-2 left-2 right-2 space-y-2">
            <div className="h-2 loader-pulse rounded" />
            <div className="h-2 loader-pulse rounded w-3/4" style={{ animationDelay: '0.2s' }} />
            <div className="h-2 loader-pulse rounded w-1/2" style={{ animationDelay: '0.4s' }} />
          </div>
          {/* Spine decoration */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20" />
        </div>
        
        {/* Floating dots animation */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
      
      <p className="mt-10 text-muted-foreground font-mono text-sm">Loading your notes...</p>
    </div>
  );
};

export default Loader;
