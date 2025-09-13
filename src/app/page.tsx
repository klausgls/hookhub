'use client';

import { useState } from 'react';
import { hooks } from '@/data/hooks';
import { Hook } from '@/types/hook';
import CategoryFilter from '@/components/CategoryFilter';
import HookGrid from '@/components/HookGrid';

export default function Home() {
  const [filteredHooks, setFilteredHooks] = useState<Hook[]>(hooks);

  const handleFilterChange = (filtered: Hook[]) => {
    setFilteredHooks(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              HookHub
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover and browse curated Claude Code hooks to enhance your development workflow
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryFilter
          hooks={hooks}
          onFilterChange={handleFilterChange}
        />

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Available Hooks
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredHooks.length} of {hooks.length} hooks
          </p>
        </div>

        <HookGrid hooks={filteredHooks} />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>&copy; 2024 HookHub. Curated collection of Claude Code hooks.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
