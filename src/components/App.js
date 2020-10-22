import React, { useState, useEffect } from 'react';
import './VideoItem.css';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import useVideos from '../hooks/useVideos';

const App = (props) => {
	const [ videos, search ] = useVideos('ronaldo');
	const [ selectedVideo, setSelectedVideo ] = useState(null);

	useEffect(
		() => {
			setSelectedVideo(videos[0]);
		},
		[ videos ]
	);

	return (
		<div className='ui container'>
			<SearchBar onFormSubmit={search} />
			<div className='video-grid'>
				{selectedVideo && <VideoPlayer video={selectedVideo} />}
				<VideoList onVideoClick={setSelectedVideo} videos={videos} />
			</div>
		</div>
	);
};

export default App;
