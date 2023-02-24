<script>
export default {
  name: "item-accordion",
  data() {
    return {
      Open: this.isOpen,
      Down: false,
      Above: false,
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
      if (this.Open === false) {
        this.Open = true;
        this.Down = true;
        this.Above = true;
      }
    },

    Hide() {
      if (this.Open === true) {
        this.Open = false;
        this.Down = false;
        this.Above = false;
      }
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
          <div class="flex-row">
            <div class="item-row">
              <button
                type="button"
                class="btn-arrow"
                :class="{ arrow: Down }"
                @click="visible"
              >
                <i class="fa-solid fa-arrow-down"></i>
              </button>
            </div>
            <div class="item-row">
              <button
                type="button"
                class="btn-above"
                :class="{ above: Above }"
                @click="Hide"
              >
                <i class="fa-solid fa-arrow-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ul :class="{ visible: Open }" class="list-group">
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
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  right: -360px;
  margin-top: 10px;
}

.btn-above {
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  right: -350px;
  margin-top: 10px;
}

.btn-above {
  display: none;
}

ul {
  display: none;
}

.flex-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.visible {
  display: block;
}

.arrow {
  display: none;
}

.above {
  display: block;
}

.list-group {
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  box-shadow: 6px 6px 6px #dee2e6;
  padding: 0.5rem;
}

.list-group > li {
  list-style: none;
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  padding: 0.5rem;
}

.list-group > li {
  font-weight: 500;
  font-size: 1rem;
  line-height: 2rem;
}
</style>
