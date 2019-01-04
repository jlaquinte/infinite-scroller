<!--
  --@desc Class to make an API call to the message service,
  --add new messages to our list, and manage scroll events 
  --to ensure our list is infinite
-->

<template>
	<main>
		<section class="message-container">
			<ul class="messages">
				<li 
					v-for="(message, index) in messages"
					>
						<message 
							:key="message.id"
							:id="index"
							:authorName="message.author.name"
							:avatarUrl="baseUrl+message.author.photoUrl"
							:content="message.content"
							:timePosted="message.updated"
							:removeMessage="removeMessage"
						>
						</message>
				</li>
			</ul>
		</section>
	</main>
</template>

<script>
	import axios from 'axios'
	import Message from './Message.vue'
	import isMobile from 'ismobilejs'

	export default{
		data(){
			return{
				messages: [],
				pageToken: '',
				messageLimit: isMobile.any ? 10 : 30, // load only 10 posts on mobile for performamnce
				windowYOffset: 800,
				readyForNextMessages: true,
				baseUrl: 'https://message-list.appspot.com'			
			}
		},
		methods: {
			/**
			* Get messages from the message API and push them into 
			* our reactive array
			* @return {}
			*/
			getMessages(){
				let apiPath = `/messages?pageToken=${this.pageToken}&limit=${this.messageLimit}`

				axios.get(`${this.baseUrl}${apiPath}`)
				.then(response =>{
					//store last pagetoken to keep put place
					this.pageToken = response.data.pageToken
					this.messages.push(...response.data.messages)
					this.readyForNextMessages = true
					//console.log(this.messages[0])
				})
			},
			/**
			* Handler that inits the onscroll event
			* @return {}
			*/
			scrollHandler(){
				let self = this
				window.onscroll = (event) =>{
					self.checkViewportHeight()
				}
			},
			/**
			* Check the total percentage of the page height we've already scrolled
			* and get new message when we're close to the bottom
			* param {Event} - optional scroll event data
			* @return {}
			*/
			checkViewportHeight(event = null){
				let percentageThreshhold = 0.80
				let scrollPercentage = ((window.innerHeight + window.scrollY) / document.body.scrollHeight )
					
					if (scrollPercentage > percentageThreshhold && this.readyForNextMessages) {
						this.readyForNextMessages = false
						this.getMessages()
					}
			},
			/**
			* Remove a message from our reactive array
			* @param {Number} - Index to remove
			* @return {}
			*/
			removeMessage(index){
				this.messages.splice(index, 1)
				if( this.messages.length < 10)
					this.getMessages()
			}
		},
		beforeMount(){
			//get message before we mount anything
			this.getMessages()
		},
		mounted(){
			//init scroll handler
			this.scrollHandler()
		},
		components:{
			Message
		}
	}
</script>

<style scoped lang="scss">
	.message-container{
		margin-top: 80px;
		padding: 0 15px;
		background-color: #eeeeee;

		.messages{	
			max-width: 550px;
			margin: 0 auto;
			
			li:first-child{
				padding-top: 16px;
			}
		}
	}
</style>