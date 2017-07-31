import Vue from 'vue'
import App from './component/app.vue';
import store from './store';
import router from './route';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
import VueMaterial from 'vue-material'

//import styles
import '../node_modules/vue-material/dist/vue-material.css';
import './style/app.css'


//specify your base and end point url to started.
import { URL_BASE } from './helper/constant';
const loginUrl = `${URL_BASE}/loginapi`;
const fetchUserUrl = `${URL_BASE}/auth/userDeatils`;


//define this before using vue-auth and comment this if your dashboard doesn't require any authentication
Vue.router = router
Vue.use(VueMaterial)
Vue.use(VueAxios, axios)
Vue.use(VueAuth, {
	auth: {
		request: function (req, token) {
			this.options.http._setHeaders.call(this, req, { Authorization: 'Bearer ' + token })
		},
		response: (res) => {
			return res
		}
	},
	http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
	router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
	loginData: { url: loginUrl, fetchUser: false },
	refreshData: { enabled: false },
	fetchData: { url: fetchUserUrl, method: 'GET', enabled: false }
})



// Enable devtools
Vue.config.devtools = true



//now create new vue instance and stick it over app(defined in index.html)
new Vue({
	el: '#app',
	store: store,
	router: router,
	render: render => render(App)
})
