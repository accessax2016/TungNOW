import Vue from 'vue';
import VueRouter from 'vue-router';


import App from '../App.vue';
import MainContentVue from '../components/layouts/MainContent.vue';
import BillContainerVue from '../components/pages/bills/BillContainer.vue';
import ProductListVue from '../components/pages/products/ProductList.vue';
import LoginVue from '../components/pages/auth/Login.vue';
import RegisterVue from '../components/pages/auth/Register.vue';
import OrderListVue from '../components/pages/orders/OrderList.vue';

Vue.use(VueRouter);

const routers = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: App,
            children: [
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
                    path: '',
                    component: MainContentVue,
                    children: [
                        {
                            path: '',
                            name: 'home',
                            redirect: 'bills'
                        },
                        {
                            path: 'bills',
                            component: BillContainerVue,
                            name: 'bills'
                        },
                        {
                            path: 'products',
                            component: ProductListVue,
                            name: 'products'
                        },
                        {
                            path: 'orders',
                            component: OrderListVue,
                            name: 'orders'
                        }
                    ]
                }
            ]
        },

    ]
});

export default routers;