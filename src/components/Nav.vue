<!--
  --@desc Template class for holding the 'nav status bar' and the 'nav app bar'
-->

<template>
	<nav class="main-nav">
		<nav-status-bar></nav-status-bar>
		<nav-app-bar></nav-app-bar>
	</nav>
</template>

<script>
	import navAppBar from './NavAppBar.vue'
	import navStatusBar from './NavStatusBar.vue'
	export default{
		components:{
			navAppBar,
			navStatusBar
		}
	}
</script>

<style scoped>
	.main-nav{
		z-index: 99999;
		height: 80px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		box-shadow: -1px 4px 13px 0px #969496;
	}
</style>