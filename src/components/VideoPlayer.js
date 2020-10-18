import React from 'react';
import './VideoItem.css';

const VideoPlayer = ({ video }) => {
	const videoSrc = `https://www.youtube.com/embed/$[video.id.videoId]`;

	return (
		<div className='video-player'>
			<div className='ui embed video-iframe'>
				<iframe title={video.snippet.title} src={videoSrc} />
			</div>

			<div className='header'>
				<h4>{video.snippet.title}</h4>

				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoPlayer;
