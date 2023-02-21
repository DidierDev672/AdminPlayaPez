<template>
  <div class="container">
    <div class="card-sign-up">
      <router-link to="/" class="btn-back"
        ><i class="fa-solid fa-arrow-left"></i
      ></router-link>
      <div class="header-sign-up">
        <img
          src="../assets/SignUp/pexels-photo-8088495.webp"
          class="img-responsive"
        />
        <h4>Datos personales</h4>
        <hr />
      </div>
      <div class="grid-sign-in">
        <div class="item-sign-in">
          <label>Nombre completo</label>
          <input type="text" class="field-text" placeholder="Nombre completo" />
        </div>
        <div class="item-sign-in">
          <label>Telefono</label>
          <input type="tel" class="field-text" placeholder="Telefono" />
        </div>
        <div class="item-sign-in">
          <label>Pais</label>
          <input type="text" class="field-text" placeholder="Pais" />
        </div>
        <div class="item-sign-in">
          <label>Ciudad</label>
          <input type="text" class="field-text" placeholder="Ciudad" />
        </div>
        <div class="item-sign-in">
          <label>Departamento</label>
          <input type="text" class="field-text" placeholder="Departamento" />
        </div>
        <div class="item-sign-in">
          <label>Direccion</label>
          <input type="text" class="field-text" placeholder="Direccion" />
        </div>
      </div>
      <br />
      <button type="button" class="btn-sign-up">Registar</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  place-content: center;
  margin-top: 10rem;
}

.card-sign-up {
  width: 50rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 2px solid #eeeeee;
  box-shadow: 8px 8px 8px #f5f5f5;
  padding: 2rem;
}

.header-sign-up {
  padding: 1rem;
}

.header-sign-up > h4 {
  display: flex;
  margin: auto;
  place-content: center;
}
.header-sign-up > h4 {
  font-weight: 800;
  font-size: 2rem;
  line-height: 2rem;
}

.grid-sign-in {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: minmax(100px, auto);
  gap: 20px;
}

.item-sign-in {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item-sign-in {
  border: 2px solid #e8f6ef;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.item-sign-in > label {
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
}

.field-text {
  border-radius: 0.5rem;
  border: none;
  box-shadow: 6px 6px 6px #f5f5f5;
  padding: 0.5rem;
}

.btn-sign-up {
  display: flex;
  margin: auto;
  place-content: center;
}
.btn-sign-up {
  width: 10rem;
  background-color: #ffea20;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.btn-sign-up {
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
}

.img-responsive {
  display: flex;
  border-radius: 0.8rem;
  width: 100%;
  place-content: center;
}

.btn-back {
  background-color: #fff591;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.btn-back {
  font-weight: 800;
  font-size: 1rem;
  line-height: 2rem;
}
</style>
