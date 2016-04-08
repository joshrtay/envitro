
# envitro

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Load environment from package.json.

I'm pretty sure this is the best name ever.

## Installation

    $ npm install envitro

## Usage

package.json
```js
{
    "environment": {
      "production": {
        "API": "api.weo.io"
      },
      "development": {
        "API": "localhost:3000"
      }
    }
}
```

NODE_ENV="development"
```js
require('envitro')()

process.env.API // => 'localhost:3000'
```

## API

### envitro(dir)

- `dir` - director to locate package.json (default: process.cwd)

## License

MIT

[travis-image]: https://img.shields.io/travis/joshrtay/envitro.svg?style=flat-square
[travis-url]: https://travis-ci.org/joshrtay/envitro
[git-image]: https://img.shields.io/github/tag/joshrtay/envitro.svg?style=flat-square
[git-url]: https://github.com/joshrtay/envitro
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/envitro.svg?style=flat-square
[npm-url]: https://npmjs.org/package/envitro
