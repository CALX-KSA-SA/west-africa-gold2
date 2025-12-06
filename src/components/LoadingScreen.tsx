import { Loader2 } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-xl" />
          <Loader2 className="h-16 w-16 animate-spin text-primary" />
        </div>
        <h2 className="text-2xl font-playfair font-bold text-primary animate-pulse">
          جاري التحميل...
        </h2>
      </div>
    </div>
  );
};

export default LoadingScreen;
