<template>

  <!-- 모달창 -->
  <transition name="fade">
    <Modal
        :oneRoom="oneRoom"
        :modal="modal"
        :modalStatus="modalStatus"
        @closeModal="modal = false;"
    />
  </transition>


  <!-- 메뉴 -->
  <div class="menu">
    <a v-for="item in menu" :key="item">{{ item }}</a>
  </div>
  <DiscountComponent/>

  <!-- 콘텐츠 -->
<Card
    @openModal="modal = true; modalStatus=oneRooms.id"
    v-for="(oneRooms,i) in oneRoom"
    :key="oneRooms"
    :oneRooms="oneRoom[i]"
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
      report: [0, 0, 0],
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
    Card : Card,
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
  margin: 0;
}

div {
  box-sizing: border-box;
}

.white-bg image {
  background: white;
  border-radius: 8px;
  padding: 20px;
}

/* fade는 class 명임*/
.fade-enter-from{
  opacity: 0;
  transform: translateY(-1000px);
}
.fade-enter-active{
  transition: all .5s;
}
.fade-enter-to{
  opacity: 1;
  transform: translateY(0px);
}


.fade-leave-from{
  opacity: 1;

}
.fade-leave-active{
  transition: all .5s;
}
.fade-leave-to{
  opacity: 0;
}

</style>
