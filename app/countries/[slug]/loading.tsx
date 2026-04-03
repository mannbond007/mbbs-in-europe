export default function Loading() {
  return (
    <div className="w-full animate-pulse">
      {/* Hero Skeleton */}
      <section className="relative pt-32 pb-20 bg-primary/5 min-h-[500px] flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="h-12 bg-muted/60 rounded-md w-3/4 max-w-2xl mb-6"></div>
          <div className="h-6 bg-muted/60 rounded-md w-full max-w-3xl mb-4"></div>
          <div className="h-6 bg-muted/60 rounded-md w-4/5 max-w-2xl"></div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="h-8 bg-muted/60 rounded-md w-64 mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-border p-6 rounded-2xl h-36 flex flex-col justify-center">
              <div className="h-6 bg-muted/60 rounded-md w-32 mb-4"></div>
              <div className="h-8 bg-muted/60 rounded-md w-48"></div>
            </div>
            <div className="bg-white border border-border p-6 rounded-2xl h-36 flex flex-col justify-center">
              <div className="h-6 bg-muted/60 rounded-md w-32 mb-4"></div>
              <div className="h-8 bg-muted/60 rounded-md w-48"></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="h-6 bg-muted/60 rounded-md w-full"></div>
            <div className="h-6 bg-muted/60 rounded-md w-11/12"></div>
            <div className="h-6 bg-muted/60 rounded-md w-5/6"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
