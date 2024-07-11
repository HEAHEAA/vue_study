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


  <DiscountComponent
      v-if="showDiscount === true"
      :showDiscountNum="showDiscountNum"
  />


  <button class="sort-btn" @click="sortBack()">되돌리기</button>
  <button class="sort-btn" @click="priceSort()">가격 낮은순 정렬</button>
  <button class="sort-btn" @click="priceUpSort()">가격 높은순 정렬</button>
  <button class="sort-btn" @click="priceEngSort()">가격 알파벳 정렬</button>

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
      original: [...data],
      report: [0, 0, 0],
      menu: ['Home', 'Shop', 'About'],
      product: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      modal: false,
      modalStatus: 0,
      oneRoom: data,
      showDiscount: true,
      showDiscountNum: 10,
    }
  },
  methods: {
    priceSort() { //낮은 가격순
      this.oneRoom.sort((a, b) => a.price - b.price);
    },
    priceUpSort() { //가격 높은순
      this.oneRoom.sort((a, b) => b.price - a.price);
    },
    priceEngSort() { //알파벳순
      this.oneRoom.sort((a, b) => b.title > a.title ? -1 : 1);
    },
    sortBack() {//array 되돌리기
      this.oneRoom = [...this.original];
    },
  },

  beforeMount() { //마운트 되기전에 실핼
  },

  //html 생성되기 전
  created() {


  },

  //ajax 통신할 때도 사용함.
  //html 생성 후
  mounted() { //라이프사이클 훅

    let interval = setInterval(() => {
      if (this.showDiscountNum > 0) {
        this.showDiscountNum--;
      }else {
        clearInterval(interval);
        // alert('할인이 끝났숩니다.')
      }
    }, 1000);





    // setTimeout(() => {
    //     this.showDiscount = false;
    // }, 2000);
  },

  components: {
    Card: Card,
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

.sort-btn {
  margin-left: 10px;
  margin-bottom: 10px;
}


/* fade는 class 명임*/
.fade-enter-from {
  opacity: 0;
  transform: translateY(-1000px);
}

.fade-enter-active {
  transition: all .5s;
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}


.fade-leave-from {
  opacity: 1;

}

.fade-leave-active {
  transition: all .5s;
}

.fade-leave-to {
  opacity: 0;
}


</style>
