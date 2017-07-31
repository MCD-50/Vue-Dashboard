import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//register all routes here.
export default new VueRouter({
	base: __dirname,
	routes: [
		{
			name: 'Login',
			path: '/login',
			component: require('../component/view/login/login.vue'),
		},
		{
			path: '*',
			redirect: '/dashboard',
			meta: {
				auth: true
			}
		},
		//import all sidebar items route
		...getSidebarRoutes(),
	]
});

function getSidebarRoutes(menu = [], routes = [], isBaseRouting = true) {
	if (menu.length < 1 && isBaseRouting) {
		const { sideBarItems } = require('../sidebar');
		menu = sideBarItems || [];
	}

	for (let i = 0, l = menu.length; i < l; i++) {
		const item = menu[i]
		if (item.path) {
			routes.push(item);
		}
		if (!item.component) {
			//since we are pushing items in array we don't need to return this fucntion. 
			getSidebarRoutes(item.children, routes, false);
		}
	}
	return routes
}