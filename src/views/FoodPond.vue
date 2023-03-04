<script>
export default {
  name: "food-ask",
};
</script>

<template>
  <div class="container">
    <div class="card-food-pond">
      <div class="content-food-pond">
        <img
          src="../assets/Pond/pexels-photo-5637353.jpeg"
          class="img-responsive"
        />
        <h3>Alimentacion</h3>
      </div>
      <div class="flex-column-food-pond">
        <div class="item-food-pond">
          <label>Numero de semana</label>
          <input
            type="number"
            class="text-field"
            placeholder="Numero de semana"
          />
        </div>
        <div class="item-food-pond">
          <label>Pesos</label>
          <div class="grid-weigth">
            <div class="item-weigth">
              <label>Desde</label>
              <input
                type="number"
                class="text-field"
                placeholder="Peso desde"
              />
            </div>
            <div class="item-weigth">
              <label>Hasta</label>
              <input
                type="number"
                class="text-field"
                placeholder="Peso hasta"
              />
            </div>
          </div>
        </div>
        <div class="item-food-pond">
          <label>Alimentacion diaria</label>
          <input
            type="number"
            class="text-field"
            placeholder="Alimentacion diaria"
          />
        </div>
        <div class="item-food-pond">
          <label>Porciones al dia</label>
          <input
            type="number"
            class="text-field"
            placeholder="Porciones de alimentos"
          />
        </div>
        <div class="item-food-pond">
          <label>Alimentacion a la semana </label>
          <input
            type="number"
            class="text-field"
            placeholder="Alimentacion a la semana"
          />
        </div>
        <button type="button" class="btn-save">Guardar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  place-content: center;
}

.card-food-pond {
  width: 50rem;
  background-color: #f8f9fa;
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  box-shadow: 6px 6px 6px #dee2e6;
  padding: 0.5rem;
}

.content-food-pond > h3 {
  display: flex;
  place-content: center;
}

.content-food-pond > h3 {
  font-weight: 900;
  font-size: 2rem;
  line-height: 2rem;
}

.flex-column-food-pond {
  display: flex;
  flex-direction: column;
  gap: 20px;
  place-content: center;
}

.item-food-pond {
  display: flex;
  flex-direction: column;
  gap: 10px;
  place-content: center;
}

.item-food-pond {
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  padding: 0.5rem;
}

.item-food-pond > label {
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
}

.text-field {
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  box-shadow: 6px 6px 6px #dee2e6;
  padding: 0.5rem;
}

.grid-weigth {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.item-weigth {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item-weigth {
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  padding: 0.5rem;
}

.item-weigth > label {
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
}

.btn-save {
  display: flex;
  margin: auto;
  place-content: center;
}
.btn-save {
  width: 7rem;
  background-color: #fee440;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.btn-save {
  font-weight: 600;
  font-size: 1rem;
  line-height: 2rem;
}

.img-responsive {
  display: flex;
  width: 100%;
  border-radius: 0.5rem;
}
</style>
