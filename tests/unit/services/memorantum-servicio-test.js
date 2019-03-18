import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | memorantum-servicio', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:memorantum-servicio');
    assert.ok(service);
  });
});
