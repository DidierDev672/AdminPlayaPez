<script>
export default {
  name: "home-view",
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Pedidos",
          cover: new URL(
            `../assets/Orders/pexels-photo-6169033.webp`,
            import.meta.url
          ).href,
          path: "/orders",
        },
        {
          id: 2,
          name: "Estanques",
          cover: new URL(
            `../assets/Pond/pexels-photo-2560899.jpeg`,
            import.meta.url
          ).href,
          path: "/pond",
        },
        {
          id: 3,
          name: "Cosechas",
          cover: new URL(
            `../assets/Pick/pexels-photo-8351892.webp`,
            import.meta.url
          ).href,
          path: "",
        },
        {
          id: 4,
          name: "Productos",
          cover: new URL(
            "../assets/Products/pexels-photo-947174.jpeg",
            import.meta.url
          ).href,
          path: "/products",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="content-home">
      <h4>Area de trabajo</h4>
      <hr />
      <div class="grid-home">
        <div class="item-home" v-for="(list, index) in data" :key="index">
          <div class="card-home">
            <div class="flex-column-home">
              <div class="item-home">
                <img :src="list.cover" class="img-responsive" />
                <h5>{{ list.name }}</h5>
                <router-link class="btn-check" :to="list.path"
                  >Revisar</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  place-content: center;
}

.content-home {
  padding: 1rem;
}

.content-home > h4 {
  display: flex;
  margin: auto;
  place-content: center;
}

.content-home > h4 {
  font-weight: 800;
  font-size: 3rem;
  line-height: 2rem;
}

.img-responsive {
  display: flex;
  border-radius: 0.5rem;
  width: 100%;
  place-content: center;
}

.grid-home {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: minmax(100px, auto);
  gap: 20px;
}

.item-home {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.item-home > h5 {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
}

.card-home {
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 2px solid #eeeeee;
  box-shadow: 8px 8px 8px #f5f5f5;
  padding: 2rem;
}

.flex-column-home {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn-check {
  width: 10rem;
  background-color: #ffea20;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.btn-check {
  display: flex;
  margin: auto;
  place-content: center;
}

.btn-check {
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
}
</style>
