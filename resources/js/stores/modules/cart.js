import * as types from '../mutation-types';
import axiosInstance from '../../packages/http/axiosInstance';

// State
const state = {
    cart: {
        products: []
    }
}
// Getters
const getters = {
    getProductsInCart: state => {
        return state.cart.products;
    }
}
// Mutations
const mutations = {
    [types.CART_ADD]: (state, product) => {
        state.cart.products.push(product);
    },
    [types.CART_EDIT]: (state, product) => {
        state.cart.products.splice(state.cart.products.map(x => x.id).indexOf(product.id), 1, product);
    },
    [types.CART_DELETE]: (state, id) => {
        state.cart.products.splice(state.cart.products.map(x => x.id).indexOf(id), 1);
    },
    [types.CART_REMOVE]: (state) => {
        state.cart.products = [];
    }
}
// Actions
const actions = {
    addProductToCart: ({ commit }, product) => {
        commit(types.CART_ADD, product);
    },
    editProductInCart: ({ commit }, product) => {
        commit(types.CART_EDIT, product);
    },
    deleteProductInCart: ({ commit }, id) => {
        commit(types.CART_DELETE, id);
    },
    removeCart: ({ commit }) => {
        commit(types.CART_REMOVE);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}