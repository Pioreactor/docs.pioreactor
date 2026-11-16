import {test} from 'node:test';
import assert from 'node:assert/strict';
import {withAssignmentFallback} from './assignmentFallback.mjs';

for (const query of ['max_volume_to_stop=18.0', ' max_volume_to_stop = 18.0 ', 'ir_led_intensity=80']) {
  test(`finds the setting in ${query}`, () => {
    const key = query.split('=')[0].trim();
    const calls = [];
    withAssignmentFallback((input, cb) => {
      calls.push(input);
      cb(input === key ? ['explanation'] : []);
    })(query, results => assert.deepEqual(results, ['explanation']));
    assert.deepEqual(calls, [query, key]);
  });
}
test('preserves original matches and ordinary queries', () => {
  for (const query of ['key=1', 'stirring speed', 'key', 'a=1\nb=2']) {
    const calls = [];
    withAssignmentFallback((input, cb) => {
      calls.push(input);
      cb(['original']);
    })(query, results => assert.deepEqual(results, ['original']));
    assert.deepEqual(calls, [query]);
  }
});
test('does not rewrite unsuccessful ordinary or multiline searches', () => {
  for (const query of ['stirring speed', 'a=1\nb=2', '']) {
    const calls = [];
    withAssignmentFallback((input, cb) => { calls.push(input); cb([]); })(query, () => {});
    assert.deepEqual(calls, [query]);
  }
});
