<script>
import ItemAskPond from "../components/ItemAskPond.vue";
export default {
  name: "pond-ask",
  data() {
    return {
      data: [
        {
          id: 1,
          code_ask: "0987Y",
          type_production: "INSUMO",
          note: "Me gustaria, que la peticion sea lo mas pronto posible",
          date_ask: "09/02/2023",
        },
        {
          d: 2,
          code_ask: "0345678",
          type_production: "RENDIMIENTO",
          note: "Me gustaria, que la peticion sea lo mas pronto posible",
          date_ask: "13/02/2023",
        },
      ],
    };
  },
  components: {
    ItemAskPond,
  },
};
</script>

<template>
  <div class="container">
    <div class="content-ask-pond">
      <h3>Solicutidudes a estanques</h3>
      <div class="content-query-ask">
        <input
          type="search"
          class="text-field"
          placeholder="Codigo de la solicitud"
        />
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th class="col">Codigo solicitud</th>
          <th class="col">Tipo de produccion</th>
          <th class="col">Fecha solicitud</th>
          <th class="col">Nota</th>
          <th class="col">Editar</th>
        </tr>
      </thead>
      <tbody>
        <item-ask-pond
          v-for="(list, index) in data"
          :key="index"
          :id="list.index"
          :code_ask="list.code_ask"
          :type_production="list.type_production"
          :note="list.note"
          :date_ask="list.date_ask"
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

.content-ask-pond > h3 {
  display: flex;
  place-content: center;
}

.content-ask-pond > h3 {
  font-weight: 900;
  font-size: 2rem;
  line-height: 2rem;
}

.table {
  border-collapse: collapse;
  margin: 25px 0;
  padding: 1.5rem;
}

.table thead {
  padding: 2rem;
  background-color: #354259;
  min-width: 5rem;
}

.col {
  color: #ffffff;
  font-weight: 800;
  font-size: 1rem;
  line-height: 2rem;
}

.content-query-ask {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0.5rem;
}

.text-field {
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  box-shadow: 8px 8px 8px #dee2e6;
  text-align: center;
  padding: 0.5rem;
}
</style>
