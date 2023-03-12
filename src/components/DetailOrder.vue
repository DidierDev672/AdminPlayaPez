<script>
import { collection, query, where, getDocs } from "firebase/firestore";
import { mapGetters, mapActions } from "vuex";
import { db } from "../api/firebase";
import { createToast } from "mosha-vue-toastify";
import AccordionView from "../styles/components/Accordion.vue";

export default {
  name: "detail-order",
  data() {
    return {
      state_buy: "Abrir el seleccionador menu",
      note: "",
      id: "",
    };
  },
  props: {
    code_buy: String,
  },

  computed: {
    ...mapGetters("order", ["getListbyDetail"]),

    data() {
      return this.getListbyDetail(this.code_buy);
    },
  },

  methods: {
    ...mapActions("order", ["updateStateOrder"]),

    changedState() {
      if (this.state_buy !== "Abrir el seleccionador menu") {
        this.updateStateOrder({
          state_order: this.state_buy,
          note: this.note,
          id: this.id,
        });
        createToast("La actualizacion se ha actualizado con exito");
      } else {
        createToast("Debe llenar todos los campos");
      }
    },

    async queryidDocument() {
      const q = query(
        collection(db, "headerBuy"),
        where("code_buy", "==", this.code_buy)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.id = doc.id;
      });
    },
  },

  components: {
    AccordionView,
  },

  created() {
    this.$store.dispatch("order/fetchDetail");
    this.queryidDocument();
  },
};
</script>

<template>
  <div class="container">
    <div class="card-detail-order">
      <router-link to="/orders" class="btn-back has-transition">
        <i class="fa-solid fa-arrow-left"></i>
      </router-link>
      <div class="content-detail-order">
        <img
          src="../assets/Orders/pexels-photo-6169668.jpeg"
          class="img-responsive"
        />
        <h4>Detalle del pedido</h4>
      </div>
      <div class="flex-column-detail-order">
        <div class="item-detail-order">
          <label>Cambiar estado</label>
          <select
            class="change-status"
            arial-label="Default select"
            v-model="state_buy"
          >
            <option selected>Abrir el seleccionador menu</option>
            <option value="preparation">En preparacion</option>
            <option value="road">En camino</option>
          </select>
        </div>
        <div class="item-detail-order">
          <label>Nota</label>
          <textarea
            class="field-text"
            placelholder="Escribir nota"
            v-model="note"
          ></textarea>
        </div>
        <div class="flex-accordion">
          <accordion-view :code_buy="code_buy" />
        </div>
        <button type="button" class="btn-change" @click="changedState()">
          Cambiar estado
        </button>
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

.btn-back {
  display: flex;
  place-content: center;
  width: 3rem;
  background-color: #ffee32;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
}

.btn-back {
  text-decoration: none;
}

.img-responsive {
  display: flex;
  margin: auto;
  width: 100%;
  border-radius: 0.5rem;
}

.card-detail-order {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.card-detail-order {
  width: 60rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  box-shadow: 6px 6px 6px #dee2e6;
  padding: 2rem;
}

.content-detail-order {
  padding: 1rem;
}

.content-detail-order > h4 {
  display: flex;
  margin: auto;
  place-content: center;
}
.content-detail-order > h4 {
  font-weight: 800;
  font-size: 2rem;
  line-height: 2rem;
}

.flex-column-detail-order {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.item-detail-order {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item-detail-order {
  border: 2px solid #dee2e6;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.item-detail-order > label {
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
}

.change-status {
  border-radius: 0.5rem;
  border: none;
  box-shadow: 8px 8px 8px #e8eae6;
  padding: 0.5rem;
}

.field-text {
  border-radius: 0.5rem;
  border: 2px solid #dee2e6;
  box-shadow: 8px 8px 8px #ced4da;
  padding: 0.5rem;
}

.btn-change {
  display: flex;
  margin: auto;
  place-content: center;
}
.btn-change {
  width: 10rem;
  background-color: #ffea20;
  border-radius: 0.5rem;
  border: none;
  padding: 0.7rem;
}

.btn-change {
  font-weight: 600;
  font-size: 1rem;
  line-height: 2rem;
}

.flex-accordion {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
