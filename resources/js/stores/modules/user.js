import * as types from '../mutation-types';

// State
const state = {
	current_user: null,
}
// Getters
const getters = {
	getCurrentUser: state => {
		return state.current_user;
	},
	checkAuthenticated: state => {
		return !_.isEmpty(state.current_user);
	},
}
// Mutations
const mutations = {
	[types.CURRENT_USER]: (state, user) => {
		if (user) {
			state.current_user = user;
		}
	},
}
// Actions
const actions = {
	fetchCurrentUser: ({ commit }) => {
		return new Promise((resolve, reject) => {
			axios.get('/api/user')
			.then(response => {
	            // console.log(response);
                commit(types.CURRENT_USER, response.data);
	            resolve(response);
	        })
			.catch(error => {
	            // console.log(error);
	            reject(error);
	        });
		});
	},
	register: ({ commit }, payload) => {
		return new Promise((resolve, reject) => {
			axios.post('/api/register', payload.user)
			.then(response => {
	            // console.log(response);
	            resolve(response);
	        })
			.catch(error => {
	            // console.log(error);
	            reject(error);
	        });
		});
	},
	logout: ({ commit }) => {
		return new Promise((resolve, reject) => {
			axios.post('/api/logout')
			.then(response => {
	            // console.log(response);
            	commit(types.CURRENT_USER, null)	           
	            resolve(response);
	        })
			.catch(error => {
	            // console.log(error);
	            reject(error);
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