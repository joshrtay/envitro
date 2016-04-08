/**
 * Imports
 */

const test = require('tape')
const pkgEnv = require('../lib')

/**
 * Tests
 */

test('should load', (t) => {
  process.env.NODE_ENV = 'test'
  pkgEnv(__dirname)
  t.equal(process.env.foo, 'bar')
  t.equal(process.env.qux, 'woot')
  t.end()
})
