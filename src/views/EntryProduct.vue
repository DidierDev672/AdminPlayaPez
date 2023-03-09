<script>
import { mapActions } from "vuex";
import Function from "../function";
import { createToast } from "mosha-vue-toastify";

export default {
  name: "entry-product",
  data() {
    return {
      name_product: "",
      category: "Open this menu",
      price: 0,
      quantity: 0,
      description: "",
    };
  },

  methods: {
    ...mapActions("product", ["addProduct"]),

    saveProducts() {
      let dataProducts = {
        name_product: this.name_product,
        category: this.category,
        price: this.price,
        quantity: this.quantity,
        description: this.description,
        date_entry: new Date(),
        id: Function.generator_code(),
      };

      if (
        this.name_product !== "" &&
        this.category !== "Open this menu" &&
        this.description !== "" &&
        this.price !== 0 &&
        this.quantity !== 0
      ) {
        this.addProduct({ products: dataProducts });
        createToast("La informacion se ha almacenado con exito");
        this.name_product = "";
        this.description = "";
        this.price = 0;
        this.quantity = 0;
      } else {
        createToast("Debe llenar todos los campos");
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="card-entry-product">
      <div class="content-entry-product">
        <img
          src="../assets/Products/pexels-photo-1267338.jpeg"
          class="img-responsive"
        />
        <router-link to="/products" class="btn-back">
          <i class="fa-solid fa-arrow-left"></i>
        </router-link>
        <h4>Ingreso de los productos</h4>
      </div>
      <div class="flex-entry-product">
        <div class="item-entry-product">
          <label>Nombre producto</label>
          <input
            type="text"
            class="text-field"
            v-model="name_product"
            placeholder="Nombre producto"
          />
        </div>
        <div class="item-entry-product">
          <label>Categoria</label>
          <select
            class="select-category"
            v-model="category"
            aria-label="Default select example"
          >
            <option selected>Open this menu</option>
            <option value="Tilapia">Tilapia</option>
            <option value="Alimentador">Alimentador</option>
            <option value="Medidor">Medidor</option>
            <option value="Sensor">Sensor</option>
          </select>
        </div>
        <div class="item-entry-product">
          <label>Precio</label>
          <input
            type="number"
            class="text-field"
            v-model="price"
            placeholder="Precio"
          />
        </div>
        <div class="item-entry-product">
          <label>Cantidad</label>
          <input
            type="number"
            class="text-field"
            v-model="quantity"
            placeholder="Cantidad"
          />
        </div>
        <div class="item-entry-product">
          <label>Descripcion</label>
          <textarea
            class="text-field"
            v-model="description"
            placeholder="Descripcion"
          ></textarea>
        </div>
        <button type="button" class="btn-entry" @click="saveProducts()">
          Ingresar
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  place-content: center;
}

.img-responsive {
  display: flex;
  width: 100%;
  border-radius: 0.5rem;
}

.btn-back {
  display: flex;
  place-content: center;
}
.btn-back {
  text-decoration: none;
  width: 2rem;
  background-color: #fee440;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.card-entry-product {
  width: 50rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  box-shadow: 6px 6px 6px #dee2e6;
  padding: 0.5rem;
}

.content-entry-product {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.content-entry-product > h4 {
  display: flex;
  place-content: center;
}

.content-entry-product > h4 {
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 2rem;
}

.flex-entry-product {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}

.item-entry-product {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item-entry-product {
  border: 3px solid #e9ecef;
  border-radius: 0.5rem;
  padding: 0.7rem;
}

.item-entry-product > label {
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
}

.text-field {
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  box-shadow: 6px 6px 6px #e9ecef;
  padding: 0.5rem;
}

.select-category {
  background-color: #f8f9fa;
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  box-shadow: 6px 6px 6px #dee2e6;
  padding: 0.5rem;
}

.btn-entry {
  display: flex;
  margin: auto;
  place-content: center;
}
.btn-entry {
  width: 7rem;
  background-color: #fee440;
  border-radius: 0.5rem;
  border: none;
  padding: 0.7rem;
  cursor: pointer;
}

.btn-entry {
  font-weight: 600;
  font-size: 1rem;
  line-height: 2rem;
}
</style>
