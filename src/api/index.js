import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Refproduct = "products";

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
};
