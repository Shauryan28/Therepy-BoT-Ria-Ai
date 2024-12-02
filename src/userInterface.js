import readline from 'readline';

export function handleUserInput(therapist) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.on('line', async (input) => {
      if (input.toLowerCase() === 'exit') {
        console.log('Thank you for talking with me today. Take care!');
        rl.close();
        resolve();
        return;
      }

      try {
        const response = await therapist.respond(input);
        console.log(`\nRia: ${response}\n`);
      } catch (error) {
        console.log("\nI apologize, but I'm having trouble responding right now. Let's try again.\n");
      }
    });
  });
}