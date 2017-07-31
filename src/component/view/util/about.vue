<template>
	<div>
		About
	</div>
</template>


<script>
export default {
	beforeMount() {
		this.$store.dispatch('setCurrentRoute', '/about');
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
