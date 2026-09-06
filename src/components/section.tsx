import { cn } from "@/lib/utils";

export function Section({
  title,
  description,
  children,
  className,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 py-14 sm:px-6", className)}>
      {title && (
        <h2 className="text-2xl font-semibold text-graphite-50 sm:text-3xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-2 max-w-2xl text-graphite-400">{description}</p>
      )}
      <div className={title || description ? "mt-8" : ""}>{children}</div>
    </section>
  );
}
