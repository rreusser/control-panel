var test = require('tape')
var control = require('./index')

test('construction', function (t) {
  control([{type: 'range', label: 'range label', min: 0, max: 100, initial: 20}])
  t.equal(typeof document.querySelector('#input-panel'), 'object')
  t.end()
})

test('range', function (t) {
  control([{type: 'range', label: 'label', min: 0, max: 100, initial: 20}])
  t.equal(typeof document.querySelector('.input-panel-range'), 'object')
  t.equal(typeof document.querySelector('#input-panel-label'), 'object')
  t.end()
})

test('color', function (t) {
  control([{type: 'color', label: 'label', min: 0, max: 100, initial: 20}])
  t.equal(typeof document.querySelector('.input-panel-color'), 'object')
  t.equal(typeof document.querySelector('#input-panel-label'), 'object')
  t.end()
})

test('text', function (t) {
  control([{type: 'text', label: 'label', min: 0, max: 100, initial: 20}])
  t.equal(typeof document.querySelector('.input-panel-text'), 'object')
  t.equal(typeof document.querySelector('#input-panel-label'), 'object')
  t.end()
})

test('checkbox', function (t) {
  control([{type: 'checkbox', label: 'label', min: 0, max: 100, initial: 20}])
  t.equal(typeof document.querySelector('.input-panel-checkbox'), 'object')
  t.equal(typeof document.querySelector('#input-panel-label'), 'object')
  t.end()
})
