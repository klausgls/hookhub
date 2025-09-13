import { Hook } from '@/types/hook';

interface HookCardProps {
  hook: Hook;
}

const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    'Security & Validation': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    'Git Integration': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    'Notifications': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    'Development Workflow': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    'Code Quality': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  };
  return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
};

const getLanguageIcon = (language: string): string => {
  switch (language.toLowerCase()) {
    case 'python':
      return '🐍';
    case 'javascript':
      return '🟨';
    case 'typescript':
      return '🔷';
    case 'shell':
      return '🐚';
    default:
      return '📄';
  }
};

export default function HookCard({ hook }: HookCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate pr-2">
          {hook.name}
        </h3>
        <span className="text-lg" title={hook.language}>
          {getLanguageIcon(hook.language)}
        </span>
      </div>

      <div className="mb-3">
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(hook.category)}`}>
          {hook.category}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
        {hook.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          by {hook.author}
        </div>
        <a
          href={hook.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1 text-xs font-medium text-white bg-gray-900 dark:bg-gray-700 rounded hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
        >
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          GitHub
        </a>
      </div>

      {hook.tags.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
          <div className="flex flex-wrap gap-1">
            {hook.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
              >
                {tag}
              </span>
            ))}
            {hook.tags.length > 3 && (
              <span className="inline-block px-2 py-0.5 text-xs text-gray-500 dark:text-gray-400">
                +{hook.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}