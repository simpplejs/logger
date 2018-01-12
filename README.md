# Logger

### Description
A tiny Node.js logger that is based on `debug` module.

### Usage
If you have ever used `debug` module, it will be easy for you.
Like `debug` module, this module exposes a function. Just pass a name of your module into this function and it will return an accustomed logger interface.

- error()
- warn()
- info()
- debug()

The first benefit is different suffixes which added to the namespace. Let's see.

```js

const logger = require('debug')('test');

logger.error('something happened wrong') // **test.error** error happened +0ms
logger.warn('something happened wrong') // **test.warn** something happened wrong +0ms
logger.info('just some neutral information') // **test.info** just some neutral information +0ms
logger.debug('some boring data', {a: 1, b: 2}) // **test.debug** some boring data { a: 1, b: 2 } +0ms
```

So, you will be able to recognize different levels of messages.

As a common logger this one works with `LOG_LEVEL`. Just set the one of the following ['error', 'warn', 'info', 'debug'] level to env `LOG_LEVEL` . After that manipulation, the set level will be highest. It means `LOG_LEVEL=warn` will show you messages with suffix `error` and `warn`.

The second benefit is using of wildcard. All is you need is set env `DEBUG`
Let's see on common patterns:
- `*` - show all the logs
- `*.level` - show logs from all the modules with specific level
- `module.*` - show all level logs of some specific module
- `module.level` - show specific level logs of specific module

### Benchmark
logger.info*10000 ~ 328ms
