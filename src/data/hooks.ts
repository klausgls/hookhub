import { Hook } from '@/types/hook';

export const hooks: Hook[] = [
  {
    id: 'tts-feedback',
    name: 'TTS Feedback Hook',
    category: 'Notifications',
    description: 'Provides text-to-speech feedback for Claude Code operations and lifecycle events.',
    repositoryUrl: 'https://github.com/disler/claude-code-hooks-mastery',
    language: 'Python',
    author: 'disler',
    tags: ['tts', 'feedback', 'accessibility', 'notifications']
  },
  {
    id: 'code-quality-checker',
    name: 'Code Quality Validator',
    category: 'Code Quality',
    description: 'Enforces code quality standards and validates changes before commits.',
    repositoryUrl: 'https://github.com/decider/claude-hooks',
    language: 'JavaScript',
    author: 'decider',
    tags: ['linting', 'validation', 'quality', 'pre-commit']
  },
  {
    id: 'github-integration',
    name: 'GitHub Flow Integration',
    category: 'Git Integration',
    description: 'Automates GitHub workflow with branch creation, PR management, and checkpointing.',
    repositoryUrl: 'https://github.com/ruvnet/claude-flow',
    language: 'Shell',
    author: 'ruvnet',
    tags: ['github', 'automation', 'workflow', 'pr', 'branching']
  },
  {
    id: 'dangerous-command-blocker',
    name: 'Dangerous Command Blocker',
    category: 'Security & Validation',
    description: 'Blocks potentially dangerous commands and provides safety warnings.',
    repositoryUrl: 'https://github.com/security/claude-safety-hooks',
    language: 'Python',
    author: 'security-team',
    tags: ['security', 'safety', 'validation', 'protection']
  },
  {
    id: 'session-manager',
    name: 'Session Context Manager',
    category: 'Development Workflow',
    description: 'Manages coding sessions with context loading and transcript backup.',
    repositoryUrl: 'https://github.com/dev-tools/session-hooks',
    language: 'TypeScript',
    author: 'dev-tools',
    tags: ['session', 'context', 'backup', 'workflow']
  },
  {
    id: 'desktop-notifications',
    name: 'Desktop Notification System',
    category: 'Notifications',
    description: 'Sends desktop notifications for task completion and important events.',
    repositoryUrl: 'https://github.com/notify/claude-desktop-alerts',
    language: 'JavaScript',
    author: 'notify-team',
    tags: ['notifications', 'desktop', 'alerts', 'system']
  },
  {
    id: 'lint-enforcer',
    name: 'Lint Enforcement Hook',
    category: 'Code Quality',
    description: 'Automatically runs linting checks and enforces code formatting standards.',
    repositoryUrl: 'https://github.com/quality/lint-hooks',
    language: 'Python',
    author: 'quality-team',
    tags: ['linting', 'formatting', 'eslint', 'prettier']
  },
  {
    id: 'auto-branching',
    name: 'Automatic Branch Creator',
    category: 'Git Integration',
    description: 'Creates feature branches automatically based on task context and naming conventions.',
    repositoryUrl: 'https://github.com/git-automation/branch-creator',
    language: 'Shell',
    author: 'git-automation',
    tags: ['git', 'branching', 'automation', 'workflow']
  },
  {
    id: 'prompt-validator',
    name: 'Prompt Security Validator',
    category: 'Security & Validation',
    description: 'Validates prompts for potential security issues and malicious content.',
    repositoryUrl: 'https://github.com/prompt-security/validator-hooks',
    language: 'Python',
    author: 'prompt-security',
    tags: ['security', 'validation', 'prompts', 'safety']
  },
  {
    id: 'task-alerts',
    name: 'Task Completion Alerts',
    category: 'Notifications',
    description: 'Provides customizable alerts and notifications for completed tasks.',
    repositoryUrl: 'https://github.com/alerts/task-notifications',
    language: 'JavaScript',
    author: 'alerts-team',
    tags: ['alerts', 'tasks', 'completion', 'notifications']
  }
];