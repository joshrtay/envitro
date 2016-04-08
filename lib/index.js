/**
 * Modules
 */

const foreach = require('@f/foreach')
const isUndefined = require('@f/is-undefined')
const fs = require('fs')
const path = require('path')

/**
 * Expose
 */

module.exports = pkgEnv

/**
 * envitro
 */

function pkgEnv (dir) {
  dir = dir || process.cwd()
  const pkgJSON = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8'))
  const ENV = process.env.NODE_ENV || 'development'
  const environment = pkgJSON.environment
  if (environment[ENV]) load(environment[ENV])
  if (environment.base) load(environment.base)
}

function load (conf) {
  foreach(function (val, key) {
    if (isUndefined(process.env[key])) {
      process.env[key] = val
    }
  }, conf)
}
