import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isLocalReview, publishableMetrics, type Metric } from '../lib/publication.ts';

const valid: Metric = {
  id: 'example', value: '12', label: 'gross revenue', date: '2026-09-21',
  definition: 'Example test fixture only', source: '/approved-evidence.webp',
  verified: true, publicApproved: true, reportingPeriod: '2026-09-01 to 2026-09-21',
  currency: 'USD', kind: 'money',
};

test('money cannot be published without a confirmed currency or period', () => {
  assert.equal(publishableMetrics([{ ...valid, currency: undefined }]).length, 0);
  assert.equal(publishableMetrics([{ ...valid, reportingPeriod: undefined }]).length, 0);
});
test('verification, public approval, date, definition and source are all required', () => {
  for (const patch of [{ verified: false }, { publicApproved: false }, { source: '' }, { date: '' }, { definition: '' }]) {
    assert.equal(publishableMetrics([{ ...valid, ...patch }]).length, 0);
  }
});
test('approved records expose only public presentation fields', () => {
  const [published] = publishableMetrics([valid]);
  assert.equal(published.value, '12');
  assert.equal('verified' in published, false);
  assert.equal('publicApproved' in published, false);
  assert.equal('id' in published, false);
});
test('Robux balances do not need a fiat currency and retain their definition', () => {
  const [published] = publishableMetrics([{ ...valid, kind: 'balance', currency: undefined, definition: 'Pending Robux snapshot, not lifetime earnings' }]);
  assert.equal(published.definition, 'Pending Robux snapshot, not lifetime earnings');
});
test('review notes cannot be enabled in production by an environment flag', () => {
  for (const flag of ['1', '0', undefined]) assert.equal(isLocalReview('production', flag), false);
  assert.equal(isLocalReview('development', undefined), true);
  assert.equal(isLocalReview('development', '1'), true);
  assert.equal(isLocalReview('development', '0'), false);
});
