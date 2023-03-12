<script>
export default {
  name: "item-order",
  data() {
    return {};
  },
  props: {
    id: String,
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

    convert() {
      let convert = { ...this.date_buy };
      let myDate = new Date(convert.seconds * 1000);

      return myDate;
    },
  },
};
</script>

<template>
  <tr class="col-tr">
    <th>{{ code_buy }}</th>
    <th>{{ name_buyer }}</th>
    <th>{{ convert }}</th>
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
      <router-link
        class="btn-edit"
        :to="{ name: 'detail-order', params: { code_buy } }"
        >Editar</router-link
      >
    </th>
  </tr>
</template>

<style scoped>
.col-tr > th {
  background-color: #ffffff;
  border-radius: 0.7rem;
  border: 2px solid #fbfbfb;
  box-shadow: 4px 4px 4px #f7fbfc;
}

.btn-edit {
  width: 5rem;
  background-color: #fee440;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.btn-edit {
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
}

.preparation {
  background-color: #f8f988;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.road {
  background-color: #b3ffae;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.delivery {
  background-color: #76c893;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}
</style>
