<script>
import AccordionView from "../styles/components/Accordion.vue";
export default {
  name: "detail-order",
  data() {
    return {
      data: [
        {
          code_buy: "acb1b854-c83f-4ba7-8993-152e06db4dfb",
          id: 9,
          category: "Medidor",
          name_product: "Detector de concentración de oxígeno O2 Portatil",
          price: 458565,
          quantity: 1,
        },
        {
          code_buy: "acb1b854-c83f-4ba7-8993-152e06db4dfb",
          id: 4,
          name_product: "Sensor de temperatura",
          price: 10000,
          quantity: 1,
        },
        {
          code_buy: "acb1b854-c83f-4ba7-8993-152e06db4dfb",
          category: "Sensor",
          name_product:
            "Nivel de líquido agua sensor detector electrodos industrial",
          price: 20900,
          quantity: 1,
        },
      ],
    };
  },
  props: {
    code_buy: String,
  },

  components: {
    AccordionView,
  },
};
</script>

<template>
  <div class="container">
    <div class="card-detail-order">
      <div class="content-detail-order">
        <h4>Detalle del pedido</h4>
      </div>
      <div class="flex-column-detail-order">
        <div class="item-detail-order">
          <label>Cambiar estado</label>
          <select class="change-status" arial-label="Default select">
            <option selected>Abrir el seleccionador menu</option>
            <option value="1">En preparacion</option>
            <option value="2">En camino</option>
          </select>
        </div>
        <div class="item-detail-order">
          <label>Nota</label>
          <textarea class="field-text" placelholder="Escribir nota"></textarea>
        </div>
        <div class="flex-accordion">
          <accordion-view :code_buy="code_buy" />
        </div>
        <button type="button" class="btn-change">Cambiar estado</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  place-content: center;
}

.card-detail-order {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.card-detail-order {
  width: 60rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 2px solid #eeeeee;
  box-shadow: 8px 8px 8px #e8eae6;
  padding: 2rem;
}

.content-detail-order {
  padding: 1rem;
}

.content-detail-order > h4 {
  display: flex;
  margin: auto;
  place-content: center;
}
.content-detail-order > h4 {
  font-weight: 800;
  font-size: 2rem;
  line-height: 2rem;
}

.flex-column-detail-order {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.item-detail-order {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item-detail-order {
  border: 2px solid #e8f6ef;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.item-detail-order > label {
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
}

.change-status {
  border-radius: 0.5rem;
  border: none;
  box-shadow: 8px 8px 8px #e8eae6;
  padding: 0.5rem;
}

.field-text {
  border-radius: 0.5rem;
  border: none;
  box-shadow: 8px 8px 8px #e8eae6;
  padding: 0.5rem;
}

.btn-change {
  display: flex;
  margin: auto;
  place-content: center;
}
.btn-change {
  width: 10rem;
  background-color: #ffea20;
  border-radius: 0.5rem;
  border: none;
  padding: 0.7rem;
}

.btn-change {
  font-weight: 600;
  font-size: 1rem;
  line-height: 2rem;
}

.flex-accordion {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
