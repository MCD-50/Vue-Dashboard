import axios from 'axios';
import { getOptions } from './collection';
import { URL_BASE } from './constant';

export const makeRequest = (endpoint, method = null, token = null, data = null) => {
	const url = URL_BASE + endpoint;
	const options = getOptions(url, method, token, data);
	return new Promise((resolve, reject) => {
		axios(options)
			.then((res) => resolve({ error: false, res: res }))
			.catch((error) => reject({ error: true, res: null }));
	});
}
