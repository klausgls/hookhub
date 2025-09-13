export interface Hook {
  id: string;
  name: string;
  category: string;
  description: string;
  repositoryUrl: string;
  language: string;
  author: string;
  tags: string[];
}

export const HOOK_CATEGORIES = [
  'Security & Validation',
  'Git Integration',
  'Notifications',
  'Development Workflow',
  'Code Quality'
] as const;

export type HookCategory = typeof HOOK_CATEGORIES[number];