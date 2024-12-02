import { sanitizeInput } from './utils/security.js';
import { logger } from './utils/logger.js';
import { aiService } from './services/ai-service.js';

export function createTherapist() {
  const conversationHistory = [];

  const therapist = {
    name: 'Ria',
    
    getIntroduction() {
      return `Hello, I'm ${this.name}. I'm here to listen and support you in a safe, non-judgmental space. 
While I'm an AI assistant and not a replacement for a licensed therapist, I'm here to chat and offer perspective.
How are you feeling today?`;
    },

    async respond(userInput) {
      const sanitizedInput = sanitizeInput(userInput);
      
      logger.interaction('User input received', { length: sanitizedInput.length });
      
      conversationHistory.push({
        user: sanitizedInput,
        timestamp: new Date()
      });

      const response = await this.generateResponse(sanitizedInput);
      
      conversationHistory.push({
        therapist: response,
        timestamp: new Date()
      });

      return response;
    },

    async generateResponse(input) {
      const lowercaseInput = input.toLowerCase();
      
      if (this.containsCrisisKeywords(lowercaseInput)) {
        return this.getCrisisResponse();
      }

      const prompt = this.createTherapeuticPrompt(input);
      const aiResponse = await aiService.generateResponse(prompt);
      
      return this.formatResponse(aiResponse);
    },

    createTherapeuticPrompt(input) {
      return `As an empathetic AI therapist named Ria, respond to the following user input in a supportive, 
professional manner. Maintain appropriate boundaries and remind the user that you are an AI if needed. 
Include therapeutic techniques like active listening and reflection.

User input: "${input}"

Remember to:
- Be warm and empathetic
- Use professional therapeutic language
- Avoid giving medical advice
- Encourage professional help when appropriate

Response:`;
    },

    formatResponse(response) {
      return response.trim()
        .replace(/^(Ria:|AI:|Therapist:)/i, '')
        .trim();
    },

    containsCrisisKeywords(input) {
      const crisisKeywords = ['suicide', 'kill myself', 'want to die', 'end it all'];
      return crisisKeywords.some(keyword => input.includes(keyword));
    },

    getCrisisResponse() {
      return `I'm very concerned about what you're sharing. While I'm here to listen, I'm an AI and not equipped to handle crisis situations. Please reach out to professional help immediately:

• National Crisis Hotline (24/7): 988
• Crisis Text Line: Text HOME to 741741

Your life matters, and there are people ready to help you right now.`;
    }
  };

  return therapist;
}