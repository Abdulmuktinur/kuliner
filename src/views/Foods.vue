<template>
  <div>
    <Navbar />
    <div class="container">
      <h2>Daftar <strong>Makanan</strong></h2>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Makanan Kesukaan Anda..."
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="searchFoods" />

            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-search></b-icon-search>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div
          class="col-md-12 text-center font-weight-bold fc mt-4"
          v-if="dataNotFound">
          Data tidak ditemukan
        </div>
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
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProducts.vue";
import axios from "axios";

export default {
  name: "FoodsView",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
      dataNotFound: false,
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchFoods() {
      axios
        .get(
          "https://my-json-server.typicode.com/Abdulmuktinur/json-server-vue/products?q=" +
            this.search
        )
        .then((response) => {
          this.setProduct(response.data);
          this.dataNotFound = response.data.length === 0;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/Abdulmuktinur/json-server-vue/products"
      )
      .then((response) => {
        this.setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
