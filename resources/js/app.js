/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';
import { Form, HasError, AlertError } from 'vform';

import Gate from "./Gate";
Vue.prototype.$gate = new Gate(window.user); //prototype create for Gate to use anywhere

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

//vue-pagination
Vue.component('pagination', require('laravel-vue-pagination'));

import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Sweet Alert2
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
window.Toast = Toast;

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '4px'
})

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue').default},
    // { path: '/developer', component: require('./components/Developer.vue').default},
    { path: '/users', component: require('./components/Users.vue').default},
    { path: '/profile', component: require('./components/Profile.vue').default},
    { path: '/airTicket', component: require('./components/airTicketing.vue').default},
    { path: '/visaProcess', component: require('./components/visaProcess.vue').default},
    { path: '*', component: require('./components/notFound.vue').default}
]

const router = new VueRouter({
    mode: 'history',
    routes, //short for 'routes: routes'
    linkActiveClass: 'active'
})

Vue.filter('upperText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter('myDate', function(created){
    // return moment(created).format('LTS'); 
    return moment(created).format("MMM Do YY"); 
});

// let Fire = new Vue();
// window.Fire = Fire;
window.Fire = new Vue();


Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);

Vue.component(
    'not-found',
    require('./components/notFound.vue').default
);

const app = new Vue({
    el: '#app',
    router,
    data: {
        search: '',
    },
    methods: {
        searchit: _.debounce(() => {
            Fire.$emit('searching');
        }, 1000),

        printme() {
            window.print();
        }
    }
});
