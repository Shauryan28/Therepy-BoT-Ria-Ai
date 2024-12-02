export function sanitizeInput(input) {
  // Basic input sanitization
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 500);       // Limit input length
}