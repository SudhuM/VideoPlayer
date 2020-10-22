import { useState, useEffect } from 'react';
import axios from '../apiConfig';

const useVideos = (defaultSearchTerm) => {
	const [ videos, setVideos ] = useState([]);

	useEffect(
		() => {
			search(defaultSearchTerm);
		},
		[ defaultSearchTerm ]
	);

	const search = async (term) => {
		const response = await axios({
			method : 'get',
			url    : '/search',
			params : {
				q : term
			}
		});
		setVideos(response.data.items);
	};

	return [ videos, search ];
};

export default useVideos;
