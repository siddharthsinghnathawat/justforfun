'use server';
/**
 * @fileOverview A personalized starfield generation flow.
 *
 * - generatePersonalizedStarfield - A function that generates a starfield based on user details.
 * - StarfieldInput - The input type for the generatePersonalizedStarfield function.
 * - StarfieldOutput - The return type for the generatePersonalizedStarfield function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const StarfieldInputSchema = z.object({
  name: z.string().describe('The name of the person.'),
  bio: z.string().describe('A short biography of the person.'),
});
export type StarfieldInput = z.infer<typeof StarfieldInputSchema>;

const StarfieldOutputSchema = z.object({
  prompt: z.string().describe('A creative prompt for a background image that captures the essence of the person.'),
});
export type StarfieldOutput = z.infer<typeof StarfieldOutputSchema>;

export async function generatePersonalizedStarfield(input: StarfieldInput): Promise<StarfieldOutput> {
  return starfieldFlow(input);
}

const prompt = ai.definePrompt({
  name: 'starfieldPrompt',
  input: { schema: StarfieldInputSchema },
  output: { schema: StarfieldOutputSchema },
  prompt: `You are an expert creative director. Based on the following user details, generate a creative prompt for a background image that captures their essence in a "neon and glass" theme. The image should be abstract, visually interesting, and suitable for a developer portfolio.

Think about concepts like: code, data, creativity, problem-solving, and technology.

The prompt should be concise and descriptive.

Name: {{{name}}}
Bio: {{{bio}}}
`,
});

const starfieldFlow = ai.defineFlow(
  {
    name: 'starfieldFlow',
    inputSchema: StarfieldInputSchema,
    outputSchema: StarfieldOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
