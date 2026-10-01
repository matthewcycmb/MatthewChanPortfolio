export type Metric = {
  id: string;
  value: string;
  label: string;
  date: string;
  definition: string;
  source: string;
  verified: boolean;
  publicApproved: boolean;
  reportingPeriod?: string;
  currency?: string;
  kind: 'count' | 'money' | 'balance';
};

export function publishableMetrics(metrics: Metric[]) {
  return metrics.filter((metric) => metric.verified && metric.publicApproved
    && Boolean(metric.date && metric.definition && metric.source && metric.reportingPeriod)
    && (metric.kind !== 'money' || Boolean(metric.currency)))
    .map(({ value, label, date, definition, source, reportingPeriod, currency }) =>
      ({ value, label, date, definition, source, reportingPeriod, currency }));
}

export function isLocalReview(environment: string | undefined, flag: string | undefined) {
  return environment === 'development' && flag !== '0';
}
