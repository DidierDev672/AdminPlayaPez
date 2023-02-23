<script>
import ItemAccordion from "./ItemAccordion.vue";
export default {
  name: "accordion-view",
  data() {
    return {
      data: [
        {
          id: 9,
          code_buy: "acb1b854-c83f-4ba7-8993-152e06db4dfb",
          category: "Medidor",
          name_product: "Detector de concentración de oxígeno O2 Portatil",
          price: 458565,
          quantity: 1,
          description:
            "El detector de oxígeno portátil es un tipo de instrumento de seguridad esencial que puede detectar continuamente la concentración de oxígeno en el entorno de trabajo.",
        },
        {
          id: 4,
          code_buy: "acb1b854-c83f-4ba7-8993-152e06db4dfb",
          category: "Sensor",
          name_product: "Sensor de temperatura",
          price: 20900,
          quantity: 1,
          description:
            "Nivel de líquido agua sensor detectar electrodos industrial (ENTREGA INMEDIATA)",
        },
        {
          id: 10,
          code_buy: "98d28ec4-9eb3-4594-96df-05645d4eb441",
          category: "Alimentador",
          name_product:
            "Dispensador Automatico de comida para peces Resun Af 2009 D",
          price: 115000,
          quantity: 1,
          description:
            "Dispensador automatico para peces Marca Resun Referencia AF 2009 A",
        },
        {
          id: 11,
          code_buy: "98d28ec4-9eb3-4594-96df-05645d4eb441",
          category: "Alimentador",
          name_product: "Filtro extremo de cascada Resun 570 L/h Acuarios",
          price: 64500,
          quantity: 1,
          description:
            "Filtro externo de cascada Resun HF 2002, Consumo 6 W Capacidad de bombeo 570 L/H",
        },
      ],
      queryData: [],
    };
  },

  props: {
    code_buy: String,
  },

  components: {
    ItemAccordion,
  },

  created() {
    let query = Object.values(this.data).filter(
      (item) => item.code_buy === this.code_buy
    );
    this.queryData.push(...query);
  },
};
</script>

<template>
  <div class="container">
    <div class="content-acordion">
      <h3>Resumen del pedido</h3>
      <item-accordion
        v-for="(list, index) in queryData"
        :key="index"
        :id="list.id"
        :category="list.category"
        :description="list.description"
        :name_product="list.name_product"
        :price="list.price"
        :quantity="list.quantity"
        :isOpen="false"
      />
    </div>
  </div>
</template>
