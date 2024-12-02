import { createTherapist } from './therapist.js';
import { handleUserInput } from './userInterface.js';
import { logger } from './utils/logger.js';

async function main() {
  try {
    const ria = createTherapist();
    console.log(ria.getIntroduction());
    
    await handleUserInput(ria);
  } catch (error) {
    logger.error('An error occurred:', error.message);
    console.log("I apologize, but I'm having trouble responding right now. Please try again later.");
  }
}

main();