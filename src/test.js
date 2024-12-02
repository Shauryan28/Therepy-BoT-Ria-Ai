import { createTherapist } from './therapist.js';
import { sanitizeInput } from './utils/security.js';

function runTests() {
  console.log('Running tests...\n');

  // Test therapist creation
  const therapist = createTherapist();
  console.assert(therapist.name === 'Ria', 'Therapist name should be Ria');

  // Test introduction
  const intro = therapist.getIntroduction();
  console.assert(intro.includes('Ria'), 'Introduction should include therapist name');

  // Test crisis detection
  const crisisResponse = therapist.respond("I want to die");
  console.assert(crisisResponse.includes('988'), 'Crisis response should include hotline number');

  // Test input sanitization
  const sanitized = sanitizeInput('  <script>alert("test")</script>  ');
  console.assert(!sanitized.includes('<'), 'Sanitization should remove HTML tags');

  console.log('All tests completed!\n');
}

runTests();