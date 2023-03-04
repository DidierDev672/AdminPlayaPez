<script>
export default {
  name: "detail-ask-pond",
};
</script>

<template>
  <div class="container">
    <div class="card-detail-ask">
      <div class="content-detail-ask">
        <h3>Detalle de la solitud</h3>
      </div>
      <div class="flex-column-ask">
        <div class="item-ask">
          <label>Producto</label>
          <input
            type="text"
            class="text-field"
            placeholder="Nombre de producto"
          />
        </div>
        <div class="item-ask">
          <label>Cambiar estado producion</label>
          <select class="form-select-ask" aria-label="Default select">
            <opntion selected>Abrir este menu</opntion>
            <option value="1">Activo</option>
            <option value="2">En espera</option>
          </select>
        </div>
        <div class="item-ask">
          <label>Densidad</label>
          <input
            type="number"
            class="text-field"
            placeholder="Densidad o peso"
          />
        </div>
        <div class="item-ask">
          <label>Nota</label>
          <textarea class="text-field" placeholder="Escribir nota"></textarea>
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
  padding: 2rem;
}

.card-detail-ask {
  display: flex;
  flex-direction: column;
  place-content: center;
  margin: auto;
}
.card-detail-ask {
  width: 50rem;
  background-color: #ffffff;
  border: 2px solid #e9ecef;
  border-radius: 0.5rem;
  box-shadow: 8px 8px 8px #dee2e6;
  padding: 0.5rem;
}

.content-detail-ask > h3 {
  display: flex;
  place-content: center;
}

.content-detail-ask > h3 {
  font-weight: 900;
  font-size: 2rem;
  line-height: 2rem;
}

.flex-column-ask {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}

.item-ask {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item-ask {
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  padding: 0.5rem;
}

.item-ask > label {
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
}

.form-select-ask {
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  box-shadow: 6px 6px 6px #dee2e6;
  padding: 0.5rem;
}

.text-field {
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  box-shadow: 6px 6px 6px #dee2e6;
  padding: 0.5rem;
}

.btn-change {
  margin: auto;
}
.btn-change {
  width: 10rem;
  background-color: #ffd166;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.btn-change {
  font-weight: 800;
  font-size: 1rem;
  line-height: 2rem;
}
</style>
