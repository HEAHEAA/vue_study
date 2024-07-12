<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" alt="images"/>
  </div>

  <Container/>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile"/>
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>


<script>
import Container from "@/components/Container.vue";

export default {
  name: 'App',
  components: {
    Container: Container
  }
}
</script>

<style>
@import "assets/style.css";
</style>
