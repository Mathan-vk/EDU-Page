import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  "https://www.youtube.com/embed/Ugys-7l_Hy4",
  "https://www.youtube.com/embed/hfcZ3H2NWqw",
  "https://www.youtube.com/embed/-He6DGrzQEs"
];

const AUTO_PLAY_INTERVAL = 20000; // 5 seconds

const VideoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      goToNext();
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex]);

  // Append autoplay=1 to URL to enable auto play on load
  const getVideoUrl = (url: string) => {
    // Check if url already has query params
    return url.includes("?") ? `${url}&autoplay=1&mute=1` : `${url}?autoplay=1&mute=1`;
  };

  return (
    <div className="relative max-w-4xl mx-auto my-12">
      <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border-4 border-blue-800">
        <iframe
          src={getVideoUrl(videos[currentIndex])}
          title={`Video ${currentIndex + 1}`}
          allowFullScreen
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
      </div>

      <button
        onClick={() => goToPrevious()}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-blue-900/70 hover:bg-blue-700 p-2 rounded-full"
        aria-label="Previous Video"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => goToNext()}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-blue-900/70 hover:bg-blue-700 p-2 rounded-full"
        aria-label="Next Video"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default VideoCarousel;
