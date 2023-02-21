<script></script>

<template>
  <div class="container">
    <div class="card-sign-in">
      <div class="header-card-sign-in">
        <h4>Bienvenido a PlayaPez</h4>
        <div class="flex-column-sign-in">
          <div class="item-sign-in">
            <label>Correo electronico</label>
            <input
              type="email"
              class="text-field"
              placeholder="nombre@nombre.com"
            />
          </div>
          <div class="item-sign-in">
            <label>Password</label>
            <input type="password" class="text-field" placeholder="Password" />
          </div>
          <router-link to="/sign-up" class="link-sing-up"
            >Registar usuario</router-link
          >
          <button type="button" class="btn-sign-in">Inciar Session</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  display: flex;
  place-items: center;
  place-content: center;
  margin-top: 7rem;
}

.card-sign-in {
  width: 50rem;
  background-color: #ffffff;
  color: #20262e;
  border-radius: 0.5rem;
  border: 2px solid #eeeeee;
  box-shadow: 8px 8px 8px #f5f5f5;
  padding: 2rem;
}

.header-card-sign-in {
  padding: 1rem;
}

.header-card-sign-in > h4 {
  font-weight: 800;
  font-size: 2rem;
  line-height: 2rem;
}

.flex-column-sign-in {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}

.item-sign-in {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
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

.text-field {
  border-radius: 0.5rem;
  border: none;
  box-shadow: 6px 6px 6px #f5f5f5;
  padding: 0.5rem;
}

.btn-sign-in {
  display: flex;
  margin: auto;
  place-content: center;
}
.btn-sign-in {
  width: 10rem;
  background-color: #ffea20;
  border-radius: 0.5rem;
  border: none;
  padding: 0.7rem;
}

.btn-sign-in {
  font-weight: 600;
  font-size: 1rem;
  line-height: 2rem;
}

.link-sing-up {
  text-decoration: none;
  color: #20262e;
  font-size: 1.5rem;
  line-height: 0.5rem;
}

.link-sing-up {
  text-align: center;
}
</style>
