'use client';

import { useState, useRef } from 'react';
import { Music, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/background.ogg"  loop />
      <div className="fixed bottom-4 right-4 z-50">
        <Button onClick={togglePlay} variant="ghost" size="icon" className="bg-primary text-primary-foreground rounded-full h-14 w-14 hover:bg-primary/90">
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          <span className="sr-only">Play Music</span>
        </Button>
      </div>
    </>
  );
}
