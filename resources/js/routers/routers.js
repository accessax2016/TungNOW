import Vue from 'vue';
import VueRouter from 'vue-router';


import App from '../App.vue';
import ExampleComponent from '../components/ExampleComponent.vue';

Vue.use(VueRouter);

const routers = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            component: App, 
            children: [
                {
                    path: '',
                    component: ExampleComponent,
                    name: 'home'
                },
            ]
        }
    ]
});

export default routers;