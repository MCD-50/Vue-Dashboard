import Vue from 'vue';
import VueX from 'vuex';
import app from './module/app';

Vue.use(VueX)

export default new VueX.Store({
	modules: {
		app,
		//add mudules here
	},
})