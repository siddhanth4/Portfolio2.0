'use server';
/**
 * @fileOverview A Genkit flow to dynamically generate concise and impactful summaries for projects,
 * automatically highlighting key cybersecurity implications and web development best practices from the project's description.
 *
 * - generateProjectSummary - A function that handles the project summary generation process.
 * - ProjectSummaryGeneratorInput - The input type for the generateProjectSummary function.
 * - ProjectSummaryGeneratorOutput - The return type for the generateProjectSummary function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ProjectSummaryGeneratorInputSchema = z.object({
  projectDescription: z.string().describe('The detailed description of the project.'),
});
export type ProjectSummaryGeneratorInput = z.infer<typeof ProjectSummaryGeneratorInputSchema>;

const ProjectSummaryGeneratorOutputSchema = z.object({
  summary: z.string().describe('A concise and impactful summary of the project, highlighting cybersecurity implications and web development best practices.'),
});
export type ProjectSummaryGeneratorOutput = z.infer<typeof ProjectSummaryGeneratorOutputSchema>;

export async function generateProjectSummary(input: ProjectSummaryGeneratorInput): Promise<ProjectSummaryGeneratorOutput> {
  return projectSummaryGeneratorFlow(input);
}

const projectSummaryPrompt = ai.definePrompt({
  name: 'projectSummaryPrompt',
  input: { schema: ProjectSummaryGeneratorInputSchema },
  output: { schema: ProjectSummaryGeneratorOutputSchema },
  prompt: `As an AI assistant specialized in analyzing technical projects, your task is to generate a concise, impactful, and professional summary for the given project description.

Focus on highlighting key cybersecurity implications, secure coding practices, and web development best practices evident in the project. If no specific cybersecurity or web development practices are mentioned, infer potential best practices that would apply to such a project.

The summary should be suitable for a professional portfolio, aiming to impress potential employers by showcasing the technical depth and relevance of the work.

Project Description: {{{projectDescription}}}

Generate the summary in a paragraph, up to a maximum of 100 words.`, // Limiting to 100 words for conciseness.
});

const projectSummaryGeneratorFlow = ai.defineFlow(
  {
    name: 'projectSummaryGeneratorFlow',
    inputSchema: ProjectSummaryGeneratorInputSchema,
    outputSchema: ProjectSummaryGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await projectSummaryPrompt(input);
    return output!;
  }
);
