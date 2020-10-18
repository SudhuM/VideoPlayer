import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoClick }) => {
	return (
		<div className='ui list relaxed divided'>
			{videos.map((video) => {
				if (video.id.videoId) {
					return <VideoItem onVideoClick={onVideoClick} key={video.etag} video={video} />;
				}
			})}
		</div>
	);
};

export default VideoList;
