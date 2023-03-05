<script>
export default {
  name: "pond-views",
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Registro estanque",
          cover: new URL(
            "../assets/Pond/pexels-photo-15007759.jpeg",
            import.meta.url
          ).href,
          path: "/ask-pond",
        },
        {
          id: 2,
          name: "Alimentacion",
          cover: new URL(
            "../assets/Pond/pexels-photo-2067510.jpeg",
            import.meta.url
          ).href,
          path: "/food-pond",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="content-pond">
      <h3>Estanques</h3>
    </div>
    <div class="grid-pond">
      <div class="item-pond" v-for="(list, index) in data" :key="index">
        <div class="card-pond">
          <img class="img-responsive" :src="list.cover" />
          <h4>{{ list.name }}</h4>
          <router-link :to="list.path" class="btn-check">Revisar</router-link>
        </div>
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

.content-pond > h3 {
  display: flex;
  place-content: center;
}

.content-pond > h3 {
  font-weight: 900;
  font-size: 2rem;
  line-height: 2rem;
}

.grid-pond {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: minmax(100px, auto);
  gap: 20px;
}

.item-pond {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card-pond {
  display: flex;
  flex-direction: column;
  place-content: center;
  margin: auto;
}

.card-pond {
  width: 70%;
  background-color: #f8f9fa;
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  box-shadow: 8px 8px 8px #dee2e6;
  padding: 0.5rem;
}

.card-pond > h4 {
  font-weight: 900;
  font-size: 2rem;
  line-height: 2rem;
}

.img-responsive {
  display: flex;
  width: 100%;
  border-radius: 0.5rem;
  place-content: center;
}

.btn-check {
  width: 7rem;
  background-color: #fee440;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.btn-check {
  text-decoration: none;
  font-weight: 700;
  text-align: center;
}
</style>
