import axios from 'axios';

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default axios.create({
	baseURL: 'https://developers.zomato.com/api/v2.1',
	headers: {
		'user-key': '235b5e731b79fd8954e961f9049263f3'
	}
})