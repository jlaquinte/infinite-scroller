<!--
  --@desc Template class for each message
-->

<template>
	<article 
		class="message"
		:class="{animateOutMessage}"
		v-touch:swipe.right="animateOut">
			<img class="avatar" :src="avatarUrl" alt="profile avatar">
			<h2 class="author-name">{{authorName}}</h2>
			<p class="time-posted">{{relativeTime}}</p>
			<p class="message-detail">{{content}}</p>
	</article>
</template>

<script>
	import moment from 'moment'

	export default{
		props:['authorName', 'avatarUrl', 'content', 'timePosted', 'id', 'removeMessage'],
		data(){
			return{
				relativeTime: '',
				'animateOutMessage': false
			}
		},
		methods:{
			/**
			* Format the date of the post into time
			* relative of now
			* @param {String} - date string of the post
			* @return {}
			*/
			formatDate(timePosted){
				let date = moment(timePosted).format('YYYYMMDD')
				this.relativeTime = moment(date, "YYYYMMDD").fromNow()
			},
			/**
			* Start the swipe animation for
			* removing messages
			* @return {}
			*/		
			animateOut(){
				this.animateOutMessage = true
				setTimeout(()=>{
					this.removeMessage(this.id)	
				}, 250)
			}
		},
		created(){
			// great date as soon as the Vue object is created
			this.formatDate(this.timePosted)
		}
	}
</script>

<style scoped lang="scss">
	.message{
		contain: layout;
		width: 100%;
		background-color: #fff;
		padding: 16px 18px;
		margin: 9px 0; 
		border-radius: 3px;
		box-shadow: 0px 3px 5px 0px #9c9c9c;
		clear: both;
		transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);

		&.animateOutMessage{
			opacity: 0;
			transform: translateX(100%);
		}
		.avatar{
			width: 42px;
			height: 42px;
			border-radius: 50%;
			float: left;
			margin: 0px 17px 0px 0px;
		}
		.author-name{
			font-size: 14px;
			padding-bottom: 6px;
		}
		.time-posted{
			font-size: 12px;
		}
		.message-detail{
			font-size: 14px;
			margin-top: 20px;
			line-height: 22px;
		}
	}
</style>