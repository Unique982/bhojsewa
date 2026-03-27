"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
}: VideoModalProps) {
  // ESC key thichda modal banda garna
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative w-full max-w-5xl mx-auto aspect-video bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 shadow-[0_0_50px_rgba(250,204,21,0.1)] animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-yellow-400 hover:text-black text-white rounded-full transition-all active:scale-90"
          aria-label="Close video"
        >
          <X size={24} />
        </button>

        <div className="w-full h-full">
          <iframe
            src={videoUrl}
            title="Video Player"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
