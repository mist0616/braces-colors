'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ColorTagsPanel } from './color-tags-panel';
import Container from '@/components/layout/container';

export const BracesColorSimulator: React.FC = () => {
  const t = useTranslations('bracesSimulator');
  const [selectedColor, setSelectedColor] = useState('#ef4444');
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = '/braces.png';
    img.onload = () => {
      setImageDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
      setImageLoaded(true);
      // 延迟150ms显示背景色，让图片先完全渲染
      setTimeout(() => {
        setShowBackground(true);
      }, 150);
    };

    // Fallback to known dimensions if image fails to load
    img.onerror = () => {
      setImageDimensions({ width: 465, height: 191 });
      setImageLoaded(true); // 即使加载失败也设置为true，避免无限加载状态
      // 即使出错也延迟显示背景色
      setTimeout(() => {
        setShowBackground(true);
      }, 150);
    };
  }, []);

  // 监听容器尺寸变化
  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerWidth(rect.width);
      }
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);

    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    // 如果图片已经加载，确保背景色显示
    if (imageLoaded && !showBackground) {
      setShowBackground(true);
    }
  };

  // 计算响应式的图片尺寸
  const getResponsiveDimensions = () => {
    if (!imageDimensions.width || !imageDimensions.height || !containerWidth) {
      return { width: 465, height: 191 };
    }

    const availableWidth = containerWidth;

    // 如果容器宽度小于图片原始宽度，则按比例缩放
    if (availableWidth < imageDimensions.width) {
      const scale = availableWidth / imageDimensions.width;
      return {
        width: availableWidth,
        height: imageDimensions.height * scale,
      };
    }

    // 否则使用原始尺寸
    return {
      width: imageDimensions.width,
      height: imageDimensions.height,
    };
  };

  const displayDimensions = getResponsiveDimensions();

  return (
    <Container className="py-8">
      <div className="space-y-6">
        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Braces image preview */}
          <div className="flex justify-center items-center h-64">
            <div ref={containerRef} className="relative">
              {/* Background color layer - positioned behind the image */}
              <div
                className="absolute transition-colors duration-300"
                style={{
                  backgroundColor: showBackground
                    ? selectedColor
                    : 'transparent',
                  width: `${displayDimensions.width * 0.82}px`, // 图片显示宽度的82%
                  height: `${displayDimensions.height}px`, // 保持图片显示高度
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)', // 居中定位
                  zIndex: 1,
                  transition: 'background-color 0.3s ease-in-out', // 添加过渡效果
                }}
              />
              {/* Loading placeholder */}
              {!imageLoaded && (
                <div
                  className="absolute flex items-center justify-center text-muted-foreground"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 3,
                  }}
                >
                  <div className="text-sm">Loading...</div>
                </div>
              )}

              {/* Image layer - positioned above the background */}
              <Image
                src="/braces.png"
                alt={t('preview.title')}
                width={displayDimensions.width}
                height={displayDimensions.height}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'block',
                  opacity: imageLoaded ? 1 : 0, // 图片加载前隐藏
                  transition: 'opacity 0.3s ease-in-out',
                }}
                priority
              />
            </div>
          </div>

          {/* Right: Color selection panel */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <ColorTagsPanel
              selectedColor={selectedColor}
              onColorChange={handleColorChange}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
