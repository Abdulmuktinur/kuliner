<template>
  <div class="card card-product shadow">
    <img
      :src="require('../assets/images/' + product.gambar)"
      class="card-img-top"
      alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Harga : Rp. {{ product.harga }}</p>
      <router-link class="btn btn-success border-0" :to="'/foods/' + product.id"
        ><b-icon-cart></b-icon-cart> Pesan</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style></style>
