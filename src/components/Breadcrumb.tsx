'use client';
import { ChevronRight, Home } from 'lucide-react';
import { useEffect } from 'react';

export default function Breadcrumb({ path, onNavigate }: BreadcrumbProps) {
  const parts = path.split('/') || [];

  return (
    <nav className="flex items-center space-x-1 text-sm">
      <button
        onClick={() => onNavigate(parts[0])}
        className="flex items-center text-gray-600 hover:text-gray-900"
      >
        <Home className="h-4 w-4 mr-1" />
        <span>{parts[0]}</span>
      </button>

      {parts.slice(1).map((part, index) => {
        const currentPath = parts.slice(0, index + 2).join('.');
        return (
          <div key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <button
              onClick={() => onNavigate(currentPath)}
              className="ml-1 text-gray-600 hover:text-gray-900"
            >
              {part}
            </button>
          </div>
        );
      })}
    </nav>
  );
}

interface BreadcrumbProps {
  readonly path: string;
  readonly onNavigate: (path: string) => void;
}
