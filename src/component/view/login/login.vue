<template>
	<div class="login-div">
		<md-card>
			<md-card-area>
				<md-card-header>
					<div class="md-title">Login</div>
				</md-card-header>
	
				<md-card-content>
					<form style="width:350px">
						<md-input-container>
							<md-icon>person</md-icon>
							<label>Username</label>
							<md-input type="text" v-model="payload.username" ref="username"></md-input>
						</md-input-container>
	
						<md-input-container>
							<md-icon>remove_red_eye</md-icon>
							<label>Password</label>
							<md-input type="password" v-model="payload.password" ref="password"></md-input>
						</md-input-container>
						<md-checkbox v-model="payload.rememberMe" class="md-primary">Remember Me</md-checkbox>
					</form>
	
				</md-card-content>
			</md-card-area>
	
			<md-card-actions>
				<md-button @click="login">LOGIN</md-button>
			</md-card-actions>
		</md-card>
	
		<md-dialog-confirm ref="confirm_dailog" :md-title="error.title" :md-content-html="error.message" :md-ok-text="error.okText" :md-cancel-text="error.cancelText" @open="onOpen" @close="onClose">
		</md-dialog-confirm>
	</div>
</template>


<script>

export default {
	beforeMount() {
		this.$store.dispatch('setSidebarMargin', 0);
		this.$store.dispatch('setCurrentRoute', '/login');
	},
	mounted() {
		if (this.$auth.redirect()) {
			this.redirect = this.$auth.redirect().from.name
		}
	},
	beforeDestroy() {

	},
	destroyed() {

	},

	data() {
		return {
			payload: {
				username: '',
				password: '',
				rememberMe: false,
				redirect: ''
			},
			error: {
				title: 'Something went wrong',
				message: 'All fields are required. Fill in all details before login',
				okText: 'OK',
				cancelText: 'CANCEL'
			}
		}
	},
	components: {

	},
	computed: {

	},
	methods: {
		openDialog() {
			this.$refs.confirm_dailog.open();
		},
		closeDialog() {
			this.$refs.confirm_dailog.close();
		},
		onOpen() {

		},
		onClose(type) {

		},
		login() {
			const { username, password, rememberMe, redirect } = this.payload;
			const _redirect = (redirect != null && redirect != '') ? redirect : '/dashboard';
			if (username && password && password.length > 5) {
				this.$store.dispatch('setIsProgressVisible', true);
				this.$auth.login({
					headers: {
						'Content-Type': 'application/json'
					},
					data: {
						username,
						password
					},
					rememberMe: rememberMe,
					redirect: _redirect,
					success(res) {
						this.$store.dispatch('setIsProgressVisible', false);
					},
					error(error) {
						this.$store.dispatch('setIsProgressVisible', false);
					}
				})
			} else {
				this.openDialog();
			}
		}
	}
}
</script>


<style>
.login-div {
	max-width: 400px;
	margin: auto;
	margin-top: 100px;
}
</style>



