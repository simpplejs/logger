const debug = require('debug');
const LOG_LEVELS = ['error', 'warn', 'info', 'debug'];
const LOG_LEVEL = process.env.LOG_LEVEL;

/**
 *
 * @param path
 * @return {{error: (function(): null), warn: (function(): null), info: (function(): null), debug: (function(): null)}}
 */
module.exports = function (path) {
  const index = LOG_LEVELS.indexOf(LOG_LEVEL);
  const logLevelIndex = index < 0 ? 2 : index;
  const logger = {
    error: () => null,
    warn: () => null,
    info: () => null,
    debug: () => null
};

  if (logLevelIndex > -1) logger.error = debug(`${path}.error`);
  if (logLevelIndex > 0) logger.warn = debug(`${path}.warn`);
  if (logLevelIndex > 1) logger.info = debug(`${path}.info`);
  if (logLevelIndex > 2) logger.debug = debug(`${path}.debug`);

  return logger;
};
