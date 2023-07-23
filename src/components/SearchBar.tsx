import React from 'react';

function SearchBar() {
  return (
    <div className='w-full'>
      <form>
        <label className="text-gray-900 sr-only mb-2 text-sm font-medium dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="text-gray-500 dark:text-gray-400 h-4 w-4"
              fill="none"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="text-gray-900 border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-4 pl-10 text-sm dark:text-white"
            placeholder="Search items"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute right-2.5 bottom-2.5 rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
