<template>
  <!-- 모달창 -->
  <Modal
      :oneRoom="oneRoom"
      :modal="modal"
      :modalStatus="modalStatus"
  />

  <!-- 메뉴 -->
  <div class="menu">
    <a v-for="item in menu" :key="item">{{item}}</a>
  </div>
  <DiscountComponent/>

  <!-- 콘텐츠 -->
 <Card
     :oneRoom="oneRoom"
     :modal="modal"
     :modalStatus="modalStatus"
     :report="report"
     :increase="increase"
     안녕="안녕!"
 />
</template>

<script>
import data from '../src/components/OneRoom';
import DiscountComponent from "@/components/DiscountComponent.vue";
import Modal from '@/components/Modal.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'App',
  data() {
    return {
      report : [0,0,0],
      menu: ['Home', 'Shop', 'About'],
      product: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      modal: false,
      modalStatus: 0,
      oneRoom: data,
    }
  },

  methods: {
    increase(array) {
      this.report[array] += 1;
    },
  },

  components: {
    Card,
    DiscountComponent: DiscountComponent,
    Modal: Modal,
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

body {
  margin : 0;
}
div {
  box-sizing: border-box;
}

.white-bg image{
  background: white;
  border-radius: 8px;
  padding: 20px;
}

</style>
