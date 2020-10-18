import React from 'react';

class SearchBar extends React.Component {
	state = {
		searchTerm : ''
	};

	onInputChange = (e) => {
		this.setState({
			searchTerm : e.target.value
		});
	};

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.onFormSubmit(this.state.searchTerm);
	};

	render() {
		return (
			<div className='ui segment'>
				<form className='ui form' onSubmit={this.onFormSubmit}>
					<div className='field'>
						<label htmlFor='searchbar'>Search for a video</label>
						<input
							type='text'
							id='searchbar'
							placeholder='Enter a video name here'
							value={this.state.searchTerm}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
