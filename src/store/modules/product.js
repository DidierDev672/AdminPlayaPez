import * as types from "../mutation-types";
import API from "../../api";

const state = () => ({
  products: [],
  fetchingData: true,
  error: null,
});

const getters = {
  getListbyProducts: (state) => (code_product) => {
    return Object.values(state.products).filter(
      (list) => list.code_product === code_product
    );
  },
};

const actions = {
  fetchProducts({ commit }) {
    commit(types.FETCH_PRODUCTS_REQUEST);

    API.getProducts()
      .then((result) =>
        commit(types.FETCH_PRODUCTS_SUCESS, { products: result })
      )
      .catch((error) => commit(types.FETCH_PRODUCTS_FAILURE, { error }));
  },

  addProduct({ commit }, { products }) {
    commit(types.FETCH_PRODUCTS_REQUEST);
    API.postProduct(products).then((result) =>
      commit(types.ADD_PRODUCT, { result })
    );
  },
};

const mutations = {
  [types.FETCH_PRODUCTS_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.FETCH_PRODUCTS_SUCESS](state, { products }) {
    state.fetchProducts = false;
    state.error = null;
    state.products = { ...products };
  },

  [types.FETCH_PRODUCTS_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },

  [types.ADD_PRODUCT](state, { products }) {
    state.products = { ...products };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
