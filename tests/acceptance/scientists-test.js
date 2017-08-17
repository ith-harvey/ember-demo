import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | scientists');

test('should add new scientist', function(assert) {
  visit('/scientists');
  fillIn('input.name', 'Test Name');
  click('button.submit');
  andThen(() => assert.equal(find('ul.collection li:last').text(), 'Test Name'));
});
