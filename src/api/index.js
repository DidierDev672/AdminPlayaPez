import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const Refproduct = "products";
const Reforder = "headerBuy";
const Refdetailorder = "detailBuy";

export default {
  async getProducts() {
    let products = [];
    const querySnapshot = await getDocs(collection(db, Refproduct));
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });

    return products;
  },

  async postProduct(products) {
    const docRef = await addDoc(collection(db, Refproduct), {
      ...products,
    });

    return docRef.id;
  },

  async getOrder() {
    let orders = [];
    const querySnapshot = await getDocs(collection(db, Reforder));
    querySnapshot.forEach((doc) => {
      orders.push(doc.data());
    });

    return orders;
  },

  async getDetailOrder() {
    let detail = [];
    const querySnapshot = await getDocs(collection(db, Refdetailorder));
    querySnapshot.forEach((doc) => {
      detail.push(doc.data());
    });

    return detail;
  },

  async updateOrders({ id, state_order, note }) {
    const orderRef = doc(db, Reforder, id);

    switch (state_order) {
      case "road":
        await updateDoc(orderRef, {
          state_road: true,
          note: note,
        });

        break;

      case "preparation":
        await updateDoc(orderRef, {
          state_preparation: true,
          note: note,
        });
        break;

      default:
        return "No se ha seleciona opciones";
    }
  },
};
