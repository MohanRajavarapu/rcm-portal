import {
  comparisonRows,
  engagementModels,
  type EngagementModel,
} from "@/content/staffing";

function cell(model: EngagementModel, key: (typeof comparisonRows)[number]["key"]) {
  return model[key];
}

export function EngagementComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--border-subtle)] bg-surface-2">
      <table className="min-w-[56rem] w-full border-collapse text-left text-sm">
        <caption className="sr-only">
          Comparison of staff augmentation, contract-to-hire, EOR, and direct hire — including who is the legal employer of record
        </caption>
        <thead>
          <tr className="border-b border-[var(--border-default)] bg-surface-3">
            <th scope="col" className="sticky left-0 bg-surface-3 px-4 py-3 font-semibold text-fg">
              Question
            </th>
            {engagementModels.map((model) => (
              <th key={model.slug} scope="col" className="px-4 py-3 font-semibold text-fg">
                {model.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.key} className="border-b border-[var(--border-subtle)] last:border-0">
              <th
                scope="row"
                className="sticky left-0 bg-surface-2 px-4 py-3 align-top font-medium text-fg"
              >
                {row.label}
              </th>
              {engagementModels.map((model) => (
                <td key={model.slug} className="px-4 py-3 align-top text-fg-muted">
                  {cell(model, row.key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
