<template>
	<div class="left-sidenav-container">
		<md-toolbar :style="[ContentMargin]" class="admin-toolbar">
			<div class="md-toolbar-container top-fixed-bar">
				<md-button v-if="!IsLoginPage" class="md-icon-button" @click="toggleLeftSidenav">
					<md-icon>menu</md-icon>
				</md-button>
	
				<h2 class="md-title">{{NavBarTitle}}</h2>
	
				<span style="flex: 1;"></span>
	
				<md-button class="md-icon-button" v-if="!IsLoginPage">
					<md-icon>search</md-icon>
				</md-button>
	
				<md-button class="md-icon-button" v-if="!IsLoginPage">
					<md-icon>filter_list</md-icon>
				</md-button>
			</div>
		</md-toolbar>
	
		<md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')" :style="[SideBarWidth]">
			<md-toolbar class="md-small">
				<div class="md-toolbar-container">
					<img src="/src/assets/logo.png" style="width:63; overflow:'hidden'; height:63" />
					<h3 class="md-title top-left">Vue</h3>
				</div>
			</md-toolbar>
	
			<div>
				<md-list>
					<md-list-item v-for="(item, index) in Items" :key="index" @click="(e)=>clickRoute(e, item)" :style="[CurrentPath==item.path ? style.selected : style.unselected]">
						<md-icon v-if="item.meta.icon">{{item.meta.icon}}</md-icon>
						<span>{{item.name}}</span>
						<md-list-expand v-if="item.children">
							<md-list v-for="(subItem, subIndex) in item.children" :key="subIndex">
								<md-list-item class="md-inset" @click="(e)=>clickRoute(e, subItem)" :style="[CurrentPath==subItem.path ? style.selected : style.unselected]">{{subItem.name}}</md-list-item>
							</md-list>
						</md-list-expand>
					</md-list-item>
				</md-list>
			</div>
		</md-sidenav>
	
	</div>
</template>

<script>
import Vue from 'vue';
import { APP_NAME } from '../helper/constant.js';
import { sideBarItems } from '../sidebar';
import { deviceType } from '../helper/enum/deviceType.js'

export default {
	beforeMount() {
		
	},
	mounted() {
		if (!this.IsLoginPage && this.DeviceType != deviceType.PHONE) {
			this.$refs.leftSidenav.open();
		}
	},
	beforeDestroy() {

	},
	destroyed() {

	},
	data() {
		return {
			style: {
				unselected: { background: 'transparent' },
				selected: { background: '#F1F1F1' }
			}
		}
	},
	components: {

	},
	computed: {
		IsLoginPage() {
			return this.$store.getters.appCurrentRoute == '/login' ? true : false;
		},
		NavBarTitle() {
			return APP_NAME;
		},
		SideBarMargin() {
			return { 'margin-left': `${this.$store.getters.appSidebarMargin}px` };
		},
		SideBarWidth() {
			return { 'width': `${this.$store.getters.appSidebarMargin}px` };
		},
		CurrentPath() {
			return this.$route.path;
		},
		DeviceType(){
			return this.$store.getters.appDeviceType;
		},
		Items() {
			return sideBarItems;
		},
	},
	methods: {
		toggleLeftSidenav() {
			this.$refs.leftSidenav.toggle();
		},
		open(ref) {
			this.$store.dispatch('setSidebarMargin', 300)
		},
		close(ref) {
			this.$store.dispatch('setSidebarMargin', 0)
		},
		clickRoute(e, item) {
			if (item.children == undefined) {
				this.$router.push(item.path)
				if(this.$store.getters.appDeviceType == deviceType.PHONE){
					this.$store.dispatch('setSidebarMargin', 0)
					this.toggleLeftSidenav()
				}
			}
		},
	}
}
</script>

