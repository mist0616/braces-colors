'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface ColorTagsPanelProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

// Preset color options
const COLOR_OPTIONS = [
  '#ef4444',
  '#f97316',
  '#eab308',
  '#22c55e',
  '#3b82f6',
  '#8b5cf6',
  '#ec4899',
  '#6b7280',
  '#000000',
  '#ffffff',
  '#06b6d4',
  '#84cc16',
  '#f59e0b',
  '#dc2626',
  '#7c3aed',
  '#059669',
  '#f43f5e',
  '#8b5a2b',
  '#64748b',
  '#14b8a6',
  '#a855f7',
  '#fb7185',
  '#65a30d',
  '#0891b2',
  '#7c2d12',
  '#be123c',
  '#166534',
  '#1e40af',
  '#6d28d9',
];

export const ColorTagsPanel: React.FC<ColorTagsPanelProps> = ({
  selectedColor,
  onColorChange,
}) => {
  const t = useTranslations('bracesSimulator.colors');

  const handleColorSelect = (color: string) => {
    onColorChange(color);
  };

  const getColorName = (color: string) => {
    return t(`colorNames.${color}` as any);
  };

  return (
    <div className="space-y-4">
      {/* Color tags list */}
      <div className="flex flex-wrap gap-2 max-h-80 overflow-y-auto">
        {COLOR_OPTIONS.map((color) => {
          const colorName = getColorName(color);
          return (
            <button
              key={color}
              onClick={() => handleColorSelect(color)}
              className={cn(
                'flex items-center gap-1 p-1 rounded-md transition-all duration-200 hover:bg-accent hover:cursor-pointer focus:outline-none',
                selectedColor === color
                  ? 'bg-primary/10 border border-primary/20'
                  : 'border border-border'
              )}
              aria-label={`${t('selectColor')} ${colorName}`}
              title={colorName}
            >
              {/* Color block */}
              <div
                className={cn(
                  'w-4 h-4 rounded-sm flex-shrink-0 border',
                  color.toLowerCase() === '#ffffff' && 'shadow-sm border-border'
                )}
                style={{ backgroundColor: color }}
              />
              {/* Color name */}
              <span className="text-xs text-foreground font-medium flex-1 text-left">
                {colorName}
              </span>
            </button>
          );
        })}
      </div>

      {/* Currently selected color display */}
      <div className="border-t border-border pt-3">
        <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
          <div
            className="w-5 h-5 rounded-md border border-border flex-shrink-0"
            style={{ backgroundColor: selectedColor }}
          />
          <div className="flex-1">
            <div className="text-sm font-medium text-foreground">
              {t('selectedColor')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
