<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <hero />
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Foods</strong></h2>
        </div>

        <div class="col">
          <router-link class="view-all float-right" to="/foods">
            Lihat Semua<b-icon-chevron-right></b-icon-chevron-right
          ></router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProducts.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products", {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      })
      .then((response) => {
        this.setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
