<!--
  --@desc Tmeplate class to display the app bar
-->

<template>
	<div class="nav-app-bar">
		<img src="../assets/images/hamburger_menu.svg" class="burger-menu">
		<h1 class="page-title">{{pageTitle}}</h1>		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				pageTitle: 'Messages'
			}
		}
	}
</script>

<style scoped>
	.nav-app-bar{
		display: flex;
		flex-direction: row;
		background-color: #673ab7;
		height: 100%;
		color: #fff;
		position: relative;
	}
	.burger-menu{
		width: 18px;
		height: 16px;
		align-self: center;
		margin: 19px 36px 0 19px;
	}
	.page-title{
		font-size: 20px;
		align-self: center;
		margin: 19px 0 0 0;
		letter-spacing: 0.05em;
	}
</style>