<script>
import ItemOrder from "../components/ItemOrder.vue";
export default {
  name: "order-view",
  data() {
    return {
      data: [
        {
          id: 1,
          code_buy: "98d28ec4-9eb3-4594-96df-05645d4eb441",
          name_buyer: "Didier Arias",
          date_buy: "07/02/2023",
          uid: "hZ1yJmYrTlb77O5QgZOoyX1oZhO2",
          state_buy: true,
          state_preparation: true,
          state_road: false,
          state_delivery: false,
        },
        {
          id: 2,
          code_buy: "98d28ec4-9eb3-4594-96df-05645d4eb441",
          name_buyer: "Aizen Arias",
          date_buy: "04/02/2023",
          uid: "hZ1yJmYrTlb77O5QgZOoyX1oZhO2",
          state_buy: true,
          state_preparation: false,
          state_road: true,
          state_delivery: false,
        },
        {
          id: 2,
          code_buy: "98d28ec4-9eb3-4594-96df-05645d4eb441",
          name_buyer: "Aizen Arias",
          date_buy: "04/02/2023",
          uid: "hZ1yJmYrTlb77O5QgZOoyX1oZhO2",
          state_buy: true,
          state_preparation: false,
          state_road: false,
          state_delivery: true,
        },
      ],
    };
  },

  components: {
    ItemOrder,
  },
};
</script>
<template>
  <div class="container">
    <div class="content-home">
      <h4>Lista pedidos</h4>
      <hr />
    </div>
    <table class="table">
      <thead>
        <tr>
          <th class="col">Codigo compra</th>
          <th class="col">Nombre comprador</th>
          <th class="col">Fecha compra</th>
          <th class="col">Estado compra</th>
          <th class="col">Editar</th>
        </tr>
      </thead>
      <tbody>
        <item-order
          v-for="(list, index) in data"
          :key="index"
          :id="list.id"
          :code_buy="list.code_buy"
          :name_buyer="list.name_buyer"
          :date_buy="list.date_buy"
          :state_buy="list.state_buy"
          :state_preparation="list.state_preparation"
          :state_road="list.state_road"
          :state_delivery="list.state_delivery"
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

.content-home {
  padding: 1rem;
}

.content-home > h4 {
  display: flex;
  margin: auto;
  place-content: center;
}
.content-home > h4 {
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 2rem;
}

.table {
  border-collapse: collapse;
  margin: 25px 0;
  min-width: 400px;
}
.table thead {
  padding: 2rem;
  background-color: #354259;
}

.col {
  color: #ffffff;
  font-weight: 800;
  font-size: 1rem;
  line-height: 2rem;
}
</style>
