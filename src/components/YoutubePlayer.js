import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = ({ videoId, className }) => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 1, // Show controls
      modestbranding: 1, // Minimal YouTube branding
      rel: 0, // Do not show related videos at the end
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      className={`w-full h-full ${className}`}
      iframeClassName="w-full h-full"
      title="YouTube video player"
    />
  );  
};

export default YoutubePlayer;