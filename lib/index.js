/**
 * Modules
 */

const foreach = require('@f/foreach')
const isString = require('@f/is-string')
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
  if (dir && isString(dir)) {
    var pkgJSON = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8'))
  } else {
    var pkgJSON = dir
  }
  const ENV = process.env.NODE_ENV || 'development'
  const environment = pkgJSON.environment
  if (!environment) return
  if (environment[ENV]) load(environment[ENV])
  if (environment.base) load(environment.base)
}

function load (conf) {
  foreach(function (val, key) {
    if (!process.env[key]) {
      process.env[key] = val
    }
  }, conf)
}
