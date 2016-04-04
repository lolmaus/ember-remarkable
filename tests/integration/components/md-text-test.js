import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('md-text', 'Integration | Component | md text', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{md-text text="# An awesome h1!"}}`);
  assert.equal(this.$().text().trim(), 'An awesome h1!');
});

test('it parses markdown', function(assert) {
  this.render(hbs`{{md-text text="# An awesome h1!"}}`);
  assert.equal(this.$('h1').text().trim(), 'An awesome h1!');
});

test('it correctly creates a link from a url', function(assert) {
  this.render(hbs`{{md-text text='# Markdown is fun www.google.com' linkify=true}}`);
  assert.equal(this.$().find('a').length, 1);
});

test('it does not render html when the html option is set to false', function(assert) {
  this.render(hbs`{{md-text text="<abbr>Cool</abbr>"}}`);
  assert.equal(this.$().find('abbr').length, 0);
});

test('it renders html when the html option is set to true', function(assert) {
  this.render(hbs`{{md-text text="<abbr>Cool</abbr>" html=true}}`);
  assert.equal(this.$().find('abbr').length, 1);
});
