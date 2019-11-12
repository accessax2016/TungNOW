/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue';
import routers from './routers/routers';
import vSelect from 'vue-select';
import Auth from './packages/auth';
import stores from './stores/index';
import Modal from './packages/modal';
import Spinner from './packages/spinner';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('v-select', vSelect);
Vue.use(Auth);
Vue.use(Modal);
Vue.use(Spinner);

library.add(faShoppingCart)
library.add(faPlus);
library.add(faTrashAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.filter('number', (value) => {
	return (+value).toLocaleString();
})

routers.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.guest)) {
		if (Vue.auth.isAuthenticated()) {
			next({ name: 'home' });
		}
		else {
			next();
		}
	}
	else {
		if (Vue.auth.isAuthenticated()) {
			next();
		}
		else {
			next({ name: 'login' });
		}
	}
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
	el: '#app',
	router: routers,
	store: stores
});

// Vue.config.devtools = false
// Vue.config.debug = false
// Vue.config.silent = true

export default app;
