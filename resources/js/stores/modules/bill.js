import * as types from '../mutation-types';

// State
const state = {
    bill: {
        id: 0,
        orders: [],
        date: ''
    },
    disabled: false
}
// Getters
const getters = {
    getBillToday: state => {
        return state.bill;
    },
    getOrdersToday: state => {
        return state.bill.orders;
    },
    getBillDisabled: state => {
        return state.disabled;
    }
}
// Mutations
const mutations = {
    [types.BILL_TODAY]: (state, bill) => {
        state.bill = bill;
    },
    [types.ORDER_ADD]: (state, order) => {
		state.bill.orders.unshift(order);
    },
    [types.ORDER_EDIT]: (state, order) => {
        state.bill.orders.splice(state.bill.orders.map(x => x.id).indexOf(order.id), 1, order);
    },
    [types.ORDER_DELETE]: (state, id) => {
        state.bill.orders.splice(state.bill.orders.map(order => order.id).indexOf(id), 1);
    },
    [types.BILL_DISABLED]: (state, disabled) => {
        state.disabled = disabled;
    },
    [types.BILL_STORE]: (state, bill) => {
        state.bill = bill;
    },
}
// Actions
const actions = {
    fetchBillToday: ({ commit }) => {
        return new Promise((resolve, reject) => {
            axios.get('/api/bills?pageSize=1&pageNumber=1')
                .then(response => {
                    // console.log(response);
                    const data = response.data.data;
                    commit(types.BILL_TODAY, data.length > 0 ? data[0] : []);
                    resolve(response);
                })
                .catch(error => {
                    // console.log(error);
                    reject(error.response.data);
                });
        });
    },
    fetchBillStore: ({ commit }, payload) => {
		return new Promise((resolve, reject) => {
			axios.post('/api/bills', payload.bill)
			.then(response => {
                // console.log(response);
                commit(types.BILL_STORE, response.data.data);
	            resolve(response);
	        })
			.catch(error => {
	            // console.log(error);
	            reject(error.response.data);
	        });
		});
    },
    fetchOrderStore: ({ commit }, payload) => {
		return new Promise((resolve, reject) => {
			axios.post('/api/orders', payload.order)
			.then(response => {
                // console.log(response);
                commit(types.ORDER_ADD, response.data.data);
	            resolve(response);
	        })
			.catch(error => {
	            // console.log(error);
	            reject(error.response.data);
	        });
		});
    },
    fetchOrderUpdate: ({ commit }, payload) => {
		return new Promise((resolve, reject) => {
			axios.put('/api/orders/' + payload.id, payload.order)
			.then(response => {
                // console.log(response);
                commit(types.ORDER_EDIT, response.data.data);
	            resolve(response);
	        })
			.catch(error => {
	            // console.log(error);
	            reject(error.response.data);
	        });
		});
    },
    fetchOrderDestroy: ({ commit }, payload) => {
		return new Promise((resolve, reject) => {
			axios.delete('/api/orders/' + payload.id)
			.then(response => {
                // console.log(response);
                commit(types.ORDER_DELETE, payload.id);
	            resolve(response);
	        })
			.catch(error => {
	            // console.log(error);
	            reject(error.response.data);
	        });
		});
    },
    setDisabledBill: ({ commit }, disabled) => {
        commit(types.BILL_DISABLED, disabled);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}