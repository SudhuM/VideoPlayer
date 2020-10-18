import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoClick }) => {
	return (
		<div className='video-item item' onClick={() => onVideoClick(video)}>
			<img
				className='ui image'
				alt={video.snippet.title}
				src={video.snippet.thumbnails.medium.url}
			/>
			<div className='content video-content'>
				<h3 className='header'>{video.snippet.title}</h3>
			</div>
		</div>
	);
};

export default VideoItem;
