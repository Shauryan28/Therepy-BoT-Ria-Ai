import { GoogleGenerativeAI } from '@google/generative-ai';
import { AI_CONFIG } from '../config/ai-config.js';
import { logger } from '../utils/logger.js';

class AIService {
  constructor() {
    this.genAI = new GoogleGenerativeAI(AI_CONFIG.apiKey);
    this.model = this.genAI.getGenerativeModel({ model: AI_CONFIG.model });
  }

  async generateResponse(prompt) {
    try {
      const result = await this.model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      logger.error('AI generation error:', error);
      return this.getFallbackResponse();
    }
  }

  getFallbackResponse() {
    return "I apologize, but I'm having trouble processing that right now. Could you please rephrase or try again?";
  }
}

export const aiService = new AIService();