import * as types from '../mutation-types';
import axiosInstance from '../../packages/http/axiosInstance';

// State
const state = {
	current_user: null,
	isShowGiftBox: false
}
// Getters
const getters = {
	getCurrentUser: state => {
		return state.current_user;
	},
	checkAuthenticated: state => {
		return !_.isEmpty(state.current_user);
	},
	isShowGiftBox: state => {
		return true;
	}
}
// Mutations
const mutations = {
	[types.CURRENT_USER]: (state, user) => {
		state.current_user = user;
	},
	[types.SHOW_GIFT_BOX]: (state) => {
		state.isShowGiftBox = true;
	},
}
// Actions
const actions = {
	fetchCurrentUser: ({ commit }) => {
		return new Promise((resolve, reject) => {
			axiosInstance.get('/api/user')
			.then(response => {
	            // console.log(response);
                commit(types.CURRENT_USER, response.data);
	            resolve(response);
	        })
			.catch(error => {
	            // console.log(error);
	            reject(error.response.data);
	        });
		});
	},
	register: ({ commit }, payload) => {
		return new Promise((resolve, reject) => {
			axiosInstance.post('/api/register', payload.user)
			.then(response => {
	            // console.log(response);
	            resolve(response);
	        })
			.catch(error => {
	            // console.log(error);
	            reject(error.response.data);
	        });
		});
	},
	logout: ({ commit }) => {
		return new Promise((resolve, reject) => {
			axiosInstance.post('/api/logout')
			.then(response => {
	            // console.log(response);
            	commit(types.CURRENT_USER, null)	           
	            resolve(response);
	        })
			.catch(error => {
	            // console.log(error);
	            reject(error.response.data);
	        });
		});

	},
	updateShowGiftBox: ({ commit }) => {
		commit(types.SHOW_GIFT_BOX);
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}