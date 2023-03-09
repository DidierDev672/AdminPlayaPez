<script>
import { mapState } from "vuex";
import ItemProduct from "../components/ItemProduct.vue";
export default {
  name: "query-product",
  data() {
    return {};
  },
  components: {
    ItemProduct,
  },

  computed: {
    ...mapState({
      data: (state) => state.product.products,
    }),
  },

  created() {
    this.$store.dispatch("product/fetchProducts");
  },
};
</script>

<template>
  <div class="container">
    <div class="content-query-product">
      <h4>Lista de productos</h4>
      <div class="border-query">
        <input type="search" class="text-field" placeholder="Codigo producto" />
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th class="col">Codigo Producto</th>
          <th class="col">Nombre producto</th>
          <th class="col">Categoria</th>
          <th class="col">Precio</th>
          <th class="col">Fecha ingreso</th>
          <th class="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <item-product
          v-for="(list, index) in data"
          :key="index"
          :id="list.id"
          :name_product="list.name_product"
          :category="list.category"
          :price="list.price"
          :date_entry="list.date_entry"
          :description="list.description"
        />
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  place-content: center;
}
.content-query-product {
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
}

.content-query-product > h4 {
  display: flex;
  place-content: center;
}

.content-query-product > h4 {
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.5rem;
}

.text-field {
  width: 100%;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 8px 8px 8px #dee2e6;
  text-align: center;
}

.text-field {
  display: flex;
  margin: auto;
}
.border-query {
  border-radius: 0.5rem;
  border: 2px solid #dee2e6;
  padding: 1.5rem;
}

.table {
  border-collapse: collapse;
  margin: 25px 0;
  min-width: 400px;
}

.table thead {
  padding: 2rem;
  background-color: #354259;
  border-radius: 5rem;
}

.col {
  color: #ffffff;
  font-weight: 800;
  font-size: 1rem;
  line-height: 2rem;
}
</style>
