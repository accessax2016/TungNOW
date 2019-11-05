import * as types from '../mutation-types';

// State
const state = {
	products: [],
}
// Getters
const getters = {
	getProductList: state => {
		return state.products;
	},
}
// Mutations
const mutations = {
	[types.PRODUCT_LIST]: (state, products) => {
		state.products = products;
    },
    [types.PRODUCT_STORE]: (state, product) => {
		state.products.unshift(product);
    },
    [types.PRODUCT_UPDATE]: (state, product) => {
        state.products.splice(state.products.map(x => x.id).indexOf(product.id), 1, product);
    },
    [types.PRODUCT_DESTROY]: (state, id) => {
        state.products.splice(state.products.map(product => product.id).indexOf(id), 1);
	},
}
// Actions
const actions = {
	fetchProductList: ({ commit }) => {
		return new Promise((resolve, reject) => {
			axios.get('/api/products')
			.then(response => {
	            // console.log(response);
                commit(types.PRODUCT_LIST, response.data.data);
	            resolve(response);
	        })
			.catch(error => {
	            // console.log(error);
	            reject(error.response.data);
	        });
		});
    },
    fetchProductStore: ({ commit }, payload) => {
		return new Promise((resolve, reject) => {
			axios.post('/api/products', payload.product)
			.then(response => {
                // console.log(response);
                commit(types.PRODUCT_STORE, response.data.data);
	            resolve(response);
	        })
			.catch(error => {
	            // console.log(error);
	            reject(error.response.data);
	        });
		});
    },
    fetchProductUpdate: ({ commit }, payload) => {
		return new Promise((resolve, reject) => {
			axios.put('/api/products/' + payload.id, payload.product)
			.then(response => {
                // console.log(response);
                commit(types.PRODUCT_UPDATE, response.data.data);
	            resolve(response);
	        })
			.catch(error => {
	            // console.log(error);
	            reject(error.response.data);
	        });
		});
    },
    fetchProductDestroy: ({ commit }, payload) => {
		return new Promise((resolve, reject) => {
			axios.delete('/api/products/' + payload.id)
			.then(response => {
                // console.log(response);
                commit(types.PRODUCT_DESTROY, payload.id);
	            resolve(response);
	        })
			.catch(error => {
	            // console.log(error);
	            reject(error.response.data);
	        });
		});
	},
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}