<script>
export default {
  name: "product-views",
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Ingresar productos",
          cover: new URL(
            "../assets/Products/pexels-photo-9388400.jpeg",
            import.meta.url
          ).href,
          path: "/entry-product",
        },
        {
          id: 2,
          name: "Consultar productos",
          cover: new URL(
            "../assets/Products/pexels-photo-5380920.jpeg",
            import.meta.url
          ).href,
          path: "/query-product",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="content-products">
      <router-link to="/home" class="btn-back"> <i class="fa-solid fa-arrow-left"></i> </router-link>
      <h4>Area de productos, zona de trabajo</h4>
    </div>
    <div class="grid-products">
      <div class="item-products" v-for="(list, index) in data" :key="index">
        <div class="card-products">
          <img :src="list.cover" class="img-responsive" />
          <h4>{{ list.name }}</h4>
          <router-link :to="list.path" class="btn-admit">Ingresar</router-link>
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
.content-products {
  padding: 1rem;
}

.btn-back {
  width: 5rem;
  background-color: #fee440;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.content-products > h4 {
  display: flex;
  place-content: center;
}

.content-products > h4 {
  font-weight: 900;
  font-size: 2.5rem;
  line-height: 2rem;
}

.grid-products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: minmax(100px, auto);
  gap: 20px;
}

.item-products {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.card-products {
  background-color: #f8f9fa;
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  padding: 0.5rem;
}

.card-products {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}
.card-products > h4 {
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 2rem;
}

.img-responsive {
  display: flex;
  width: 100%;
  border-radius: 0.5rem;
  place-content: center;
}

.btn-admit {
  width: 10rem;
  background-color: #fee440;
  border: none;
  border-radius: 0.5rem;
  padding: 0.7rem;
}

.btn-admit {
  text-decoration: none;
  text-align: center;
  font-weight: 700;
}
</style>
