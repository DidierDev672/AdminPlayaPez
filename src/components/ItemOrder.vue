<script>
export default {
  name: "item-order",
  data() {
    return {};
  },
  props: {
    id: Number,
    code_buy: String,
    name_buyer: String,
    date_buy: String,
    state_buy: Boolean,
    state_road: Boolean,
    state_preparation: Boolean,
    state_delivery: Boolean,
  },

  computed: {
    condition_buy() {
      if (this.state_buy === true && this.state_preparation === true) {
        return "En preparacion";
      }

      if (this.state_buy === true && this.state_road === true) {
        return "En camino";
      }

      if (this.state_buy === true && this.state_delivery === true) {
        return "Entrega";
      }

      return "";
    },
  },
};
</script>

<template>
  <tr class="col-tr">
    <th>{{ code_buy }}</th>
    <th>{{ name_buyer }}</th>
    <th>{{ date_buy }}</th>
    <th>
      <span
        :class="{
          preparation: state_preparation,
          road: state_road,
          delivery: state_delivery,
        }"
      >
        {{ condition_buy }}
      </span>
    </th>
    <th>
      <button type="button" class="btn-edit">Editar</button>
    </th>
  </tr>
</template>

<style scoped>
.col-tr > th {
  background-color: #FFFFFF;
  border-radius: 0.7rem;
  border: 2px solid #fbfbfb;
  box-shadow: 4px 4px 4px #F7FBFC;
}

.btn-edit {
  width: 5rem;
  background-color: #f1f864;
  border: none;
  border-radius: 0.5rem;
  padding: 0.3rem;
}

.btn-edit {
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
}

.preparation {
  background-color: #fffda2;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.road {
  background-color: #b8fff9;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.delivery {
  background-color: #99F3BD;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}
</style>
