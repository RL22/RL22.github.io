"use client";
import { useState } from "react";
import { Play } from "lucide-react";

type Props = {
  videoId: string;
  title: string;
};

export default function LiteYouTube({ videoId, title }: Props) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Play video: ${title}`}
      className="group relative aspect-video w-full rounded-xl overflow-hidden bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={`Thumbnail for ${title}`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <span className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full bg-brand flex items-center justify-center transition-transform group-hover:scale-110">
          <Play className="w-7 h-7 text-white translate-x-0.5" aria-hidden="true" />
        </span>
      </span>
    </button>
  );
}
