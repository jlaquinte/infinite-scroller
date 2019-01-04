<!--
  --@desc Tmeplate class to display the status bar
-->

<template>
	<div class="nav-status-bar">
		<img src="../assets/images/wifi.png" class="status-icon wifi">
		<img src="../assets/images/reception.png" class="status-icon reception">
		<img src="../assets/images/battery.png" class="status-icon battery">
		<p class='current-time'>{{currTime}}</p>
	</div>
</template>

<script>
	import moment from 'moment'
	export default{
		data (){
			return{ 
				currTime: ''
			}
		},
		methods:{
			/**
			* Get the current time of day and display in the
			* status bar
			* @return {}
			*/
			getCurrTime(){
				console.log('hello')
				return 'hello'
			}
		},
		beforeMount(){
			//get initial time before the first mount
			let self = this
			setInterval(function(){
				self.currTime = moment().format('LT')
			},1000)
			
		}
		
	}
</script>

<style>
	.nav-status-bar{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		z-index: 99999;
		position: absolute;
		width: 100%;
		height: 24px;
		background-color: rgba(0,0,0,0.2);
	}
	.current-time{
		align-self: center;
		color: white;
		font-size: 13px;
		margin: 0 10px 0 10px;
	}
	.status-icon.wifi{
		align-self: center;
		margin: 0;
		width: 19px;
		height: 14px;
	}
	.status-icon.reception{
		align-self: center;
		margin: 0 0 0 10px;
		width: 12px;
		height: 12px;
	}
	.status-icon.battery{
		align-self: center;
		margin: 0 0 0 10px;
		width: 8px;
		height: 13px;
	}
</style>