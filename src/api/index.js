import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Refproduct = "products";
const Reforder = "headerBuy";

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
};
