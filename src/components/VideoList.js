import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect }) => {
    const renderedVideoList = videos.map((video) => {
        return <VideoItem key={video.snippet.title} onVideoSelect={onVideoSelect} video={video} />;
    });

    return <div className="ui relaxed divied list">{renderedVideoList}</div>;
}

export default VideoList;