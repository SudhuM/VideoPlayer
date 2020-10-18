import React from 'react';
import axios from '../apiConfig';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import './VideoItem.css';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	onSearchTermSubmit = async (term) => {
		const response = await axios({
			method : 'get',
			url    : '/search',
			params : {
				q : term
			}
		});

		this.setState(
			{
				videos : response.data.items
			},
			() => {
				this.setState({
					selectedVideo : this.state.videos[0]
				});
			}
		);
	};

	onSelectedVideo = (video) => {
		this.setState(
			{
				selectedVideo : video
			},
			() => console.log(this.state.selectedVideo)
		);
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar onFormSubmit={this.onSearchTermSubmit} />

				<div className='video-grid'>
					{this.state.selectedVideo && <VideoPlayer video={this.state.selectedVideo} />}
					<VideoList onVideoClick={this.onSelectedVideo} videos={this.state.videos} />
				</div>
			</div>
		);
	}
}

export default App;
