<script>
export default {
  name: "item-accordion",
  data() {
    return {
      Open: this.isOpen,
    };
  },
  props: {
    id: Number,
    category: String,
    description: String,
    name_product: String,
    price: Number,
    quantity: Number,
    isOpen: Boolean,
  },

  methods: {
    visible() {
      if(this.Open === false){
        this.Open = true;
      }

      // if(this.Open === true){
      //   this.Open = false;
      // }
    },
  },
};
</script>

<template>
  <section>
    <div class="accordion-content">
      <div class="content-summary">
        <div>
          <h4>{{ name_product }}</h4>
        </div>
        <div>
          <button type="button" class="btn-arrow" @click="visible">
            <i class="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>
      <ul :class="{ visible: Open }">
        <li>{{ name_product }}</li>
        <li>{{ category }}</li>
        <li>{{ price }}</li>
        <li>{{ quantity }}</li>
        <li>{{ description }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.accordion-content {
  border-radius: 0.5rem;
  border: 2px solid #daeaf1;
  box-shadow: 6px 6px 6px #deedf0;
  padding: 0.5rem;
  place-content: center;
}
.content-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: minmax(50px, auto);
  gap: 20px;
}

.btn-arrow {
  border: none;
  cursor: pointer;
  position: relative;
  right: -360px;
  margin-top: 10px;
}

ul {
  display: none;
}

.visible {
  display: block;
}
</style>
