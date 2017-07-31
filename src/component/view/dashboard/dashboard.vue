<template>
	<div>
		Dashboard
	</div>
</template>


<script>
export default {
	beforeMount() {
		this.$store.dispatch('setCurrentRoute', '/dashboard');
	},

	mounted() {

	},
	beforeDestroy() {

	},
	destroyed() {

	},
	components: {

	},
	computed: {

	},
	methods: {

	}
}
</script>
