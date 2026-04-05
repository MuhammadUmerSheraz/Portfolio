import type { DetailBarChartBlock, DetailTableBlock } from "@/content/site";

function barPercent(value: number, max: number) {
  if (max <= 0) return 0;
  return Math.min(100, Math.round((value / max) * 100));
}

export function WorkDetailVisuals({
  tables,
  charts,
}: {
  tables?: readonly DetailTableBlock[];
  charts?: readonly DetailBarChartBlock[];
}) {
  if (!tables?.length && !charts?.length) return null;

  return (
    <div className="mt-14 space-y-12 border-t border-line pt-14 dark:border-white/10">
      {tables?.map((table) => (
        <div key={table.title}>
          <h2 className="font-display text-lg font-semibold tracking-tight text-midnight dark:text-cream md:text-xl">
            {table.title}
          </h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-line shadow-soft dark:border-white/10 dark:shadow-soft-dark">
            <table className="w-full min-w-[280px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-pearl/70 dark:border-white/10 dark:bg-white/[0.06]">
                  {table.columns.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="px-4 py-3 font-semibold text-midnight dark:text-cream"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className="border-b border-line/80 last:border-0 dark:border-white/[0.08]"
                  >
                    {row.map((cell, ci) =>
                      ci === 0 ? (
                        <th
                          key={ci}
                          scope="row"
                          className="whitespace-nowrap px-4 py-3 font-medium text-midnight dark:text-cream"
                        >
                          {cell}
                        </th>
                      ) : (
                        <td
                          key={ci}
                          className="px-4 py-3 text-midnight-muted dark:text-cream/75"
                        >
                          {cell}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {charts?.map((chart) => (
        <div key={chart.title}>
          <h2 className="font-display text-lg font-semibold tracking-tight text-midnight dark:text-cream md:text-xl">
            {chart.title}
          </h2>
          {chart.caption ? (
            <p className="mt-2 text-sm text-midnight-muted dark:text-cream/60">{chart.caption}</p>
          ) : null}
          <div className="mt-6 space-y-5" role="group" aria-label={chart.title}>
            {chart.items.map((item, i) => {
              const max = item.max ?? 100;
              const p = barPercent(item.value, max);
              const unit = chart.unit ?? "";
              const valueLabel = unit ? `${item.value} ${unit}` : String(item.value);
              return (
                <div key={item.label}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
                    <span className="font-medium text-midnight dark:text-cream">{item.label}</span>
                    <span className="tabular-nums text-midnight-muted dark:text-cream/65">{valueLabel}</span>
                  </div>
                  <div
                    className="mt-2 h-2.5 overflow-hidden rounded-full bg-line dark:bg-white/10"
                    aria-hidden
                  >
                    <div
                      className={`h-full rounded-full transition-[width] duration-500 ${
                        i % 2 === 0
                          ? "bg-sea dark:bg-accent"
                          : "bg-accent-dark/90 dark:bg-sea/85"
                      }`}
                      style={{ width: `${p}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
