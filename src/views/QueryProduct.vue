<script>
import ItemProduct from "../components/ItemProduct.vue";
export default {
  name: "query-product",
  data() {
    return {
      data: [
        {
          id: 10,
          category: "Alimentador",
          description:
            "Dispensador automatico para peces Marca Resun Referencia AF 2009 A",
          name_product:
            "Dispensador Automatico de comida para peces Resun Af 2009 D",
          price: 11500,
          date_entry: "01/12/2022",
        },
        {
          id: 3,
          category: "Sensor",
          description:
            "Distribuidores de componentes electrónicos e implementos para impresoras 3D",
          name_product:
            "Modulo control llenado nivel Tanque Xh-m203 9-12v ac/dc",
          price: 25000,
          date_entry: "02/12/2022",
        },
        {
          id: 4,
          category: "Sensor",
          description:
            "Este sensor mide la temperatura del agua en grado .C o .F con la cual podemos tomar decisiones a la hora de la alimentación de los peces.",
          name_product: "Sensor de temperatura",
          price: 10000,
          date_entry: "03/12/2022",
        },
        {
          id: 2,
          category: "Sensor",
          description:
            "Nivel de líquido agua sensor detectar electrodos industrial (ENTREGA INMEDIATA)",
          name_product:
            "Nivel de líquido agua sensor detector electrodos industrial",
          price: 20900,
          date_entry: "04/12/2022",
        },
        {
          id: 11,
          category: "Alimentador",
          description:
            "Filtro externo de cascada Resun HF 2002, Consumo 6 W Capacidad de bombeo 570 L/H",
          name_product: "Filtro extremo de cascada Resun 570 L/h Acuarios",
          price: 64500,
          date_entry: "05/12/2022",
        },
        {
          id: 8,
          category: "Medidor",
          description:
            "Especificaciones: Estado del oxígeno, rango del oxígeno disuelto: 0.0- 20.00mg/L.",
          name_product:
            "Medidor Oxigeno Disuelto calidad agua analisis laboratorio",
          price: 890000,
          date_entry: "06/12/2022",
        },
        {
          id: 6,
          category: "Sensor",
          description:
            "Este sensor permite calcular el volumen de agua medida en m3, para poder tomar decisiones y generar mensajes de alarma en casos.",
          name_product: "Sensor de nivel de agua",
          price: 20900,
          date_entry: "07/12/2022",
        },
        {
          id: 13,
          category: "Tilapia",
          description:
            "Pescado fresco al por mayor: tilapia nilotica, tilapia roja por kilo. Preguntar por disponibilidad.",
          name_product: "Tilapia Roja",
          price: 14000,
          date_entry: "08/12/2022",
        },
      ],
    };
  },

  components: {
    ItemProduct,
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
          <th class="col">Ver detalle</th>
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
