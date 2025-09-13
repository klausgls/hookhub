'use client';

import { useState } from 'react';
import { Hook, HOOK_CATEGORIES } from '@/types/hook';

interface CategoryFilterProps {
  hooks: Hook[];
  onFilterChange: (filteredHooks: Hook[]) => void;
}

type SortOption = 'alphabetical' | 'category' | 'language';

export default function CategoryFilter({ hooks, onFilterChange }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('alphabetical');

  const filterAndSortHooks = (category: string, search: string, sort: SortOption) => {
    let filtered = hooks;

    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(hook => hook.category === category);
    }

    // Filter by search term
    if (search.trim()) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(hook =>
        hook.name.toLowerCase().includes(searchLower) ||
        hook.description.toLowerCase().includes(searchLower) ||
        hook.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Sort hooks
    filtered = [...filtered].sort((a, b) => {
      switch (sort) {
        case 'alphabetical':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
        case 'language':
          return a.language.localeCompare(b.language) || a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const filtered = filterAndSortHooks(category, searchTerm, sortBy);
    onFilterChange(filtered);
  };

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    const filtered = filterAndSortHooks(selectedCategory, search, sortBy);
    onFilterChange(filtered);
  };

  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort);
    const filtered = filterAndSortHooks(selectedCategory, searchTerm, sort);
    onFilterChange(filtered);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setSortBy('alphabetical');
    onFilterChange(hooks);
  };

  const hasActiveFilters = selectedCategory !== 'all' || searchTerm.trim() !== '';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Search Hooks
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search by name, description, or tags..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Category Filter */}
        <div className="min-w-0 lg:min-w-[200px]">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="all">All Categories</option>
            {HOOK_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="min-w-0 lg:min-w-[150px]">
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Sort By
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value as SortOption)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="alphabetical">Alphabetical</option>
            <option value="category">Category</option>
            <option value="language">Language</option>
          </select>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="flex items-end">
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}