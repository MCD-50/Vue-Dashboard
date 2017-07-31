export const getOptions = (url, method, token, payload) => {
	let options = {
		method: method || 'GET',
		url: url,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	};
	if (token) {
		options.headers['Authorization'] = `Bearer ${token}`
	}
	if (payload) {
		options['method'] = method || 'POST';
		options['data'] = payload
	}

	return options;
}

//used in fetching image files from image uploader.
export const getMaterialImages = (e) => {
	return Object.keys(e).map(x => {
		if (x != 'length') {
			return e[x];
		} else {
			return null
		}
	}).filter(x => x != null && x != undefined);
}

//used in styling of material date picker 
export const options = {
	type: 'day',
	week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
	month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	format: 'YYYY-MM-DD',
	placeholder: '',
	inputStyle: {
		'display': 'inline-block',
		'padding': '6px',
		'line-height': '22px',
		'font-size': '16px',
		'border': '5px solid #ffffff',
		'box-shadow': '0 1px 5px 0 rgba(0, 0, 0, 0.2)',
		'border-radius': '3px',
		'color': '#5F5F5F'
	},
	color: {
		header: '#3F51B5',
		headerText: '#fff'
	},
	buttons: {
		ok: 'OK',
		cancel: 'CANCEL'
	},
	overlayOpacity: .0001, // 0.5 as default
	dismissible: true // as true as default
};


export const getCurrentDate = () => {
	const dateTime = new Date();
	const date = dateTime.getDate();
	const month = dateTime.getMonth() + 1;//increment month by 1
	const year = dateTime.getFullYear();
	return year + "-" + month + "-" + date;
};