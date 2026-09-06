import { MetricSeries } from "@/data/observability";

export function MetricSparkline({ series }: { series: MetricSeries }) {
  const { label, unit, values } = series;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const w = 200;
  const h = 48;

  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");

  const latest = values[values.length - 1];

  return (
    <div className="rounded-lg border border-graphite-700 bg-graphite-900 p-4">
      <div className="flex items-baseline justify-between">
        <p className="text-xs uppercase text-graphite-500">{label}</p>
        <p className="status-live h-1.5 w-1.5 rounded-full bg-wire" />
      </div>
      <p className="mt-1 text-2xl font-semibold text-graphite-50">
        {latest}
        <span className="ml-1 text-sm font-normal text-graphite-500">{unit}</span>
      </p>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 w-full" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="text-wire"
        />
      </svg>
      <p className="mt-1 text-[10px] text-graphite-600">Sample data for demonstration</p>
    </div>
  );
}
