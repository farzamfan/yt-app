import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideoList = videos.map((v) => {
    return (
      <VideoItem key={v.id.videoId} video={v} onVideoSelect={onVideoSelect} />
    );
  });

  return <div className="ui relaxed divided list">{renderedVideoList}</div>;
};

export default VideoList;
