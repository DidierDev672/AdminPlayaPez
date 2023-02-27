<script>
export default {
  name: "entry-product",
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container">
    <div class="card-entry-product">
      <div class="content-entry-product">
        <h4>Ingreso de los productos</h4>
      </div>
      <div class="flex-entry-product">
        <div class="item-entry-product">
          <label>Nombre producto</label>
          <input type="text" class="text-field" placeholder="Nombre producto" />
        </div>
        <div class="item-entry-product">
          <label>Categoria</label>
          <select class="select-category" aria-label="Default select example">
            <option selected>Open this menu</option>
            <option value="1">Tilapia</option>
            <option value="2">Alimentador</option>
            <option value="3">Sensor</option>
          </select>
        </div>
        <div class="item-entry-product">
          <label>Precio</label>
          <input type="number" class="text-field" placeholder="Precio" />
        </div>
        <div class="item-entry-product">
          <label>Cantidad</label>
          <input type="number" class="text-field" placeholder="Cantidad" />
        </div>
        <div class="item-entry-product">
          <label>Descripcion</label>
          <textarea class="text-field" placeholder="Descripcion"></textarea>
        </div>
        <button type="button" class="btn-entry">Ingresar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  place-content: center;
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
  padding: 1rem;
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
  border: 3px solid #f8f9fa;
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
}

.btn-entry {
  font-weight: 600;
  font-size: 1rem;
  line-height: 2rem;
}
</style>
