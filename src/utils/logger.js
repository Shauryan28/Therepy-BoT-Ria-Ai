export const logger = {
  interaction(message, metadata = {}) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`, metadata);
  },

  error(message, error) {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] ERROR: ${message}`, error);
  }
};