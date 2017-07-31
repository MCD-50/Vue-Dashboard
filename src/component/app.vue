<template>
	<div>
		<SideBar></SideBar>
		<div :style="[SideBarMargin]">
			<md-progress md-indeterminate class="md-accent" v-if="IsProgressVisible"></md-progress>
			<div class="content-div">
				<transition name="md-router" appear>
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</div>
</template>


<script>
import SideBar from './sideBar.vue';

export default {
	beforeMount() {
		this.$store.dispatch('setSidebarMargin', 300)
	},
	mounted() {

	},
	beforeDestroy() {

	},
	destroyed() {

	},
	components: {
		SideBar,
	},
	computed: {
		IsLoginPage() {
			return this.$store.getters.appCurrentRoute == '/login' ? true : false;
		},
		SideBarMargin() {
			return { 'margin-left': `${this.$store.getters.appSidebarMargin}px` };
		},
		IsProgressVisible() {
			return this.$store.getters.appIsProgressVisible;
		}
	},
	methods: {

	}
}
</script>

<style>
body {
	background: #F1F1F1;
}

.content-div {
	padding: 74px 20px 10px 20px;
	max-width: 1000px;
	margin: auto;
}

.divider {
	position: relative;
	padding-top: 10px;
	padding-bottom: 10px;
	margin-top: 10px;
	font-size: 12px;
	line-height: 1.5;
	color: #EAECEF;
	border-top: 1px solid #EAECEF;
}

.footer {
	display: flex;
	flex: 1;
}

.left-sidenav-container .md-theme-default.md-toolbar {
	background-color: #FFFFFF;
	color: #000;
}

.md-theme-default.md-toolbar.admin-toolbar {
	position: fixed;
	z-index: 1500;
	left: 0;
	right: 0;
	top: 0;
	padding: 0px
}

.top-fixed-bar {
	background: #607D8D;
	color: #FFFFFF;
	padding-left: 10px;
}

.md-sidenav-backdrop {
	display: none;
}

.md-sidenav.md-active .md-sidenav-content {
	box-shadow: 0 0px 10px -5px rgba(0, 0, 0, 0.2), 0 10px 11px 0px rgba(0, 0, 0, 0.14), 0 6px 0px -2px rgba(0, 0, 0, 0.12);
}

.md-theme-default.md-list .md-list-item-expand .md-list-item-container {
	background: none!important;
}

.md-sidenav-content {
	position: fixed!important;
	z-index: 2000!important;
}

.base-div {
	padding-top: 64px;
}

.md-toolbar.md-theme-default {
	border-bottom: 0.5px solid rgba(0, 0, 0, 0.12)!important;
	height: 63.50px;
}

.top-left {
	padding-left: 10px;
}

.md-toolbar-container img {
	height: 51px;
	padding-left: 0px;
}

.md-card-actions .md-button {
	background-color: rgba(153, 153, 153, 0.2);
}

.md-select-content,
.md-menu-content {
	width: 50% !important;
	max-width: 50% !important;
}
</style>

