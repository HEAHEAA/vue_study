<template>

  <div class="menu">
    <a v-for="item in menu" :key="item">{{item}}</a>
  </div>

  <img alt="Vue logo" src="./assets/logo.png">

  <div v-for="(products,i) in product" :key="i">
    <h4>{{products}}</h4>
    <p>XX 만원</p>
    <button @click="increase(i)">허위매물신고</button>
    <span>신고 수: {{신고수[i]}}</span>
    <hr/>
  </div>

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      신고수 : [0,0,0],
      menu: ['Home', 'Shop', 'About'],
      product: ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  },
  methods: {
    increase(arr) {
      this.신고수[arr] += 1;
    },

  }
}
</script>

<style>
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

</style>
