// src/components/VideoSection/VideoSection.jsx
import React, { useRef } from "react";
import Video1 from "../../assets/Videos/video1.mp4";
import Video2 from "../../assets/Videos/video2.mp4";
import Video3 from "../../assets/Videos/video3.mp4";
import Video4 from "../../assets/Videos/video4.mp4";

const videos = [Video1, Video2, Video3, Video4];

const VideoSection = () => {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = false; // Unmute
      video.play(); // Play sound
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = true; // Mute again
    }
  };

  return (
    <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      {videos.map((vid, i) => (
        <div
          key={i}
          className="relative w-full rounded-xl overflow-hidden shadow-lg aspect-video"
        >
          <video
            ref={(el) => (videoRefs.current[i] = el)}
            src={vid}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoSection;
