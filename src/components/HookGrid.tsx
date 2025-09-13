import { Hook } from '@/types/hook';
import HookCard from './HookCard';

interface HookGridProps {
  hooks: Hook[];
}

export default function HookGrid({ hooks }: HookGridProps) {
  if (hooks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 dark:text-gray-400 text-lg mb-2">
          No hooks found
        </div>
        <p className="text-gray-400 dark:text-gray-500 text-sm">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {hooks.map((hook) => (
        <HookCard key={hook.id} hook={hook} />
      ))}
    </div>
  );
}