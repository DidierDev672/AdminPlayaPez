import * as types from "../mutation-types";
import API from "../../api";

const state = () => ({
  orders: [],
  fetchingData: true,
  error: null,
});

const getters = {
  getListbyOrders: (state) => (code_buy) => {
    return Object.values(state.orders).filter(
      (list) => list.code_buy === code_buy
    );
  },
};

const actions = {
  fetchOrders({ commit }) {
    commit(types.FETCH_ORDER_REQUEST);

    API.getOrder()
      .then((result) => commit(types.FETCH_ORDER_SUCESS, { orders: result }))
      .catch((error) => commit(types.FETCH_ORDER_FAILURE, { error }));
  },
};

const mutations = {
  [types.FETCH_ORDER_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.FETCH_ORDER_SUCESS](state, { orders }) {
    state.fetchingData = false;
    state.error = null;
    state.orders = { ...orders };
  },

  [types.FETCH_ORDER_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
