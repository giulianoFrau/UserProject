// app.js
import Vue from 'vue';
import App from './App.vue';
import router from './router'; // imported router.js we created above
import VueSimpleAlert from "vue-simple-alert";
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap';


Vue.use(VueSimpleAlert);
require('./bootstrap');

window.Vue= require('vue');

Vue.component('pagination', require('laravel-vue-pagination'));


new Vue({
    el: '#app',
  	router, // to use router
    render: h => h(App)
});