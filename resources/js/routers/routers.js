import Vue from 'vue';
import VueRouter from 'vue-router';


import App from '../App.vue';
import BillListVue from '../components/pages/bills/BillList.vue';
import ProductListVue from '../components/pages/products/ProductList.vue';
import LoginVue from '../components/pages/auth/Login.vue';
import RegisterVue from '../components/pages/auth/Register.vue';

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
                    name: 'home',
                    redirect: 'bills'
                },
                {
                    path: 'login',
                    component: LoginVue,
                    name: 'login',
                    meta: {
                        guest: true
                    }
                },
                {
                    path: 'register',
                    component: RegisterVue,
                    name: 'register',
                    meta: {
                        guest: true
                    }
                },
                {
                    path: 'bills',
                    component: BillListVue,
                    name: 'bills'
                },
                {
                    path: 'products',
                    component: ProductListVue,
                    name: 'products'
                },
            ]
        },
        
    ]
});

export default routers;