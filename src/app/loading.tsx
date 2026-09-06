export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[40vh] max-w-6xl items-center justify-center px-4">
      <div className="flex items-center gap-3 text-sm text-graphite-500">
        <span className="h-2 w-2 animate-pulse rounded-full bg-signal" />
        Loading…
      </div>
    </div>
  );
}
