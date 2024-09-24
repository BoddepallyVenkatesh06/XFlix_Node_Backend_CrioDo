const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'app.log');

const log = (level, message, metadata) => {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} [${level.toUpperCase()}]: ${message}`;

  fs.appendFile(logFilePath, `${logMessage}\n`, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });

  if (metadata) {
    console.log(`${timestamp} [${level.toUpperCase()}] Metadata:`, metadata);
  }
};

const logger = {
  error: (message, metadata) => log('error', message, metadata),
  warn: (message, metadata) => log('warn', message, metadata),
  info: (message, metadata) => log('info', message, metadata),
  debug: (message, metadata) => log('debug', message, metadata),
};

module.exports = logger;
