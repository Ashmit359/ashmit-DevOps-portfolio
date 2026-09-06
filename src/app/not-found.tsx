import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm text-alert">Status: 404</p>
      <h1 className="mt-3 text-3xl font-semibold text-graphite-50 sm:text-4xl">
        This route failed the deployment.
      </h1>
      <pre className="mt-6 w-full overflow-x-auto rounded-lg border border-graphite-700 bg-graphite-950 p-4 text-left font-mono text-xs text-graphite-400">
{`$ kubectl get route ${"/*missing*/"}
Error from server (NotFound): routes.networking "requested-path" not found`}
      </pre>
      <Link
        href="/"
        className="focus-ring mt-8 rounded-md bg-signal px-5 py-2.5 text-sm font-medium text-graphite-950 hover:opacity-90"
      >
        Roll back to Home
      </Link>
    </div>
  );
}
