'use server';

import { actionClient } from '@/lib/safe-action';
import { z } from 'zod';

/**
 * Contact form action - mail functionality removed
 */
// Contact form schema for validation
const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { error: 'Name must be at least 3 characters' })
    .max(30, { error: 'Name must not exceed 30 characters' }),
  email: z.email({ error: 'Please enter a valid email address' }),
  message: z
    .string()
    .min(10, { error: 'Message must be at least 10 characters' })
    .max(500, { error: 'Message must not exceed 500 characters' }),
});

// Create a safe action for contact form submission
export const sendMessageAction = actionClient
  .schema(contactFormSchema)
  .action(async ({ parsedInput }) => {
    try {
      const { name, email, message } = parsedInput;

      // Mail functionality removed - mail module deleted
      console.log('Contact form submission:', { name, email, message });

      return {
        success: true,
        message: 'Message received (mail functionality disabled)',
      };
    } catch (error) {
      console.error('send message error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Something went wrong',
      };
    }
  });
