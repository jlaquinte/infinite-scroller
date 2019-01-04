/** 
  * @desc entry file into the infinte-scroller VueJS app
  * @author Joe Laquinte • jlaquinte@gmail.com
*/


import './assets/scss/style.scss' // global styles

import Vue from 'vue'
import App from './App.vue'
import Vue2TouchEvents from 'vue2-touch-events'


/* Initialize Vue2TouchEvents for swipe events */
Vue.use(Vue2TouchEvents, {
    disableClick: false,
    touchClass: '',
    tapTolerance: 10,
    swipeTolerance: 100,
    longTapTimeInterval: 400
})


/* Create VueJS instance and bind to app elm */
new Vue({
  el: '#app',
  render: h => h(App)
})
