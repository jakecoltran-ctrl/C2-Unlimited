'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

export default function LiteYouTube({ videoId, title, className = '' }: LiteYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Use hqdefault which is reliably available for all YouTube videos
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (isLoaded) {
    return (
      <div className={`relative aspect-video rounded-xl overflow-hidden ${className}`}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      className={`relative aspect-video rounded-xl overflow-hidden group cursor-pointer w-full ${className}`}
      onClick={() => setIsLoaded(true)}
      aria-label={`Play video: ${title}`}
    >
      {/* Thumbnail */}
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
      />

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 group-hover:scale-110 transition-all duration-200 shadow-lg">
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Video title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white font-medium text-sm sm:text-base truncate">{title}</p>
      </div>
    </button>
  );
}
