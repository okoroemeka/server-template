import winston from 'winston';
import 'winston-daily-rotate-file';
import fs from 'fs';

const errorPath = 'applicationLogs';

if (!fs.existsSync(errorPath)) {
  fs.mkdirSync(errorPath);
}

const { createLogger, format, transports } = winston;
const {
  combine, timestamp, label, printf
} = format;

const myFormat = printf(
  (info) => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
);

const dailyLogger = new transports.DailyRotateFile({
  filename: `${errorPath}/logs-%DATE%.log`,
  datePattern: 'YYYY-MM-DD'
});

const appLogs = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'Logs' }),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat
  ),
  transports: [new transports.Console(), dailyLogger]
});

export default appLogs;
