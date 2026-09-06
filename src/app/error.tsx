"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm text-alert">Status: 500</p>
      <h1 className="mt-3 text-3xl font-semibold text-graphite-50">
        Deployment health check failed.
      </h1>
      <p className="mt-2 text-graphite-400">
        Something went wrong rendering this page.
      </p>
      <button
        onClick={reset}
        className="focus-ring mt-8 rounded-md bg-signal px-5 py-2.5 text-sm font-medium text-graphite-950 hover:opacity-90"
      >
        Retry
      </button>
    </div>
  );
}
