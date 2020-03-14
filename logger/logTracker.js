import appLogs from './logger';

const logTracker = (error) => {
  appLogs.error(error.stack);
};

export default logTracker;
