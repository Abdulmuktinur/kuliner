<template>
  <div class="row mt-4">
    <div class="col">
      <div class="d-flex h-100">
        <div class="justify-content-center align-self-center">
          <h2><strong>Delicious Food Menu, </strong> <br />in Your Gadget</h2>
          <p>Ayo segera pilih dan pesan makanan favorit Anda</p>
          <router-link to="/foods" class="btn btn-lg btn-success border-0">
            <b-icon-arrow-right></b-icon-arrow-right> Pesan
          </router-link>
        </div>
      </div>
    </div>
    <div class="col">
      <img src="../assets/images/hero.svg" width="100%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<style></style>
