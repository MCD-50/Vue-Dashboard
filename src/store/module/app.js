import { deviceType } from '../../helper/enum/deviceType';

const state = {
	currentRoute: '/login',
	sidebarMargin: 300,
	deviceType: deviceType.TABLET,
	isProgressVisible: false,
	translate3D: true,
}

const mutations = {
	SET_CURRENT_ROUTE(state, payload) {
		state.currentRoute = payload;
	},
	SET_SIDEBAR_MARGIN(state, payload) {
		state.sidebarMargin = payload;
	},
	SET_DEVICE_TYPE(state, payload) {
		state.deviceType = payload;
	},
	SET_IS_PROGRESS_VISIBLE(state, payload) {
		state.isProgressVisible = payload;
	},
	SET_TRASLATE3D(state, payload) {
		state.translate3D = payload;
	},
}

const actions = {
	setCurrentRoute({ commit }, payload) {
		commit('SET_CURRENT_ROUTE', payload);
	},
	setSidebarMargin({ commit }, payload) {
		commit('SET_SIDEBAR_MARGIN', payload);
	},
	setDeviceType({ commit }, payload) {
		commit('SET_DEVICE_TYPE', payload);
	},
	setIsProgressVisible({ commit }, payload) {
		commit('SET_IS_PROGRESS_VISIBLE', payload);
	},
	setTranslate3d({ commit }, payload) {
		commit('SET_TRASLATE3D', payload);
	},
}

const getters = {
	appCurrentRoute: state => state.currentRoute,
	appSidebarMargin: state => state.sidebarMargin,
	appDeviceType: state => state.deviceType,
	appIsProgressVisible: state => state.isProgressVisible,
	appTranslate3D: state => state.translate3D
}


export default {
	state,
	mutations,
	actions,
	getters
}