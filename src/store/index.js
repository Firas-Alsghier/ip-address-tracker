import { createStore } from 'vuex';
import axios from 'axios';
export default createStore({
  state: {
    ipData: '',
  },
  getters: {},
  mutations: {
    UPDATE_DATA(state, val) {
      state.ipData = val;
    },

    UPDATE_DATA_FROM_INPUT(state, val) {
      state.ipData = '';
      state.ipData = val;
    },
  },
  actions: {
    // fetchIp({ commit }) {
    //   axios.get('https://geo.ipify.org/api/v2/country,city?apiKey=at_qVrlBkUa3RkFlrx7sh0vGlG6DFXXr').then((res) => {
    //     commit('UPDATE_DATA', res);
    //   });
    // },

    getInputIp({ commit }, val) {
      axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_O8H1w6YQp92vMea55P1RNV48oeAS9&ipAddress=${val}`).then((res) => {
        commit('UPDATE_DATA_FROM_INPUT', res);
      });
    },
  },
  modules: {},
});
