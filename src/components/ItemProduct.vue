<script>
export default {
  name: "item-product",
  props: {
    id: Number,
    name_product: String,
    category: String,
    description: String,
    price: Number,
    date_entry: String,
  },
};
</script>

<template>
  <tr class="col-tr">
    <th>{{ id }}</th>
    <th>{{ name_product }}</th>
    <th>{{ category }}</th>
    <th>{{ price }}</th>
    <th>{{ date_entry }}</th>
    <th>
      <button type="button" class="btn-see-detail">Ver detalle</button>
    </th>
    <th>
      <button type="button" class="btn-delete">Eliminar</button>
    </th>
  </tr>
</template>

<style scoped>
.btn-see-detail {
  background-color: #fee440;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.btn-see-detail {
  font-weight: 700;
}

.btn-delete {
  background-color: #c1121f;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.col-tr {
  background-color: #ffffff;
  border-radius: 0.7rem;
  border: 2px solid #fbfbfb;
  box-shadow: 4px 4px 4px #ced4da;
}
</style>
