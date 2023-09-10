<template>
  <div class="pesanan-sukses">
    <Navbar />
    <div class="container">
      <div class="row justify-content-center mt-4">
        <div class="col text-center">
          <img
            :src="require('../assets/images/menunggu.png')"
            class="img-fluid"
            width="300" />
          <h2><strong>SUKSES!!!</strong></h2>
          <p>Pesanan Anda Segera Diproses <br />Selamat Menunggu 😁</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "PesananSukses",
  components: {
    Navbar,
  },
};
</script>

<style></style>
