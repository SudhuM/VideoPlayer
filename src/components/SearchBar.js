import React, { useState } from 'react';

const SearchBar = (props) => {
	const [ searchTerm, setSearchTerm ] = useState('');

	const onInputChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const onFormSubmit = (e) => {
		e.preventDefault();

		props.onFormSubmit(searchTerm);
	};

	return (
		<div className='ui segment'>
			<form className='ui form' onSubmit={onFormSubmit}>
				<div className='field'>
					<label htmlFor='searchbar'>Search for a video</label>
					<input
						type='text'
						id='searchbar'
						placeholder='Enter a video name here'
						value={searchTerm}
						onChange={onInputChange}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
