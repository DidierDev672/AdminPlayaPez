import { createStore, createLogger } from "vuex";
import product from "./modules/product";
import order from "./modules/order";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    product,
    order,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
