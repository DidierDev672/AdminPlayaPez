import * as types from "../mutation-types";
import API from "../../api";

const state = () => ({
  orders: [],
  detail: [],
  fetchingData: true,
  error: null,
});

const getters = {
  getListbyOrders: (state) => (code_buy) => {
    return Object.values(state.orders).filter(
      (list) => list.code_buy === code_buy
    );
  },

  getListbyDetail: (state) => (code_buy) => {
    return Object.values(state.detail).filter(
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

  fetchDetail({ commit }) {
    commit(types.FETCH_DETAIL_REQUEST);

    API.getDetailOrder()
      .then((result) => commit(types.FETCH_DETAIL_SUCESS, { detail: result }))
      .catch((error) => commit(types.FETCH_DETAIL_FAILURE, { error }));
  },

  updateStateOrder({ commit, id, state_order, note }) {
    commit(types.FETCH_ORDER_REQUEST);

    API.updateOrders({ id, state_order, note });
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

  [types.FETCH_DETAIL_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.FETCH_DETAIL_SUCESS](state, { detail }) {
    state.fetchDetail = false;
    state.error = null;
    state.detail = { ...detail };
  },

  [types.FETCH_DETAIL_FAILURE](state, { error }) {
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
