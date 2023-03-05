<script>
export default {
  name: "item-ask-pond",
  props: {
    id: Number,
    code_ask: String,
    type_production: String,
    note: String,
    date_ask: String,
  },
};
</script>

<template>
  <tr class="table-column">
    <th>{{ code_ask }}</th>
    <th>{{ type_production }}</th>
    <th>{{ date_ask }}</th>
    <th>{{ note }}</th>
    <th>
      <router-link
        :to="{ name: 'detail-ask-pond', params: { code_ask } }"
        class="btn-edit"
        >Editar</router-link
      >
    </th>
  </tr>
</template>

<style scoped>
.btn-edit {
  background-color: #fee440;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.btn-edit {
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
  text-decoration: none;
}

.table-column > th {
  padding: 0.5rem;
  margin: 0.5rem;
}

.table-column {
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
}
</style>
